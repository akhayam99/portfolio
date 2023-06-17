import Introduction from "@/components/custom/introduction/introduction";
import { extractColor } from "@/utils";

export default function Home() {
  return (
    <main style={{ backgroundColor: extractColor('primary', 150), width: '100%' }}>
      <div style={{ overflow: 'auto', height: '100vh', scrollbarWidth: 'none' }}>
        <Introduction />
        <Introduction />
        <Introduction />
        <Introduction />
        <Introduction />
        <Introduction />
      </div>
    </main>
  )
}
