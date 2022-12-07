import React from 'react'
import { Global, css } from '@emotion/react'

import { mq } from './media'
import { styled } from './theme'

const style = (theme) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *,
  a:visited,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  *,
  *:focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
    background-color: ${theme.colors.primary.white};
  }

  ul,
  li,
  html,
  body {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    font-family: sans-serif;
    font-weight: normal;
    font-size: 10px;
    color: ${theme.colors.primary.black};
    background-color: ${theme.colors.primary.background};

    padding: 0;
    margin: 0;
  }

  main {
    margin-top: ${theme.heights.navbar}px;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 60px;
    padding-top: 20px;

    h1 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 40px;
    }
  }

  button {
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    /* background: transparent; */
    padding: 0.5rem 0.8rem;
    cursor: pointer;

    /* inherit font & color from ancestor */
    text-align: inherit;
    color: inherit;
    font: inherit;

    /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable 'input' types in iOS */
    -webkit-appearance: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  input {
    margin: 0;
    padding: 0;
    border-radius: 0;
    border-width: 0.1rem;
  }

  .box-shadow {
    -webkit-box-shadow: 0 0.2rem 1.5rem 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0.2rem 1.5rem 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.2rem 1.5rem 0 rgba(0, 0, 0, 0.1);
  }

  svg {
    &.opened {
      transform: rotate(180deg);
      transition-duration: 300ms;
    }

    &.closed {
      transform: rotate(0deg);
      transition-duration: 300ms;
    }
  }

  /* 3rd parties */
  /* 3rd parties */
`

const GlobalStyles = (props) => <Global styles={style} {...props} />

export { GlobalStyles, style }

export const SectionContainer = styled.section`
  padding: 50px 20px;
`
