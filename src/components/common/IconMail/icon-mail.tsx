import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { DefaultProps, defaultTheme } from "../default/props"
import Icon from "../icon/icon"

interface IconMailProps extends DefaultProps {
  icon?: IconDefinition
  mail: string
}

const IconMail = ({ icon = faEnvelope, mail, theme = defaultTheme }: IconMailProps) => {
  return (
    <a href={`mailto:${mail}`}>
      <Icon name={icon} theme={theme} />
    </a >
  )
}

export default IconMail
