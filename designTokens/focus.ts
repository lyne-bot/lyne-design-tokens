import type { DesignToken, DesignTokens } from 'style-dictionary/types';

const attributes = (group: string) =>
  ({
    type: 'dimension',
    attributes: {
      category: 'size',
      group,
    },
  }) satisfies Partial<DesignToken>;

export const focus = {
  outline: {
    offset: {
      value: 3,
      ...attributes('focus'),
    },
  },
} satisfies DesignTokens;
