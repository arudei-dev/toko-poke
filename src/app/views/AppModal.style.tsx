/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, mqSizes, ThemeStyle } from 'components/theme'


export type CssAppModalViewProps = {
  themeStyle: ThemeStyle
}

export const cssAppModalView = (props: CssAppModalViewProps) => css`

  width: 100%;
  height: 100%;

  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;

  background-color: ${DefaultThemeColors(props.themeStyle).BACKGROUND_OVERLAY_COLOR};

  display: flex;
  align-items: center;
  justify-content: center;

  .hide {
    display: none;
  }

  .modal-inner {

    @media (max-width: ${mqSizes.mobileM}) {
      min-width: 300px;
      min-height: 150px;
    }
    @media (max-width: ${mqSizes.mobileS}) {
      min-width: 250px;
    }
  }
`