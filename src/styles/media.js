import { css } from '@emotion/react'

export const breakpoints = {
  sm: 425,
  md: 768,
  lg: 1024,
  lgs: 1150,
  lgm: 1250,
  lgl: 1350,
  xl: 1440,
}

export const mq = (key) => (template, ...args) => css`
  @media (min-width: ${breakpoints[key]}px) {
    ${css(template, ...args)};
  }
`

export const mqMax = (key) => (template, ...args) => css`
  @media (max-width: ${breakpoints[key]}px) {
    ${css(template, ...args)};
  }
`
