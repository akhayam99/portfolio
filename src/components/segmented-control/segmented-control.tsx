import { DefaultProps, dTheme, dThemeHex } from "../default/props";
import classes from "./segmented-control.module.scss";

interface SegmentedControlProps extends DefaultProps {
  label: string,
  onChange: (label: string) => void,
  selected: boolean,
}

const SegmentedControl = ({
  label,
  onChange,
  selected = false,
  theme = dTheme,
  themeHex = dThemeHex,
}: SegmentedControlProps) => (
  <div
    className={`${classes.option} ${selected ? classes.selected : ''}`}
    onClick={(event) => onChange(label)}
  >
    {label}
  </div>
)

export default SegmentedControl
