/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, ThemeStyle, mqSizes, ThemeAwareLayout } from 'components/theme'


export type CssPokemonCardProps = ThemeAwareLayout & {
  isLoading: boolean,
}

export const cssPokemonCard = (props: CssPokemonCardProps) => css`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 128px;
  min-height: 160px;

  @media (max-width: ${mqSizes.mobileM}) {
    width:  120px;
  }

  @media (max-width: ${mqSizes.mobileS}) {
    width:  104px;
  }

  .pokemon-sprite {
    width: 108px;
    height: 108px;
    object-fit: fill;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    image-rendering: pixelated;

    padding-bottom: 16px;

    @media (max-width: ${mqSizes.mobileM}) {
      width:  100px;
      height: 100px;
    }

    @media (max-width: ${mqSizes.mobileS}) {
      width:  96px;
      height: 96px;
    }
  }

  .pokemon-name {
    color: ${
      props.isLoading 
      ? DefaultThemeColors(props.themeStyle).TEXT_COLOR_DISABLED 
      : DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY 
    };
    font-family: 'Ubuntu';
    font-weight: 600;
    font-size: 14pt;
    padding-bottom: 8px;

    text-align: center;

    @media (max-width: ${mqSizes.mobileM}) {
      font-size: 12pt;
    }

    @media (max-width: ${mqSizes.mobileS}) {
      font-size: 11pt;
    }
  }
`