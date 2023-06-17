import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import Icon from "../icon/icon"

interface IconLinkProps {
  icon: IconDefinition
  url: string
}

const IconLink = ({ icon, url }: IconLinkProps) => {
  return (
    <a href={url} target="_blank">
      <Icon name={icon} />
    </a>
  )
}

export default IconLink
