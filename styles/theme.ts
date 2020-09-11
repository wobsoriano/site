import { theme as chakraTheme } from '@chakra-ui/core';

const theme = {
  ...chakraTheme,
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,
      'html, body': {
        backgroundColor: 'navy.base',
        color: 'slate.base',
      },
    },
  },
  colors: {
    ...chakraTheme.colors,
    navy: {
      base: '#0a192f',
      light: '#172a45',
      lighter: '#303C55',
    },
    slate: {
      base: '#8892b0',
      light: '#a8b2d1',
      lighter: '#ccd6f6',
    },
    white: '#e6f1ff',
    green: {
      ...chakraTheme.colors.green,
      custom: '#64ffda',
    },
  },
};

export default theme;
