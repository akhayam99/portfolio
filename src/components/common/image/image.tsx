import { extractColor } from "@/utils"
import { default as NextImage } from "next/image"
import { DefaultProps, dTheme, dThemeHex } from "../default/props"
import classes from "./image.module.scss"

interface ImageProps extends DefaultProps { src: string, alt: string, width?: number, height?: number }

const Image = ({ src, alt, width = 40, height = 40, theme = dTheme, themeHex = dThemeHex }: ImageProps) => {
  return (
    <NextImage
      alt={alt}
      className={classes.image}
      height={height}
      src={src}
      width={width}
      style={{ borderColor: extractColor(theme, themeHex) }}
    ></NextImage>
  )
}

export default Image
