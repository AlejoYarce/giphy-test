import emotionStyled from '@emotion/styled'

import colors from './colors'
import { breakpoints } from './media'

const heights = {
  navbar: 60,
  footer: 60,
}

const zIndex = {
  under: -1,
  ground: 0,
  initial: 1,
  navBar: 10,
  topLevel: 5,
  modal: 100,
}

export const theme = {
  colors,
  heights,
  zIndex,
  breakpoints,
}

export const styled = emotionStyled
