'use client'

import Introduction2 from "@/components/custom/introduction-2/introduction";
import Introduction from "@/components/custom/introduction/introduction";
import { UIEvent, useRef, useState } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  let timeout: NodeJS.Timeout
  let disableScroll: boolean = false

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    if (disableScroll)
      return

    if (!!timeout)
      clearTimeout(timeout)

    let currentTarget = event.currentTarget
    timeout = setTimeout(() => {
      currentTarget?.scrollTop > scrollTop
        ? setScrollTop(941 * +(currentTarget?.scrollTop / 941).toFixed())
        : setScrollTop(941 * +(currentTarget?.scrollTop / 941).toFixed())
      ref.current?.scrollTo({ top: scrollTop, behavior: 'smooth' })
      disableScroll = true
    }, 100);
  }

  return (
    <main style={{ width: '100%' }}>
      <span style={{ color: 'red', marginLeft: '50%' }}> {scrollTop} </span>
      <div
        onScroll={handleScroll}
        style={{ overflow: 'auto', height: '100vh', scrollbarWidth: 'none' }}
        ref={ref}
      >
        <Introduction />
        <Introduction2 />
        <Introduction />
        <Introduction2 />
      </div>
    </main>
  )
}
