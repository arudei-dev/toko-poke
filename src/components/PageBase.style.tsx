/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultTheme, ThemeStyle } from './theme'

export type CssPageBaseProps = {
  noYScrolling: boolean,
  ThemeStyle: ThemeStyle
}

export const cssPageBase = (props: CssPageBaseProps) => css`
  background-color: ${DefaultTheme(props.ThemeStyle).BACKGROUND_COLOR};
  width: 100%;
  height: 100%;
  overflow-y: ${props.noYScrolling ? css`none` : css`auto`};
`;

export type {
  ThemeStyle
}