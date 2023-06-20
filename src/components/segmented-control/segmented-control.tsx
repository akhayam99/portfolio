'use client'
import { extractColor } from "@/utils";
import { useEffect, useState } from "react";
import { DefaultProps, dTheme, dThemeHex } from "../default/props";
import Option from "./option/option";
import classes from './segmented-control.module.scss';

interface SegmentedControlProps extends DefaultProps {
  onChange: (label: string) => void,
  options: { label: string, value: string }[],
  value: string,
}

const SegmentedControl = ({
  options,
  value,
  onChange,
  theme = dTheme,
  themeHex = dThemeHex,
}: SegmentedControlProps) => {
  let inputRefs: HTMLDivElement[] = [];
  const [position, setPosition] = useState<DOMRectReadOnly>();

  useEffect(() => {
    const currentRef = inputRefs[options.findIndex(option => option.value === value)]?.getBoundingClientRect()
    console.log(currentRef)
    !!currentRef && setPosition(currentRef)
  }, [value, options])

  const setRef = (ref: HTMLDivElement) => {
    inputRefs.push(ref)
    inputRefs[options.findIndex(option => option.value === value)]?.getBoundingClientRect()
  };

  return (
    <>
      {inputRefs}
      <div
        className={classes.segmentedControl}
        style={{ backgroundColor: extractColor(theme, themeHex) }}
      >
        {options.map((option, key) => (
          <div
            key={key}
            ref={setRef}
            style={{ zIndex: 1 }}
          >
            <Option
              label={option.label}
              onClick={() => onChange(option.label)}
              selected={value === option.value}
            />
          </div>
        ))}
        <div
          className={classes.animate}
          style={{
            width: `${position?.width}px`,
            height: `${position?.height}px`,
            top: `${position?.top}px`,
            left: `${position?.left}px`,
          }}
        ></div>
      </div>
    </>
  )
}

export default SegmentedControl
