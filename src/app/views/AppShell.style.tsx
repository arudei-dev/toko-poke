/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, mqSizes, ThemeStyle, ThemeAwareLayout, DefaultThemeProperties } from 'components/theme'

type CssAppShellProps = ThemeAwareLayout & {

}

export const cssAppShell = (props: CssAppShellProps) => css`
  width: 100%;
  background-color: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR};

  padding: 8px;

  .nav-enclosing {
    width: 100%;
    /* height: 56px; */

    border-radius: 8px;
    padding: 8px;

    display: flex;
    justify-content: center;
    
    
    ${DefaultThemeProperties.boxShadowInset.small(props.themeStyle)}

    .nav-item {
      padding-left: 8px;
      padding-right: 8px;

      color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};
    }
  }
`