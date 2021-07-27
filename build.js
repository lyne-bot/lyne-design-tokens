const StyleDictionary = require('style-dictionary')
  .extend(`${__dirname}/config.js`);
const fs = require('fs');
const _ = require('lodash');
const tokens = require('./designTokens');
const {
  baseSpacing
} = tokens.core;

StyleDictionary.registerTransform({
  matcher: (token) => token.attributes.type === 'spacings',
  name: 'calculateSpacings',
  transformer: (token) => token.value * baseSpacing,
  transitive: true,
  type: 'value'
});

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerFormat({
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/web-scss.template`)),
  name: 'custom/format/scss'
});

StyleDictionary.registerFormat({
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/commonjs.template`)),
  name: 'custom/format/javascript/module'
});

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
