import { DefaultProps, dTheme, dThemeHex } from "../../default/props";
import classes from "./option.module.scss";

interface OptionProps extends DefaultProps {
  label: string,
  onClick: () => void,
  selected: boolean,
}

const Option = ({
  label,
  onClick,
  selected = false,
  theme = dTheme,
  themeHex = dThemeHex,
}: OptionProps) => (
  <div className={`
      ${classes.option}
      ${selected ? classes.selected : ''}
    `}
    onClick={onClick}
  >
    {label}
  </div>
)

export default Option
