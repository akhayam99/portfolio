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
    reference: 'https://www.instagram.com/_amin_k99_/',
    isMail: false
  },
  {
    icon: faLinkedin,
    reference: 'https://www.linkedin.com/in/aminkhayam/',
    isMail: false
  },
  {
    icon: faGithub,
    reference: 'https://github.com/akhayam99',
    isMail: false
  },
  {
    icon: faEnvelope,
    reference: 'aa.khayam99@gmail.com',
    isMail: true
  }
]
