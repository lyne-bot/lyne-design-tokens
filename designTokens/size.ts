import type { DesignToken, DesignTokens } from 'style-dictionary/types';

const attributes = (group?: string) =>
  ({
    type: 'dimension',
    attributes: {
      category: 'size',
      group,
    },
  }) satisfies Partial<DesignToken>;

export const size = {
  element: {
    xxxs: {
      zero: {
        value: 28,
        ...attributes(),
      },
      micro: {
        value: 28,
        ...attributes(),
      },
      small: {
        value: 28,
        ...attributes(),
      },
      medium: {
        value: 32,
        ...attributes(),
      },
      large: {
        value: 32,
        ...attributes(),
      },
      wide: {
        value: 32,
        ...attributes(),
      },
      ultra: {
        value: 32,
        ...attributes(),
      },
    },
    xxs: {
      zero: {
        value: 32,
        ...attributes(),
      },
      micro: {
        value: 32,
        ...attributes(),
      },
      small: {
        value: 32,
        ...attributes(),
      },
      medium: {
        value: 36,
        ...attributes(),
      },
      large: {
        value: 36,
        ...attributes(),
      },
      wide: {
        value: 36,
        ...attributes(),
      },
      ultra: {
        value: 36,
        ...attributes(),
      },
    },
    xs: {
      zero: {
        value: 36,
        ...attributes(),
      },
      micro: {
        value: 36,
        ...attributes(),
      },
      small: {
        value: 36,
        ...attributes(),
      },
      medium: {
        value: 40,
        ...attributes(),
      },
      large: {
        value: 40,
        ...attributes(),
      },
      wide: {
        value: 40,
        ...attributes(),
      },
      ultra: {
        value: 40,
        ...attributes(),
      },
    },
    s: {
      zero: {
        value: 44,
        ...attributes(),
      },
      micro: {
        value: 44,
        ...attributes(),
      },
      small: {
        value: 44,
        ...attributes(),
      },
      medium: {
        value: 48,
        ...attributes(),
      },
      large: {
        value: 48,
        ...attributes(),
      },
      wide: {
        value: 48,
        ...attributes(),
      },
      ultra: {
        value: 48,
        ...attributes(),
      },
    },
    m: {
      zero: {
        value: 48,
        ...attributes(),
      },
      micro: {
        value: 48,
        ...attributes(),
      },
      small: {
        value: 48,
        ...attributes(),
      },
      medium: {
        value: 56,
        ...attributes(),
      },
      large: {
        value: 56,
        ...attributes(),
      },
      wide: {
        value: 56,
        ...attributes(),
      },
      ultra: {
        value: 56,
        ...attributes(),
      },
    },
    l: {
      zero: {
        value: 56,
        ...attributes(),
      },
      micro: {
        value: 56,
        ...attributes(),
      },
      small: {
        value: 56,
        ...attributes(),
      },
      medium: {
        value: 64,
        ...attributes(),
      },
      large: {
        value: 64,
        ...attributes(),
      },
      wide: {
        value: 64,
        ...attributes(),
      },
      ultra: {
        value: 64,
        ...attributes(),
      },
    },
  },
  icon: {
    ui: {
      small: {
        value: 24,
        ...attributes('icon'),
      },
      medium: {
        value: 36,
        ...attributes('icon'),
      },
      large: {
        value: 48,
        ...attributes('icon'),
      },
    },
  },
} satisfies DesignTokens;
