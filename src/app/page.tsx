import Introduction2 from "@/components/custom/introduction-2/introduction";
import Introduction from "@/components/custom/introduction/introduction";

export default function Home() {
  const _array = ['', '', '']
  return (
    <main style={{ width: '100%' }}>
      <div style={{ overflow: 'auto', height: '100vh', scrollbarWidth: 'none' }}>
        {new Array(20).fill(null).map((_, key) => (
          <>
            <Introduction key={key} />
            <Introduction2 key={key} />
          </>
        ))}
      </div>
    </main>
  )
}
