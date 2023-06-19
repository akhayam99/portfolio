import { extractColor } from "@/utils"
import { useTheme } from "@/utils/theme-context"
import { default as NextImage } from "next/image"
import classes from "./image.module.scss"

interface ImageProps { src: string, alt: string, width?: number, height?: number }

const Image = ({ src, alt, width = 40, height = 40 }: ImageProps) => {

  const { theme, hex } = useTheme()

  return (
    <NextImage
      alt={alt}
      className={classes.image}
      height={height}
      src={src}
      width={width}
      style={{ borderColor: extractColor(theme, hex) }}
    />
  )
}

export default Image
