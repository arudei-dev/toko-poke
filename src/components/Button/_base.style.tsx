/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ThemeStyle } from 'components/theme'


export type ButtonStyle = 'normal' | 'primary' | 'borderless'

export type ButtonBaseProps = {
  isLoading: boolean,
  isDisabled: boolean,
  themeStyle: ThemeStyle,
  buttonStyle: ButtonStyle,
  stretchWidth: boolean,
  stretchHeight: Boolean, 
}

