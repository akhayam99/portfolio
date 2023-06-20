import { AllowedTheme } from "@/assets/colors"
import { extractColor } from "@/utils"
import { useTheme } from "@/utils/theme-context"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import Icon from "../icon/icon"

interface IconLinkProps {
  icon: IconDefinition
  url: string
  pippo: AllowedTheme
}

const IconLink = ({ icon, url, pippo }: IconLinkProps) => {

  const { theme } = useTheme()

  return (
    <a href={url} target="_blank" style={{ backgroundColor: extractColor(pippo, 500, theme) }}>
      <Icon name={icon} size={24} />
    </a>
  )
}

export default IconLink
