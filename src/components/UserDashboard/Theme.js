import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      blue: '#4164e3',
      cadet: '#8998a8',
      dark: '#243156',
      gray: '#a0acb9',
      green: '#007965',
      light: '#e9ebee',
      pure: '#fafafb',
      slate: '#77889a',
      white: '#fcfdfe',
      red: '#d6090f',
      lime: '#00af91',
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          p: '6',
          color: 'white',
          bg: 'brand.green',
          _hover: { bg: 'brand.green' },
          _active: { bg: 'brand.green' },
          _focus: { boxShadow: 'none' },
        },
        outline: {
          bg: 'transparent',
          borderWidth: '1px',
          color: 'brand.cadet',
          borderColor: 'brand.cadet',
          _hover: { bg: 'brand.blue' },
          _active: { bg: 'brand.light' },
          _focus: { boxShadow: 'none' },
        },
        ghost: {
          color: 'white',
          bg: 'rgba(0, 0, 0, 0.25)',
          _hover: { bg: 'rgba(0, 0, 0, 0.25)' },
          _active: { bg: 'rgba(0, 0, 0, 0.35)' },
          _focus: { boxShadow: 'none' },
        },
        link: {
          p: '0',
          height: 'full',
          bg: 'transparent',
          color: 'gray.500',
          rounded: 'none',
          _active: { bg: 'brand.light' },
          _focus: { boxShadow: 'none' },
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
})
