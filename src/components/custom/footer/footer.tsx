import { extractColor } from "@/utils"
import classes from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={classes.introduction} style={{ backgroundColor: extractColor('primary', 500), scrollSnapAlign: 'start' }}>
      WIP
    </div >
  )
}

export default Footer
