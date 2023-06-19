import { extractColor } from "@/utils"
import classes from "./introduction.module.scss"

const Introduction2 = () => {
  return (
    <div className={classes.introduction} style={{ backgroundColor: extractColor('complementary', 150), scrollSnapAlign: 'start' }}>
      <div style={{ color: extractColor('complementary', 50) }}>
        HI<span style={{ color: extractColor('secondary', 200) }}>!</span> MY NAME <span style={{ color: extractColor('complementary', 300) }}>IS</span>
        <br />
        <span style={{ color: extractColor('primary', 500) }}>A</span>MIN <span style={{ color: extractColor('primary', 500) }}>K</span>HAYAM
      </div>
      <div style={{ display: 'flex', gap: '40px', marginTop: '40px', }}>
        <span style={{ color: extractColor('primary', 350) }}> WIP </span>
      </div>
    </div >
  )
}

export default Introduction2
