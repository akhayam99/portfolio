import { extractColor } from "@/utils"
import classes from "./introduction.module.scss"

const Introduction = () => {
  return (
    <div className={classes.introduction}>
      <div style={{ color: extractColor('complementary', 50) }}>
        HI<span style={{ color: extractColor('secondary', 500) }}>!</span> MY NAME <span style={{ color: extractColor('complementary', 300) }}>IS</span>
        <br />
        <span style={{ color: extractColor('primary', 500) }}>A</span>MIN <span style={{ color: extractColor('primary', 500) }}>K</span>HAYAM
      </div>
    </div >
  )
}

export default Introduction
