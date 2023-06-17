import { THEMES } from "@/assets/colors/colors";

export function extractColor(key: string) {
  for (let theme of THEMES)
    if (theme.hasOwnProperty(key))
      return theme[key][500];
  return "#000"
}
