import type { DesignToken, DesignTokens } from 'style-dictionary/types';

const baseSpacing = 4;
const calculatedSpacing = (value: number): number => value * baseSpacing;

const attributes = {
  type: 'dimension',
  attributes: {
    category: 'size',
  },
} satisfies Partial<DesignToken>;

export const spacing = {
  fixed: {
    '-1x': {
      value: calculatedSpacing(1),
      ...attributes,
    },
    '-2x': {
      value: calculatedSpacing(2),
      ...attributes,
    },
    '-3x': {
      value: calculatedSpacing(3),
      ...attributes,
    },
    '-4x': {
      value: calculatedSpacing(4),
      ...attributes,
    },
    '-5x': {
      value: calculatedSpacing(5),
      ...attributes,
    },
    '-6x': {
      value: calculatedSpacing(6),
      ...attributes,
    },
    '-7x': {
      value: calculatedSpacing(7),
      ...attributes,
    },
    '-8x': {
      value: calculatedSpacing(8),
      ...attributes,
    },
    '-9x': {
      value: calculatedSpacing(9),
      ...attributes,
    },
    '-10x': {
      value: calculatedSpacing(10),
      ...attributes,
    },
    '-12x': {
      value: calculatedSpacing(12),
      ...attributes,
    },
    '-14x': {
      value: calculatedSpacing(14),
      ...attributes,
    },
    '-16x': {
      value: calculatedSpacing(16),
      ...attributes,
    },
    '-18x': {
      value: calculatedSpacing(18),
      ...attributes,
    },
    '-20x': {
      value: calculatedSpacing(20),
      ...attributes,
    },
    '-24x': {
      value: calculatedSpacing(24),
      ...attributes,
    },
    '-30x': {
      value: calculatedSpacing(30),
      ...attributes,
    },
  },
  responsive: {
    xxxs: {
      zero: {
        value: calculatedSpacing(3),
        ...attributes,
      },
      micro: {
        value: calculatedSpacing(3),
        ...attributes,
      },
      small: {
        value: calculatedSpacing(3),
        ...attributes,
      },
      medium: {
        value: calculatedSpacing(4),
        ...attributes,
      },
      large: {
        value: calculatedSpacing(4),
        ...attributes,
      },
      wide: {
        value: calculatedSpacing(4),
        ...attributes,
      },
      ultra: {
        value: calculatedSpacing(4),
        ...attributes,
      },
    },
    xxs: {
      zero: {
        value: calculatedSpacing(4),
        ...attributes,
      },
      micro: {
        value: calculatedSpacing(4),
        ...attributes,
      },
      small: {
        value: calculatedSpacing(4),
        ...attributes,
      },
      medium: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      large: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      wide: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      ultra: {
        value: calculatedSpacing(6),
        ...attributes,
      },
    },
    xs: {
      zero: {
        value: calculatedSpacing(5),
        ...attributes,
      },
      micro: {
        value: calculatedSpacing(5),
        ...attributes,
      },
      small: {
        value: calculatedSpacing(5),
        ...attributes,
      },
      medium: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      large: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      wide: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      ultra: {
        value: calculatedSpacing(6),
        ...attributes,
      },
    },
    s: {
      zero: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      micro: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      small: {
        value: calculatedSpacing(6),
        ...attributes,
      },
      medium: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      large: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      wide: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      ultra: {
        value: calculatedSpacing(8),
        ...attributes,
      },
    },
    m: {
      zero: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      micro: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      small: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      medium: {
        value: calculatedSpacing(10),
        ...attributes,
      },
      large: {
        value: calculatedSpacing(10),
        ...attributes,
      },
      wide: {
        value: calculatedSpacing(12),
        ...attributes,
      },
      ultra: {
        value: calculatedSpacing(12),
        ...attributes,
      },
    },
    l: {
      zero: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      micro: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      small: {
        value: calculatedSpacing(10),
        ...attributes,
      },
      medium: {
        value: calculatedSpacing(12),
        ...attributes,
      },
      large: {
        value: calculatedSpacing(14),
        ...attributes,
      },
      wide: {
        value: calculatedSpacing(14),
        ...attributes,
      },
      ultra: {
        value: calculatedSpacing(16),
        ...attributes,
      },
    },
    xl: {
      zero: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      micro: {
        value: calculatedSpacing(8),
        ...attributes,
      },
      small: {
        value: calculatedSpacing(12),
        ...attributes,
      },
      medium: {
        value: calculatedSpacing(16),
        ...attributes,
      },
      large: {
        value: calculatedSpacing(20),
        ...attributes,
      },
      wide: {
        value: calculatedSpacing(20),
        ...attributes,
      },
      ultra: {
        value: calculatedSpacing(24),
        ...attributes,
      },
    },
    xxl: {
      zero: {
        value: calculatedSpacing(12),
        ...attributes,
      },
      micro: {
        value: calculatedSpacing(12),
        ...attributes,
      },
      small: {
        value: calculatedSpacing(18),
        ...attributes,
      },
      medium: {
        value: calculatedSpacing(20),
        ...attributes,
      },
      large: {
        value: calculatedSpacing(24),
        ...attributes,
      },
      wide: {
        value: calculatedSpacing(24),
        ...attributes,
      },
      ultra: {
        value: calculatedSpacing(30),
        ...attributes,
      },
    },
  },
} satisfies DesignTokens;
