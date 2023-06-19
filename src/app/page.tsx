import Footer from "@/modules/footer/footer";
import Introduction from "@/modules/introduction/introduction";

export default function Home() {
  return (
    <main style={{ width: '100%' }}>
      <div style={{ overflow: 'auto', height: '100vh', scrollbarWidth: 'none', scrollSnapType: 'y mandatory' }}>
        <Introduction />
        <Footer />
      </div>
    </main>
  )
}
