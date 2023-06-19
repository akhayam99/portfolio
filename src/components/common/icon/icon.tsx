import { extractColor } from "@/utils"
import { useTheme } from "@/utils/theme-context"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from './icon.module.scss'

interface IconProps {
  name: IconDefinition,
  size?: number,
}

const Icon = ({ name, size = 20 }: IconProps) => {

  const { theme, hex } = useTheme()

  return (
    <FontAwesomeIcon
      className={classes.icon}
      icon={name}
      style={{
        color: extractColor(theme, hex),
        height: `${size}px`,
        width: `${size}px`,
      }}
    />
  )
}

export default Icon
