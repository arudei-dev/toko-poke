/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, ThemeStyle } from 'components/theme'


export const cssPokemonCard = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const cssPokemonSpriteRoot = css`
  width: 108px;
  height: 108px;
  object-fit: fill;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  image-rendering: pixelated;

  @media (max-width: 420px) {
    width:  96px;
    height: 96px;
  }
`

export type CssPokemonNameRootType = {
  isLoading: boolean,
  themeStyle: ThemeStyle,
}

export const cssPokemonNameRoot = (props: CssPokemonNameRootType) => css`
  color: ${
    props.isLoading 
    ? DefaultThemeColors(props.themeStyle).TEXT_COLOR_DISABLED 
    : DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY 
  };
  font-family: 'Ubuntu';
  font-weight: 600;
  font-size: 14pt;
  padding-bottom: 8px;
`

export const cssActionDivRoot = css`
  padding: 8px;
  padding-top: 16px;
  width: 100%;
`

export type {
  ThemeStyle
}