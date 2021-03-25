/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultTheme, ThemeType } from './theme'

export type CssPageBaseProps = {
  noYScrolling: boolean,
  themeType: ThemeType
}

export const cssPageBase = (props: CssPageBaseProps) => css`
  background-color: ${DefaultTheme(props.themeType).BACKGROUND_COLOR};
  width: 100%;
  height: 100%;
  overflow-y: ${props.noYScrolling ? css`none` : css`auto`};
`;