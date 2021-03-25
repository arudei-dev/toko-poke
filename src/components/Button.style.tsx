/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, ThemeStyle } from './theme'

const cssButtonNormal = (type: ThemeStyle) => css`
  border-radius: 4px;
  box-shadow:  3px  3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
              -3px -3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
              
  transition: box-shadow 150ms;
`

const cssButtonHover = (type: ThemeStyle) => css`
  &:hover {
    background: linear-gradient(
        145deg, 
        ${DefaultThemeColors(type).HIGHLIGHT_COLOR_TO}, 
        ${DefaultThemeColors(type).HIGHLIGHT_COLOR_FROM}
      );
    box-shadow:  7px 7px 14px  ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                -7px -7px 14px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  }
`

const cssButtonActive = (type: ThemeStyle) => css`
  &:active {
    background: ${DefaultThemeColors(type).BACKGROUND_COLOR};
    box-shadow: inset  5px  5px 10px ${DefaultThemeColors(type).NEU_SHADOW_PDARK},
                inset -5px -5px 10px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT};
  }
`

const cssButtonDisabled = (type: ThemeStyle) => css`
  box-shadow:  3px  3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PDARK + "66"},
              -3px -3px 8px ${DefaultThemeColors(type).NEU_SHADOW_PLIGHT + "66"};
`

export type CssButtonBaseProps = {
  isLoading: boolean,
  isDisabled: boolean,
  themeStyle: ThemeStyle
}

export const cssButtonBase = (props: CssButtonBaseProps) => css`
  width: 100%;
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