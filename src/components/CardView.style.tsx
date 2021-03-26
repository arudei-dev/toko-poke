/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, DefaultThemeProperties, ThemeStyle } from './theme'

const cssCardViewHover = (type: ThemeStyle) => css`
  &:hover {
    ${DefaultThemeProperties.actnBoxShadow0.hover(type)}
  }
`

const cssCardViewActive = (type: ThemeStyle) => css`
  &:active:not(:focus-within) {                
    ${DefaultThemeProperties.actnBoxShadow0.active(type)}
  }
`

const cssCardViewDisabled = (type: ThemeStyle) => css`  
  ${DefaultThemeProperties.actnBoxShadow0.disabled(type)}

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
`

export type CssCardViewProps = {
  isClickable: boolean,
  isDisabled: boolean,
  ThemeStyle: ThemeStyle,
  stretchWidth?: boolean,
  stretchHeight?: boolean,
}

export const cssCardView = (props: CssCardViewProps) => css`
  ${props.stretchWidth ?  css`width: 100%;`  : css`min-width: 100px;` }
  ${props.stretchHeight ? css`height: 100%;` : css`min-height: 100px;` }
  
  ${DefaultThemeProperties.actnBoxShadow0.normal(props.ThemeStyle)}
  transition: box-shadow 150ms;

  padding: 10px;
  border-radius: 15px;
  background: ${DefaultThemeColors(props.ThemeStyle).BACKGROUND_COLOR};

             
  ${props.isDisabled && cssCardViewDisabled(props.ThemeStyle)}
  
  ${(!props.isDisabled && props.isClickable) && css`
    cursor: pointer;
    
    ${cssCardViewHover(props.ThemeStyle)};

    ${cssCardViewActive(props.ThemeStyle)};
  `}
`

export type {
  ThemeStyle
}