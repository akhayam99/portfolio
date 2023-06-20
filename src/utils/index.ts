import { AllowedTheme, AllowedThemeHex, THEMES, THEMES_DARK } from "@/assets/colors";

export function extractColor(key: AllowedTheme, hex: AllowedThemeHex = 500, activeTheme: 'dark' | 'light' = 'light') {

  for (let theme of activeTheme === 'light' ? THEMES : THEMES_DARK) {
    if (theme.hasOwnProperty(key))
      return theme[key][hex]
  }

  return "#000"
}
