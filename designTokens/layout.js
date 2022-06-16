/* eslint-disable sort-keys */

const attributes = (group) => ({
  attributes: {
    group,
  },
});

module.exports = {
  base: {
    grid: {
      columns: {
        zero: {
          value: 4,
          ...attributes('base-grid-columns'),
        },
        micro: {
          value: 4,
          ...attributes('base-grid-columns'),
        },
        small: {
          value: 4,
          ...attributes('base-grid-columns'),
        },
        medium: {
          value: 8,
          ...attributes('base-grid-columns'),
        },
        large: {
          value: 8,
          ...attributes('base-grid-columns'),
        },
        wide: {
          value: 12,
          ...attributes('base-grid-columns'),
        },
        ultra: {
          value: 12,
          ...attributes('base-grid-columns'),
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
          value: 124,
          ...attributes('base-offset-responsive'),
        },
      },
    },
  },
};

/* eslint-enable sort-keys */
