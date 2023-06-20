'use client'

import { AllowedTheme } from "@/assets/colors"

interface ISummaryOptions {
  color: AllowedTheme
  label: string
  value: string
}

export const OPTIONS: ISummaryOptions[] = [
  {
    color: 'primary',
    label: 'Developer',
    value: 'developer',
  },
  {
    color: 'complementary',
    label: 'Referee',
    value: 'referee',
  },
  {
    color: 'secondary',
    label: 'Videogamer',
    value: 'videogame',
  },
]
