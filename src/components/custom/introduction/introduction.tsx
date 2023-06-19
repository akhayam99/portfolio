import Icon from "@/components/common/icon/icon"
import { extractColor } from "@/utils"
import { faBrush } from "@fortawesome/free-solid-svg-icons"
import classes from "./introduction.module.scss"

const Introduction = () => {
  return (
    <div className={classes.introduction} style={{ backgroundColor: extractColor('primary', 150), scrollSnapAlign: 'start' }}>
      <div style={{ color: extractColor('complementary', 50) }}>
        HI<span style={{ color: extractColor('secondary', 200) }}>!</span> MY NAME <span style={{ color: extractColor('complementary', 300) }}>IS</span>
        <br />
        <span style={{ color: extractColor('primary', 500) }}>A</span>MIN <span style={{ color: extractColor('primary', 500) }}>K</span>HAYAM
      </div>
      <div style={{ fontSize: '20px', display: 'flex', gap: '40px', marginTop: '40px', }}>
        <Icon name={faBrush} />
        <span style={{ color: extractColor('primary', 350) }}> WORK IN PROGRESS </span>
        <Icon name={faBrush} />
      </div>
    </div >
  )
}

export default Introduction
