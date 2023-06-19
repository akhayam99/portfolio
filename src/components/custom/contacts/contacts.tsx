'use client'

import IconMail from '@/components/common/IconMail/icon-mail'
import { extractColor } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import IconLink from '../../common/IconLink/icon-link'
import { CONTACTS } from './contacts.config'
import classes from './contacts.module.scss'

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
        />
        : <IconLink
          icon={contact.icon}
          key={key}
          url={contact.reference}
        />
      )}
    </div>
  )
}

export default Contacts
