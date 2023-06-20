'use client'

import { ReactNode, createContext, useContext } from "react";

interface IThemeContext {
  theme: 'dark' | 'light'
}

const ThemeContext = createContext<IThemeContext>({ theme: 'light' })

export const ThemeProvider = ({ children, theme }: IThemeContext & { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context)
    throw new Error("Theme must be provided inside the component")

  return context
}
