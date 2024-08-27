import type { DesignToken, DesignTokens } from 'style-dictionary/types';

const attributes = (group: string, category = 'size') =>
  ({
    type: category === 'size' ? 'dimension' : undefined,
    attributes: {
      category,
      group,
    },
  }) satisfies Partial<DesignToken>;

export const layout = {
  base: {
    grid: {
      columns: {
        zero: {
          value: 4,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        micro: {
          value: 4,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        small: {
          value: 4,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        medium: {
          value: 8,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        large: {
          value: 8,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        wide: {
          value: 12,
          ...attributes('base-grid-columns', 'noUnit'),
        },
        ultra: {
          value: 16,
          ...attributes('base-grid-columns', 'noUnit'),
        },
      },
      gutter: {
        responsive: {
          zero: {
            value: 16,
            ...attributes('base-grid-gutter-responsive'),
          },
          micro: {
            value: 16,
            ...attributes('base-grid-gutter-responsive'),
          },
          small: {
            value: 24,
            ...attributes('base-grid-gutter-responsive'),
          },
          medium: {
            value: 24,
            ...attributes('base-grid-gutter-responsive'),
          },
          large: {
            value: 32,
            ...attributes('base-grid-gutter-responsive'),
          },
          wide: {
            value: 32,
            ...attributes('base-grid-gutter-responsive'),
          },
          ultra: {
            value: 32,
            ...attributes('base-grid-gutter-responsive'),
          },
        },
      },
    },
    offset: {
      responsive: {
        zero: {
          value: 16,
          ...attributes('base-offset-responsive'),
        },
        micro: {
          value: 20,
          ...attributes('base-offset-responsive'),
        },
        small: {
          value: 48,
          ...attributes('base-offset-responsive'),
        },
        medium: {
          value: 56,
          ...attributes('base-offset-responsive'),
        },
        large: {
          value: 64,
          ...attributes('base-offset-responsive'),
        },
        wide: {
          value: 72,
          ...attributes('base-offset-responsive'),
        },
        ultra: {
          value: 120,
          ...attributes('base-offset-responsive'),
        },
      },
    },
    page: {
      maxWidth: {
        value: 1200,
        ...attributes('base-page'),
      },
    },
  },
} satisfies DesignTokens;
