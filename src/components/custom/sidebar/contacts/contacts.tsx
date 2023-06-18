import { AllowedTheme, AllowedThemeHex } from '@/assets/colors'
import IconMail from '@/components/common/IconMail/icon-mail'
import IconLink from '../../../common/IconLink/icon-link'
import { CONTACTS } from './contacts.config'
import classes from './contacts.module.scss'

const theme: AllowedTheme = 'primary'
const themeHex: AllowedThemeHex = 500

const Contacts = () => {
  return (
    <div className={classes.list}>
      {CONTACTS.map((contact, key) => contact.isMail
        ? <IconMail
          key={key}
          mail={contact.reference}
          theme={theme}
          themeHex={themeHex}
        ></IconMail>
        : <IconLink
          icon={contact.icon}
          key={key}
          theme={theme}
          themeHex={themeHex}
          url={contact.reference}
        ></IconLink>
      )}
    </div>
  )
}

export default Contacts
