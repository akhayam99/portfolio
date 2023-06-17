import { IconDefinition, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface IContacts { icon: IconDefinition, url: string }

export const CONTACTS: IContacts[] = [
  {
    icon: faInstagram,
    url: 'https://www.instagram.com/_amin_k99_/',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/aminkhayam/',
  },
  {
    icon: faGithub,
    url: 'https://github.com/akhayam99',
  }
]
