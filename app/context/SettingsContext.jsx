'use client'
import React, { useState, createContext, useMemo } from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import { ThemeProvider } from 'styled-components'

// Theme List
import { darkTheme, lightTheme } from 'app/styles/Theme'

// Localization Packs
import arJson from '@/config/localization/ar.json'
import engJson from '@/config/localization/eng.json'

export const SettingsContext = createContext({})

const listaTemas = {
  dark: darkTheme,
  light: lightTheme
}

export default function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(darkTheme)
  const [isEnglish, setIsEnglish] = useState(false)

  const changeTheme = newTheme => {
    setTheme(listaTemas[newTheme])
  }

  const toggleLanguage = () => {
    setIsEnglish(prev => !prev)
  }

  const language = isEnglish ? engJson : arJson

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      changeTheme,
      toggleLanguage,
      language
    }),
    [theme, isEnglish]
  )

  return (
    <SettingsContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  )
}

// PropTypes Validation
SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired // Use PropTypes instead of React.PropTypes
}
