import { config } from './config.js';
import StyleDictionary from 'style-dictionary';
import * as fs from 'fs';
import type { FormatFnArguments, TransformedToken } from 'style-dictionary/types';
import { fileHeader, getReferences, usesReferences } from 'style-dictionary/utils';

const styleDictionary = new StyleDictionary(config);
console.log('Build started...');
console.log('\n==============================================');

styleDictionary.registerFormat({
  format: async ({ file, dictionary, options }: FormatFnArguments) => {
    const symbols = dictionary.allTokens.map(cssTemplate).join('') + '\n';

    const composedVars = fs
      .readFileSync('./composed-variables/composed-variables.css', 'utf-8')
      .match(/\/\* EXTRACTING_CSS_VARS_START \*\/([\S\s]*)\/\* EXTRACTING_CSS_VARS_END \*\//m)![1];

    return (
      (await fileHeader({ file })) +
      `${options.selector ?? ':root'} {\n${symbols}\n  /* Composed variables */\n\n  ${composedVars.trim()}\n}\n`
    );
  },
  name: 'css/variables',
});

styleDictionary.registerFormat({
  format: async (args: FormatFnArguments) =>
    args.dictionary.allTokens.map(scssTemplate).join('') + '\n',
  name: 'custom/format/scss',
});

styleDictionary.registerFormat({
  format: async (args: FormatFnArguments) => {
    const symbols = args.dictionary.allTokens.map(commonjsTemplate).join('');
    return `module.exports = {\n${symbols}};\n`;
  },
  name: 'custom/format/javascript/module',
});

styleDictionary.registerFormat({
  format: async ({ dictionary }: FormatFnArguments) => {
    const { allTokens } = dictionary;

    allTokens.forEach((token) => {
      // If a token uses a reference token, we add the original token object
      const usesReference = usesReferences(token);

      if (usesReference) {
        token.refOriginal = getReferences(token.original.value, dictionary.tokens);
      }
    });

    const fileContents = {
      tokens: allTokens,
    };

    return JSON.stringify(fileContents, null, 2);
  },
  name: 'json/extended',
});

// FINALLY, BUILD ALL THE PLATFORMS
await styleDictionary.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');

function cssTemplate(token: TransformedToken) {
  let output = '';
  if (token.deprecated || token.comment || token.attributes?.category === 'size') {
    output += '  /**\n';
    if (token.deprecated) {
      output += `   * @deprecated ${token.name} is deprecated`;
      if (token.deprecated_comment) {
        output += ` (${token.deprecated_comment})`;
      }
      output += '\n';
    }
    if (token.comment) {
      output += `   * ${token.comment}\n`;
    }
    if (token.type === 'dimension') {
      output += `   * Original Value: ${token.original.value}px\n`;
    }
    output += '   */\n';
  }
  output += `  --${token.name}: ${token.value};\n`;

  return output;
}

function scssTemplate(token: TransformedToken) {
  let output = '';
  if (token.deprecated) {
    output += `/// @deprecated Notice: ${token.name} is deprecated`;
    if (token.deprecated_comment) {
      output += ` (${token.deprecated_comment})`;
    }
    output += '\n';
  }

  if (token.comment) {
    output += `/// ${token.comment}\n`;
  }
  if (token.type === 'dimension') {
    output += `/// Original Value: ${token.original.value}px\n`;
  }
  output += `$${token.name}: ${token.value};\n`;

  return output;
}

function commonjsTemplate(token: TransformedToken) {
  let output = '';
  if (token.deprecated || token.comment) {
    output += '  /**\n';
    if (token.deprecated) {
      output += `   * @deprecated ${token.name} is deprecated`;
      if (token.deprecated_comment) {
        output += ` (${token.deprecated_comment})`;
      }
      output += '\n';
    }
    if (token.comment) {
      output += `   * ${token.comment}\n`;
    }
    output += '   */\n';
  }
  output += `  ${token.name}: '${token.value}',\n`;
  return output;
}
