import { COMPLEMENTARY } from "./complementary"
import { PRIMARY } from "./primary"
import { SECONDARY } from "./secondary"

export type AllowedTheme = 'primary' | 'complementary' | 'secondary' | 'tertiary'
export type AllowedThemeHex = 50 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900 | 950

export const THEMES: { [key: string]: { [key: number]: string } }[] = [
  {
    primary: PRIMARY,
    complementary: COMPLEMENTARY,
    secondary: SECONDARY,
  },
]


export const THEMES_DARK: { [key: string]: { [key: number]: string } }[] = [
  {
    primary: COMPLEMENTARY,
    complementary: PRIMARY,
    secondary: SECONDARY,
  },
]
