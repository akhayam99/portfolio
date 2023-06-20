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
      style={{ backgroundColor: extractColor('secondary', 500) }}
    >
      <div className={classes.segmentedControl}>
        {OPTIONS.map((option, key) => (
          <SegmentedControl
            key={key}
            label={option.label}
            onChange={onChange}
            selected={option.value === value}
          ></SegmentedControl>
        ))}
      </div>
    </div >
  )
}

export default Summary
