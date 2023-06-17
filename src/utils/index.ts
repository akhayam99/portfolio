import { AllowedTheme, AllowedThemeHex, THEMES } from "@/assets/colors/colors";

export function extractColor(key: AllowedTheme, hex: AllowedThemeHex = 500) {
  for (let theme of THEMES)
    if (theme.hasOwnProperty(key))
      return theme[key][hex]

  return "#000"
}
