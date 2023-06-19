'use client'

import { AllowedTheme, AllowedThemeHex } from "@/assets/colors";
import { ReactNode, createContext, useContext } from "react";

interface IThemeContext {
  theme: AllowedTheme
  hex: AllowedThemeHex
}

const ThemeContext = createContext<IThemeContext>({ theme: 'primary', hex: 500 })

export const ThemeProvider = ({ children, theme, hex }: IThemeContext & { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{
      theme,
      hex,
    }}>
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
