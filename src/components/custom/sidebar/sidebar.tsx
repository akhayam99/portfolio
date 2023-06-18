'use client'

import { extractColor } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import Contacts from './contacts/contacts';
import Profile from './profile/profile';
import classes from './sidebar.module.scss';

const Sidebar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [profileHeight, setProfileHeight] = useState(0);

  useEffect(() => { !!ref.current && setHeight(ref.current.offsetHeight) }, [ref])
  useEffect(() => { !!profileRef.current && setProfileHeight(profileRef.current.offsetHeight) }, [profileRef])

  return (
    <div className={classes.main} style={{ backgroundColor: extractColor('secondary', 200) }}>
      <div className={classes.container}>
        <div
          className={classes.line}
          style={{
            backgroundColor: extractColor('primary'),
            height: `calc(100% - ${profileHeight}px`,
            marginBottom: `24px`,
          }}
        ></div>
        <div ref={profileRef}>
          <Profile />
        </div>
      </div>
      <div className={classes.container}>
        <div ref={ref}>
          <Contacts />
        </div>
        <div
          className={classes.line}
          style={{
            backgroundColor: extractColor('primary'),
            height: `calc(100% - ${height}px`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
