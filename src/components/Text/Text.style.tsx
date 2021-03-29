/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ThemeStyle, DefaultThemeColors } from '../theme'

export type TTextColor = 'primary' | 'secondary' | 'disabled'

export type cssTextProps = {
  textColor: TTextColor,
  themeStyle: ThemeStyle,
}

export const cssText = (props: cssTextProps) => css`
  color: ${
    props.textColor === 'primary'
    ? DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY
    : props.textColor === 'secondary'
      ? DefaultThemeColors(props.themeStyle).TEXT_COLOR_ALT
      : DefaultThemeColors(props.themeStyle).TEXT_COLOR_DISABLED
  };
`