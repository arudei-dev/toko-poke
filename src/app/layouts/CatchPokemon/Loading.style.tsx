/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, mqSizes, ThemeAwareLayout } from 'components/theme'

export type { ThemeAwareLayout }

export const cssLayoutCatchPokemonLoading = (props: ThemeAwareLayout) => css`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0px 0px 0px;
  grid-template-areas:
    "."
    "."
    ".";

  min-width: 350px;

  @media (max-width: ${mqSizes.mobileM}) {
    max-width: 325px;
    min-width: 250px;
  }

  @media (max-width: ${mqSizes.mobileS}) {
    max-width: 275px;
  }

  .content-title {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: 'Ubuntu';
    font-size: 21pt;
    font-weight: 600;

    color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY}
  }

  .content-msg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding-bottom: 24px;
    
    color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};

    .content-hero {
      width: 250px;
      padding-top: 16px;
      padding-bottom: 16px;
      /* height: 200px; */

      img {
        width: 100%;
      }
    }

    .content-info {
      padding-bottom: 16px;
    }
  }

`