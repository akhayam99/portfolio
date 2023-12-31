'use client'

import { AllowedTheme, AllowedThemeHex } from '@/assets/colors'
import IconMail from '@/components/IconMail/icon-mail'
import { extractColor } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import IconLink from '../../components/IconLink/icon-link'
import classes from './contacts.module.scss'
import { CONTACTS } from '@/data/contacts.config'

const theme: AllowedTheme = 'primary'
const themeHex: AllowedThemeHex = 500

const Contacts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => { !!ref.current && setHeight(ref.current.offsetHeight) }, [ref])

  return (
    <div
      className={classes.list}
      style={{
        backgroundColor: extractColor('secondary', 200),
        position: 'absolute',
        top: `calc(50% - 50px - ${height / 2}px)`,
        left: '12px',
      }}
      ref={ref}
    >
      {CONTACTS.map((contact, key) => contact.isMail
        ? <IconMail
          key={key}
          mail={contact.reference}
          theme={theme}
          themeHex={themeHex}
        />
        : <IconLink
          icon={contact.icon}
          key={key}
          theme={theme}
          themeHex={themeHex}
          url={contact.reference}
        />
      )}
    </div>
  )
}

export default Contacts
