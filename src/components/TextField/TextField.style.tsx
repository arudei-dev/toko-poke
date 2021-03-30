/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { 
  ThemeAwareLayout,
  DefaultThemeColors,
  DefaultThemeProperties
} from 'components/theme'

export type { ThemeAwareLayout }


export type CssTextFieldBaseProps = ThemeAwareLayout & {
  isFocused: boolean,
  showStatus: boolean,
}

export const cssTextFieldBase = (props: CssTextFieldBaseProps) => css`

  .input-enclosure {
    border-radius: 8px;
    padding: 2px;
    -webkit-padding-before: 2px;
    -webkit-padding-after: 2px;
    -webkit-padding-start: 2px;
    -webkit-padding-end: 2px;
    
    input[type=text] {
      width: 100%;
      padding: 12px 20px;
      display: inline-block;
      border: none;
      border-radius: 6px;
      box-sizing: border-box;

      outline: none;
      -webkit-outline: none;
      
      appearance: none;
      -webkit-appearance: none;
      
      background-color: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR};

      color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};
      
      ${DefaultThemeProperties.boxShadowInset.small(props.themeStyle)};

    }

    &:hover {
      ${DefaultThemeProperties.actnBoxShadow0.hover(props.themeStyle)}
    }

    ${props.isFocused && DefaultThemeProperties.actnBoxShadow0.normal(props.themeStyle)} 
  }

  .input-status {
    display: none;
  }

  ${props.showStatus && css`

    .input-enclosure {
      background-color: ${DefaultThemeColors(props.themeStyle).STATUSCOLOR_DANGER};
    }
  
    .input-status {
      display: flex;
      padding: 8px 0;

      font-size: 10pt;
      color: ${DefaultThemeColors(props.themeStyle).STATUSCOLOR_DANGER};
    }

  `}

`