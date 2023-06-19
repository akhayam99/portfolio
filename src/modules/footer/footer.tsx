import IconLink from "@/components/IconLink/icon-link"
import IconMail from "@/components/IconMail/icon-mail"
import { extractColor } from "@/utils"
import { CONTACTS } from "../contacts/contacts.config"
import classes from "./footer.module.scss"

const Footer = () => {
  return (
    <div
      className={classes.introduction}
      style={{
        backgroundColor: extractColor('primary', 50),
        scrollSnapAlign: 'start',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: '15px',
      }}
    >
      {
        CONTACTS.map((contact, key) => contact.isMail
          ? <IconMail
            key={key}
            mail={contact.reference}
            theme={'primary'}
          />
          : <IconLink
            icon={contact.icon}
            key={key}
            url={contact.reference}
            theme={'primary'}
          />
        )
      }
    </div >
  )
}

export default Footer
