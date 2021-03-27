/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { 
  ThemeStyle, 
  DefaultThemeColors,
  DefaultThemeProperties
} from 'components/theme'


export type ButtonStyle = 'normal' | 'primary' | 'borderless'

export type ButtonBaseProps = {
  isLoading: boolean,
  isDisabled: boolean,
  themeStyle: ThemeStyle,
  buttonStyle: ButtonStyle,
  stretchWidth: boolean,
  stretchHeight: Boolean, 
}

export const cssButtonBaseNormal = (props: ButtonBaseProps) => css`
  ${props.buttonStyle !== 'borderless' 
    && DefaultThemeProperties.actnBoxShadow1.normal(props.themeStyle)}

  transition: box-shadow 150ms;
`

export const cssButtonBaseHover = (props: ButtonBaseProps) => css`
  ${DefaultThemeProperties.actnBoxShadow1.hover(props.themeStyle)}
`

export const cssButtonBaseActive = (props: ButtonBaseProps) => css`
  background: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR};

  ${DefaultThemeProperties.actnBoxShadow1.active(props.themeStyle)}
`

export const cssButtonBaseDisabled = (props: ButtonBaseProps) => css`
  color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_DISABLED};

  ${
    props.buttonStyle !== 'borderless' 
    && DefaultThemeProperties.actnBoxShadow1.disabled(props.themeStyle)
  }
`

export const cssButtonBase = (props: ButtonBaseProps) => css`

  ${props.stretchWidth && css`width: 100%;`}
  ${props.stretchHeight && css`height: 100%;`}

  color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};
  background: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR};
  
  border: none;
  text-decoration:none;
  outline: none;
  padding: 10px;

  font-family: 'Ubuntu';
  font-weight: 600;
  font-size: 14pt;
`