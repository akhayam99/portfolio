import Footer from "@/modules/footer/footer";
import Introduction from "@/modules/introduction/introduction";
import Summary from "@/modules/summary/summary";

export default function Home() {
  return (
    <main style={{ width: '100%' }}>
      <div style={{ overflow: 'auto', height: '100vh', scrollbarWidth: 'none', scrollSnapType: 'y mandatory' }}>
        <Introduction />
        <Summary />
        <Footer />
      </div>
    </main>
  )
}
