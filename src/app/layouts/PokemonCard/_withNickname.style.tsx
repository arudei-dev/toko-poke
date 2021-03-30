/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
  mqSizes,
  ThemeAwareLayout
} from 'components/theme'


export type CssPokemonCardWithNicknameProps = ThemeAwareLayout & {
  isLoading: boolean,
}

export const cssPokemonCardWithNickname = (props: CssPokemonCardWithNicknameProps) => css`
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
