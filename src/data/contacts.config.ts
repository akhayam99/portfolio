import { IconDefinition, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface IContacts {
  icon: IconDefinition,
  reference: string,
  isMail: boolean,
}

export const CONTACTS: IContacts[] = [
  {
    icon: faInstagram,
    reference: process.env.INSTAGRAM as string,
    isMail: false
  },
  {
    icon: faLinkedin,
    reference: process.env.LINKEDIN as string,
    isMail: false
  },
  {
    icon: faGithub,
    reference: process.env.GITHUB as string,
    isMail: false
  },
  {
    icon: faEnvelope,
    reference: process.env.MAIL as string,
    isMail: true
  }
]
