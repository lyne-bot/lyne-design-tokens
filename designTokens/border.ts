import type { DesignToken, DesignTokens } from 'style-dictionary/types';

const baseBorderWidth = 1;
const baseBorderRadius = 2;

const borderWidth = (width: number): number => width * baseBorderWidth;
const borderRadius = (width: number): number => width * baseBorderRadius;

const attributes = {
  type: 'dimension',
  attributes: {
    category: 'size',
  },
} satisfies Partial<DesignToken>;

export const border = {
  width: {
    '1x': {
      value: borderWidth(1),
      ...attributes,
    },
    '2x': {
      value: borderWidth(2),
      ...attributes,
    },
    '3x': {
      value: borderWidth(3),
      ...attributes,
    },
  },
  radius: {
    '1x': {
      value: borderRadius(1),
      ...attributes,
    },
    '2x': {
      value: borderRadius(2),
      ...attributes,
    },
    '4x': {
      value: borderRadius(4),
      ...attributes,
    },
    '6x': {
      value: borderRadius(6),
      ...attributes,
    },
    '8x': {
      value: borderRadius(8),
      ...attributes,
    },
    '16x': {
      value: borderRadius(16),
      ...attributes,
    },
  },
} satisfies DesignTokens;
