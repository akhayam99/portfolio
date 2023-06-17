import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from './icon.module.scss'

interface IconProps { name: IconDefinition }

const Icon = ({ name }: IconProps) => {
  return (
    <FontAwesomeIcon className={classes.icon} icon={name}></FontAwesomeIcon>
  )
}

export default Icon
