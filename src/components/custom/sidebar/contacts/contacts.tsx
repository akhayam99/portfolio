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
    </div>
  )
}

export default Contacts
