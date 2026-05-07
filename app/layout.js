// app/layout.jsx
'use client' // Mark this file as a client component

import React from 'react'
import SettingsProvider from '@/context/SettingsContext'
import GlobalStyle from '@/styles/globalStyle'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <SettingsProvider>
          {/* Optional: Include global styles */}
          <GlobalStyle />
          {children}
        </SettingsProvider>
      </body>
    </html>
  )
}
