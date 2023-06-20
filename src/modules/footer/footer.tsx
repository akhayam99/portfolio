import { extractColor } from "@/utils"
import Contacts from "./contacts/contacts"
import classes from "./footer.module.scss"

const Footer = () => {
  return (
    <div
      className={classes.footer}
      style={{ backgroundColor: extractColor('primary', 50) }}
    >
      <Contacts />
    </div>
  )
}

export default Footer
