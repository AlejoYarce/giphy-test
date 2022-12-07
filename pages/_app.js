import React, { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import StyleProvider from '~app/styles/StyleProvider'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  )
}

export default MyApp
