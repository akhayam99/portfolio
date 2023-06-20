import { extractColor } from "@/utils"
import classes from "./introduction.module.scss"

const Introduction = () => {
  return (
    <div className={classes.introduction} style={{ backgroundColor: extractColor('primary', 500), scrollSnapAlign: 'start' }}>
      <div style={{ color: extractColor('complementary', 50) }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, textAlign: 'center' }}>
          HI<span style={{ color: extractColor('secondary', 500) }}>!</span> MY
          <br />
          NAME <span style={{ color: extractColor('complementary', 500) }}>IS</span>
          <br />
          <span style={{ color: extractColor('secondary', 500) }}>A</span>MIN  <span style={{ color: extractColor('secondary', 500) }}>K</span>HAYAM
        </h1>
      </div>
    </div >
  )
}

export default Introduction
