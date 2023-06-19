import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { DefaultProps, dTheme, dThemeHex } from "../default/props"
import Icon from "../icon/icon"

interface IconMailProps extends DefaultProps {
  icon?: IconDefinition
  mail: string
}

const IconMail = ({
  icon = faEnvelope,
  mail,
  theme = dTheme,
  themeHex = dThemeHex,
}: IconMailProps) => (
  <a href={`mailto:${mail}`}>
    <Icon
      name={icon}
      theme={theme}
      themeHex={themeHex}
    />
  </a>
)

export default IconMail
