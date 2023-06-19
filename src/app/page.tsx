'use client'

import Footer from "@/components/custom/footer/footer";
import Introduction2 from "@/components/custom/introduction-2/introduction";
import Introduction from "@/components/custom/introduction/introduction";

export default function Home() {
  return (
    <main style={{ width: '100%' }}>
      <div style={{ overflow: 'auto', height: '100vh', scrollbarWidth: 'none', scrollSnapType: 'y mandatory' }}>
        <Introduction />
        <Introduction2 />
        <Introduction />
        <Introduction2 />
        <Footer />
      </div>
    </main>
  )
}
