import { extractColor } from "@/utils";

export default function Home() {
  return (
    <main style={{ backgroundColor: extractColor('primary', 150), width: '100%' }}></main>
  )
}
