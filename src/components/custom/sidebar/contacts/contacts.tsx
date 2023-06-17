import IconMail from '@/components/common/IconMail/icon-mail'
import IconLink from '../../../common/IconLink/icon-link'
import { CONTACTS } from './contacts.config'
import classes from './contacts.module.scss'

const Contacts = () => {
  return (
    <div className={classes.list}>
      {CONTACTS.map((contact, key) =>
        <IconLink
          icon={contact.icon}
          key={key}
          url={contact.url}
        ></IconLink>
      )}
      <IconMail mail="aa.khayam99@gmail.com"></IconMail>
    </div>
  )
}

export default Contacts
