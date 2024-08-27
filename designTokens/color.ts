import type { DesignToken, DesignTokens } from 'style-dictionary/types';

const attributes = {
  type: 'color',
} satisfies Partial<DesignToken>;

export const color = {
  black: {
    ...attributes,
    value: 'rgba(0, 0, 0, 1)',
  },
  blackAlpha: {
    0: {
      ...attributes,
      value: 'rgba(0, 0, 0, 0)',
    },
    10: {
      ...attributes,
      value: 'rgba(0,0,0,0.1)',
    },
    15: {
      ...attributes,
      value: 'rgba(0,0,0,.15)',
    },
    20: {
      ...attributes,
      value: 'rgba(0,0,0,.2)',
    },
    30: {
      ...attributes,
      value: 'rgba(0,0,0,.3)',
    },
    40: {
      ...attributes,
      value: 'rgba(0,0,0,.4)',
    },
    50: {
      ...attributes,
      value: 'rgba(0,0,0,.5)',
    },
    60: {
      ...attributes,
      value: 'rgba(0,0,0,.6)',
    },
    70: {
      ...attributes,
      value: 'rgba(0,0,0,.7)',
    },
  },
  midnight: {
    ...attributes,
    value: 'rgba(21,21,21,1)',
  },
  charcoal: {
    ...attributes,
    value: 'rgba(33,33,33,1)',
  },
  iron: {
    ...attributes,
    value: 'rgba(68,68,68,1)',
  },
  anthracite: {
    ...attributes,
    value: 'rgba(90,90,90,1)',
  },
  granite: {
    ...attributes,
    value: 'rgba(104,104,104,1)',
  },
  metal: {
    ...attributes,
    value: 'rgba(118,118,118,1)',
  },
  metalAlpha: {
    0: {
      ...attributes,
      value: 'rgba(118,118,118,0)',
    },
    20: {
      ...attributes,
      value: 'rgba(118,118,118,.2)',
    },
  },
  smoke: {
    ...attributes,
    value: 'rgba(141,141,141,1)',
  },
  smokeAlpha: {
    0: {
      ...attributes,
      value: 'rgba(141,141,141,0)',
    },
    5: {
      ...attributes,
      value: 'rgba(141,141,141,.05)',
    },
    10: {
      ...attributes,
      value: 'rgba(141,141,141,.1)',
    },
    20: {
      ...attributes,
      value: 'rgba(141,141,141,.2)',
    },
  },
  storm: {
    ...attributes,
    value: 'rgba(168,168,168,1)',
  },
  graphite: {
    ...attributes,
    value: 'rgba(183,183,183,1)',
  },
  cement: {
    ...attributes,
    value: 'rgba(189,189,189,1)',
  },
  cementAlpha: {
    0: {
      ...attributes,
      value: 'rgba(189,189,189,0)',
    },
    20: {
      ...attributes,
      value: 'rgba(189,189,189,.2)',
    },
  },
  platinum: {
    ...attributes,
    value: 'rgba(205,205,205,1)',
  },
  platinumAlpha: {
    0: {
      ...attributes,
      value: 'rgba(205,205,205,0)',
    },
    20: {
      ...attributes,
      value: 'rgba(205,205,205,.2)',
    },
  },
  aluminium: {
    ...attributes,
    value: 'rgba(210,210,210,1)',
  },
  silver: {
    ...attributes,
    value: 'rgba(220,220,220,1)',
  },
  cloud: {
    ...attributes,
    value: 'rgba(229,229,229,1)',
  },
  cloudAlpha: {
    80: {
      value: 'rgba(229,229,229,.8)',
    },
  },
  milk: {
    ...attributes,
    value: 'rgba(246,246,246,1)',
  },
  red: {
    ...attributes,
    value: 'rgba(235,0,0,1)',
  },
  redAlpha: {
    0: {
      ...attributes,
      value: 'rgba(235,0,0,0)',
    },
    20: {
      ...attributes,
      value: 'rgba(235,0,0,.2)',
    },
    90: {
      ...attributes,
      value: 'rgba(235,0,0,.9)',
    },
  },
  redMode: {
    dark: {
      ...attributes,
      value: 'rgb(255,56,56,1)',
    },
  },
  red125: {
    ...attributes,
    value: 'rgba(198,0,24,1)',
  },
  red125Alpha: {
    0: {
      ...attributes,
      value: 'rgba(198,0,24,0)',
    },
    20: {
      ...attributes,
      value: 'rgba(198,0,24,.2)',
    },
  },
  red150: {
    ...attributes,
    value: 'rgba(162,0,19,1)',
  },
  white: {
    ...attributes,
    value: 'rgba(255,255,255,1)',
  },
  whiteAlpha: {
    0: {
      ...attributes,
      value: 'rgba(255,255,255,0)',
    },
    20: {
      ...attributes,
      value: 'rgba(255,255,255,.2)',
    },
    30: {
      ...attributes,
      value: 'rgba(255,255,255,.3)',
    },
    50: {
      ...attributes,
      value: 'rgba(255,255,255,.5)',
    },
    60: {
      ...attributes,
      value: 'rgba(255,255,255,.6)',
    },
    70: {
      ...attributes,
      value: 'rgba(255,255,255,.7)',
    },
  },
  sky: {
    ...attributes,
    value: 'rgba(0,121,199,1)',
  },
  night: {
    ...attributes,
    value: 'rgba(20,58,133,1)',
  },
  violet: {
    ...attributes,
    value: 'rgba(111,34,130,1)',
  },
  pink: {
    ...attributes,
    value: 'rgba(207,64,130,1)',
  },
  autumn: {
    ...attributes,
    value: 'rgba(232,78,16,1)',
  },
  orange: {
    ...attributes,
    value: 'rgba(242,126,0,1)',
  },
  peach: {
    ...attributes,
    value: 'rgba(252,187,0,1)',
  },
  lemon: {
    ...attributes,
    value: 'rgba(255,222,21,1)',
  },
  brown: {
    ...attributes,
    value: 'rgba(183,96,0,1)',
  },
  green: {
    ...attributes,
    value: 'rgba(0,138,54,1)',
  },
  turquoise: {
    ...attributes,
    value: 'rgba(0,165,155,1)',
  },
} satisfies DesignTokens;
