/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { 
  DefaultThemeColors, 
  DefaultThemeProperties, 
  ThemeStyle 
} from 'components/theme'
import { ButtonBaseProps, ButtonStyle } from './_base.style'

const cssNormalButtonNormal = (type: ThemeStyle, style: ButtonStyle) => css`
  border-radius: 4px;
              
  ${style !== 'borderless' && DefaultThemeProperties.actnBoxShadow1.normal(type)}

  transition: box-shadow 150ms;
`

const cssNormalButtonHover = (type: ThemeStyle) => css`
  &:hover {
    background: linear-gradient(
        145deg, 
        ${DefaultThemeColors(type).HIGHLIGHT_COLOR_TO}, 
        ${DefaultThemeColors(type).HIGHLIGHT_COLOR_FROM}
      );

    ${DefaultThemeProperties.actnBoxShadow1.hover(type)}

  }
`

const cssNormalButtonActive = (type: ThemeStyle) => css`
  &:active {
    background: ${DefaultThemeColors(type).BACKGROUND_COLOR};

    ${DefaultThemeProperties.actnBoxShadow1.active(type)}

  }
`

const cssNormalButtonDisabled = (type: ThemeStyle, style: ButtonStyle) => css`
  &:disabled {
    color: ${DefaultThemeColors(type).TEXT_COLOR_DISABLED};

    ${style !== 'borderless' && DefaultThemeProperties.actnBoxShadow1.disabled(type)}
  }
`


export type NormalButtonBaseProps = ButtonBaseProps & {

}

export const cssNormalButtonBase = (props: NormalButtonBaseProps) => css`
  /* width: 100%; */
  ${props.stretchWidth && css`width: 100%;`}
  border: none;
  text-decoration:none;
  outline: none;
  padding: 10px;

  color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};

  background: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR};

  ${props.isDisabled 
    ? cssNormalButtonDisabled(props.themeStyle, props.buttonStyle) 
    : cssNormalButtonNormal(props.themeStyle,  props.buttonStyle)}

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

      ${cssNormalButtonHover(props.themeStyle)}
      
      ${cssNormalButtonActive(props.themeStyle)}
    `
  }
`


export type {
  ThemeStyle
}