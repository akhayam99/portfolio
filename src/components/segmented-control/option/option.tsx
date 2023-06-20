import { DefaultProps, dTheme, dThemeHex } from "../../default/props";
import classes from "./segmented-control.module.scss";

interface OptionProps extends DefaultProps {
  label: string,
  onClick: () => {},
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
  >
    {label}
  </div>
)

export default Option
