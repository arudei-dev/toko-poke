/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  mqSizes,
  DefaultThemeColors, 
  ThemeStyle
} from 'components/theme'


export const cssPokemonCard = css`
  width: 300px;
  height: 120px;
  
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". .";

  @media (max-width: ${mqSizes.mobileM}) {
    width: 270px;
    height: 150px;
  }

  @media (max-width: ${mqSizes.mobileS}) {
    width: 250px;
    height: 150px;
  }

  .part {
    &.pokemon-hero {
      width: 120px;
      height: 120px;

      @media (max-width: ${mqSizes.mobileM}) {
        width: 110px;
        height: 110px;
      }

      @media (max-width: ${mqSizes.mobileS}) {
        width: 100px;
        height: 100px;
      }

      > img {
        image-rendering: pixelated;
      }
    }

    &.pokemon-info {
      padding-left: 4px;
      font-family: 'Ubuntu';

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      gap: 0px 0px;
      grid-template-areas:
        "."
        ".";

      > .info-details {
        > .species-name {
          padding-bottom: 8px;

          text-transform: uppercase;
          font-weight: 700;
          font-size: 10pt;
        }

        > .nickname {
          font-size: 14pt;
        }
      }

      > .info-action {
        width: 100%;
        padding-bottom: 4px;
        padding-right: 2px;
      }
    }

  }
`

// export const cssPokemonSpriteRoot = css`
//   width: 108px;
//   height: 108px;
//   object-fit: fill;
//   -webkit-user-drag: none;
//   -khtml-user-drag: none;
//   -moz-user-drag: none;
//   -o-user-drag: none;
//   image-rendering: pixelated;

//   @media (max-width: 420px) {
//     width:  96px;
//     height: 96px;
//   }
// `

// export type CssPokemonNameRootType = {
//   isLoading: boolean,
//   themeStyle: ThemeStyle,
// }

// export const cssPokemonNameRoot = (props: CssPokemonNameRootType) => css`
//   color: ${
//     props.isLoading 
//     ? DefaultThemeColors(props.themeStyle).TEXT_COLOR_DISABLED 
//     : DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY 
//   };
//   font-family: 'Ubuntu';
//   font-weight: 600;
//   font-size: 14pt;
//   padding-bottom: 8px;
// `

// export const cssActionDivRoot = css`
//   padding: 8px;
//   padding-top: 16px;
//   width: 100%;
// `

export type {
  ThemeStyle
}