import Contacts from "./contacts/contacts"
import classes from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Contacts />
    </div>
  )
}

export default Footer
