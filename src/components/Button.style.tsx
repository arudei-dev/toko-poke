/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, DefaultThemeProperties, ThemeStyle } from './theme'

const cssButtonNormal = (type: ThemeStyle) => css`
  border-radius: 4px;
              
  ${DefaultThemeProperties.actnBoxShadow1.normal(type)}

  transition: box-shadow 150ms;
`

const cssButtonHover = (type: ThemeStyle) => css`
  &:hover {
    background: linear-gradient(
        145deg, 
        ${DefaultThemeColors(type).HIGHLIGHT_COLOR_TO}, 
        ${DefaultThemeColors(type).HIGHLIGHT_COLOR_FROM}
      );

    ${DefaultThemeProperties.actnBoxShadow1.hover(type)}

  }
`

const cssButtonActive = (type: ThemeStyle) => css`
  &:active {
    background: ${DefaultThemeColors(type).BACKGROUND_COLOR};

    ${DefaultThemeProperties.actnBoxShadow1.active(type)}

  }
`

const cssButtonDisabled = (type: ThemeStyle) => css`
  &:disabled {
    color: ${DefaultThemeColors(type).TEXT_COLOR_DISABLED};

    ${DefaultThemeProperties.actnBoxShadow1.disabled(type)}
  }
`


export type ButtonStyle = 'normal' | 'primary'

export type CssButtonBaseProps = {
  isLoading: boolean,
  isDisabled: boolean,
  themeStyle: ThemeStyle,
  buttonStyle: ButtonStyle,
  stretchWidth: boolean,
}

export const cssButtonBase = (props: CssButtonBaseProps) => css`
  /* width: 100%; */
  ${props.stretchWidth && css`width: 100%;`}
  border: none;
  text-decoration:none;
  outline: none;
  padding: 10px;

  color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};

  background: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR};

  ${props.isDisabled 
    ? cssButtonDisabled(props.themeStyle) 
    : cssButtonNormal(props.themeStyle)}

  font-family: 'Ubuntu';
  font-weight: 600;
  font-size: 14pt;


  ${(props.isLoading 
      || props.isDisabled) 
    && css`color: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR}`}

  ${(!props.isLoading && !props.isDisabled) && css`
      cursor: pointer;
      
      &:focus, &:hover, &:active {
        border: none;
      }

      ${cssButtonHover(props.themeStyle)}
      
      ${cssButtonActive(props.themeStyle)}
    `
  }
`


export type {
  ThemeStyle
}