import Icon from "@/components/icon/icon"
import { extractColor } from "@/utils"
import { faComputer, faFlag } from "@fortawesome/free-solid-svg-icons"
import classes from "./introduction.module.scss"

const Introduction = () => {
  return (
    <div className={classes.introduction} style={{ backgroundColor: extractColor('primary', 150), scrollSnapAlign: 'start' }}>
      <div style={{ color: extractColor('complementary', 50) }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, textAlign: 'center' }}>
          HI<span style={{ color: extractColor('secondary', 200) }}>!</span> MY
          <br />
          NAME <span style={{ color: extractColor('complementary', 300) }}>IS</span>
          <br />
          <span style={{ color: extractColor('primary', 500) }}>A</span>MIN <span style={{ color: extractColor('primary', 500) }}>K</span>HAYAM
        </h1>
      </div>
      <div style={{ display: 'flex', gap: '40px', marginTop: '40px', }}>
        <h2>
          <Icon name={faComputer} />
          <span style={{ color: extractColor('primary', 350) }}> DEVELOPER, VIDEOGAMER, REFEREE </span>
          <Icon name={faFlag} />
        </h2>
      </div>
    </div >
  )
}

export default Introduction
