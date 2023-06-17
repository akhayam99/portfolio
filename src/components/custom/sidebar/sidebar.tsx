import Contacts from './contacts/contacts'
import Profile from './profile/profile'
import classes from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={classes.main}>
      <Profile />
      <Contacts />
    </div>
  )
}

export default Sidebar
