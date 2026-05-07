import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useTheme } from 'styled-components'

export default function HeadTag({ title, metaDescription, keywords }) {
  const theme = useTheme()

  return (
    <Head>
      <title>GV | {title}</title>
      <meta name='theme-color' content={theme.colors.branding} />{' '}
      {/* Chrome, Firefox OS, and Opera */}
      <meta name='msapplication-navbutton-color' content={theme.colors.branding} />{' '}
      {/* Windows Phone */}
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content={theme.colors.branding}
      />{' '}
      {/* iOS Safari */}
      <meta name='description' content={metaDescription} />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
      />
      <meta name='keywords' content={keywords} />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
    </Head>
  )
}

// PropTypes Validation
HeadTag.propTypes = {
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  keywords: PropTypes.string
}

// Default Props
HeadTag.defaultProps = {
  keywords: ''
}
