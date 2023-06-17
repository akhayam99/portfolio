import { extractColor } from "@/utils"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DefaultProps, dTheme, dThemeHex } from "../default/props"
import classes from './icon.module.scss'

interface IconProps extends DefaultProps {
  name: IconDefinition,
  size?: number,
}

const Icon = ({ name, size = 20, theme = dTheme, themeHex = dThemeHex }: IconProps) => {
  return (
    <FontAwesomeIcon
      className={classes.icon}
      icon={name}
      style={{
        color: extractColor(theme, themeHex),
        height: `${size}px`,
        width: `${size}px`,
      }}
    ></FontAwesomeIcon>
  )
}

export default Icon
