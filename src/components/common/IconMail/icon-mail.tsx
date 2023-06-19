import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Icon from "../icon/icon"

interface IconMailProps {
  icon?: IconDefinition
  mail: string
}

const IconMail = ({ icon = faEnvelope, mail }: IconMailProps) => {
  return (
    <a href={`mailto:${mail}`}>
      <Icon name={icon} />
    </a>
  )
}

export default IconMail
