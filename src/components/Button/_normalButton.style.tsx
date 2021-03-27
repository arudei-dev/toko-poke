/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { 
  DefaultThemeColors, 
  DefaultThemeProperties, 
  ThemeStyle 
} from 'components/theme'
import {
  ButtonBaseProps, 
  ButtonStyle,
  cssButtonBase,
  cssButtonBaseNormal,
  cssButtonBaseHover,
  cssButtonBaseActive,
  cssButtonBaseDisabled,
} from './_base.style'

export type NormalButtonBaseProps = ButtonBaseProps & {}


const cssNormalButtonNormal = (props: NormalButtonBaseProps) => css`
  ${cssButtonBaseNormal(props)}

  border-radius: 4px;
`

const cssNormalButtonHover = (props: NormalButtonBaseProps) => css`
  ${cssButtonBaseHover(props)}
`

const cssNormalButtonActive = (props: NormalButtonBaseProps) => css`
  ${cssButtonBaseActive(props)}
`

const cssNormalButtonDisabled = (props: NormalButtonBaseProps) => css`
  ${cssButtonBaseDisabled(props)}
`


export const cssNormalButtonBase = (props: NormalButtonBaseProps) => css`

  ${cssButtonBase(props)}
  
  ${cssNormalButtonNormal(props)}

  &:disabled {
    ${cssNormalButtonDisabled(props)}
  }

  ${
    (props.isLoading || props.isDisabled) 
    && css`
      color: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR}
    `
  }

  ${(!props.isLoading && !props.isDisabled) && css`
      cursor: pointer;
      
      &:focus, &:hover, &:active {
        border: none;
      }

      &:hover {
        ${cssNormalButtonHover(props)}
      }
      
      &:active {
        ${cssNormalButtonActive(props)}
      }
    `
  }
`


export type {
  ThemeStyle
}