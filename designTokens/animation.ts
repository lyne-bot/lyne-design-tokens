import type { DesignToken, DesignTokens } from 'style-dictionary/types';

const baseDuration = 40;
const duration = (value: number): number => value * baseDuration;
const attributes = {
  type: 'time',
  attributes: { category: 'time' },
} satisfies Partial<DesignToken>;

export const animation = {
  duration: {
    '-1x': {
      ...attributes,
      value: duration(1),
    },
    '-2x': {
      ...attributes,
      value: duration(2),
    },
    '-3x': {
      ...attributes,
      value: duration(3),
    },
    '-4x': {
      ...attributes,
      value: duration(4),
    },
    '-5x': {
      ...attributes,
      value: duration(5),
    },
    '-6x': {
      ...attributes,
      value: duration(6),
    },
    '-12x': {
      ...attributes,
      value: duration(12),
    },
  },
  easing: {
    value: 'cubic-bezier(.47, .1, 1, .63)',
  },
} satisfies DesignTokens;
