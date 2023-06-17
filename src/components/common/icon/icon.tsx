import { extractColor } from "@/utils"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DefaultProps, defaultTheme } from "../default/props"
import classes from './icon.module.scss'

interface IconProps extends DefaultProps {
  name: IconDefinition,
  size?: number,
}

const Icon = ({ name, size = 20, theme = defaultTheme }: IconProps) => {
  return (
    <FontAwesomeIcon
      className={classes.icon}
      icon={name}
      style={{
        color: extractColor(theme),
        height: `${size}px`,
        width: `${size}px`,
      }}
    ></FontAwesomeIcon>
  )
}

export default Icon
