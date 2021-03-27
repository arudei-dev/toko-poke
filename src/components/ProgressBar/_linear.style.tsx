/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, DefaultThemeProperties } from 'components/theme'
import { CssProgressBarProps, cssColorBatteryStyle } from './_base.style'


export const cssLinearProgressBar = (props: CssProgressBarProps) => css`
  width: 100%;
  height: ${
    props.size === 'small'
    ? css`12px`
    : props.size === 'medium'
      ? css`14px`
      : css`18px`
  };

  border-radius: 999px;
  /* overflow: hidden; */

  ${DefaultThemeProperties.boxShadowInset.small(props.themeStyle)}

  .progress-bar {
    width: ${props.value}%;
    height: 100%;
    /* background-color: ${DefaultThemeColors(props.themeStyle).STATUSCOLOR_DANGER}; */
    border-radius: 999px;

    ${
      props.colorStyle === 'batteryStyle'
      ? cssColorBatteryStyle({...props})
      : css``
    }

    ${DefaultThemeProperties.boxShadow.small(props.themeStyle)}
  }
`