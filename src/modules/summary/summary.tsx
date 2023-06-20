'use client'

import SegmentedControl from "@/components/segmented-control/segmented-control";
import { extractColor } from "@/utils";
import React from "react";
import { OPTIONS } from "../../data/summary.config";
import classes from "./summary.module.scss";

const Summary = () => {
  const [value, setValue] = React.useState('developer')

  function onChange(label: string): void {
    setValue(OPTIONS.find(opt => opt.label === label)?.value || '')
  }

  return (
    <div
      className={classes.summary}
      style={{
        backgroundColor: extractColor(value === 'developer' ? 'secondary' : value === 'referee' ? 'complementary' : 'primary', 150),
        transition: 'all .3s'
      }}
    >
      <SegmentedControl
        onChange={onChange}
        options={OPTIONS}
        theme={value === 'developer' ? 'secondary' : value === 'referee' ? 'complementary' : 'primary'}
        themeHex={500}
        value={value}
      ></SegmentedControl>
    </div >
  )
}

export default Summary
