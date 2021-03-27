/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, ThemeStyle } from 'components/theme'


export namespace CssProgressBarTypes {
  export type Size = 'small' | 'medium' | 'large'
  export type Style = 'linear'
  export type ColorStyle = 'batteryStyle' | 'individual'
  export type Color = 'blank' | 'info' | 'success' | 'warn' | 'danger'
}

export type EssentialProgresBarProps = {
  max: number,
  min: number,
  value: number,
  themeStyle: ThemeStyle,
}

export type CssProgressBarProps = EssentialProgresBarProps & {
  size: CssProgressBarTypes.Size
  colorStyle: CssProgressBarTypes.ColorStyle,
  color: CssProgressBarTypes.Color,
}

export const cssColorBatteryStyle = (props: EssentialProgresBarProps) => {

  const multiplier = (props.max - props.min) / 100
  const threshold60 = multiplier * 60; // BELOW: _yellow, ABOVE: _green
  const threshold20 = multiplier * 20; // BELOW: _red

  let bkgColor = css``

  if (props.value >= threshold60)
    bkgColor = css`${DefaultThemeColors(props.themeStyle).STATUSCOLOR_SUCCESS}`

  else if (props.value >= threshold20)
    bkgColor = css`${DefaultThemeColors(props.themeStyle).STATUSCOLOR_WARN}`

  else
    bkgColor = css`${DefaultThemeColors(props.themeStyle).STATUSCOLOR_DANGER}`

  return css`
    background-color: ${bkgColor};
  `
}