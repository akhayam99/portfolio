import IconLink from "@/components/IconLink/icon-link"
import IconMail from "@/components/IconMail/icon-mail"
import { CONTACTS } from '@/data/contacts.config'
import { extractColor } from "@/utils"
import classes from "./contacts.module.scss"

const Contacts = () => {
  return (
    <div
      className={classes.contacts}
      style={{ backgroundColor: extractColor('primary', 500) }}
    >
      {
        CONTACTS.map((contact, key) => contact.isMail
          ? <IconMail
            key={key}
            mail={contact.reference}
            theme={'primary'}
            themeHex={50}
          />
          : <IconLink
            icon={contact.icon}
            key={key}
            url={contact.reference}
            theme={'primary'}
            themeHex={50}
          />
        )
      }
    </div >
  )
}

export default Contacts
