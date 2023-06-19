import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { DefaultProps, dTheme, dThemeHex } from "../default/props"
import Icon from "../icon/icon"

interface IconLinkProps extends DefaultProps {
  icon: IconDefinition
  url: string
}

const IconLink = ({
  icon,
  theme = dTheme,
  themeHex = dThemeHex,
  url,
}: IconLinkProps) => (
  <a href={url} target="_blank">
    <Icon
      name={icon}
      size={24}
      theme={theme}
      themeHex={themeHex}
    />
  </a>
)


export default IconLink
