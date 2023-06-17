import Image from "@/components/common/image/image";
import classes from './profile.module.scss';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <Image src="/macho.jpeg" alt='profile' width={80} height={80}></Image>
    </div>
  )
}

export default Profile
