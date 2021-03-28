/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { mqSizes, ThemeAwareLayout, DefaultThemeColors } from 'components/theme'

export type { ThemeAwareLayout }


export const cssLayoutCatchPokemonLucky = (props: ThemeAwareLayout) => css`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 0px 0px;
  grid-template-areas:
    "."
    ".";

  min-width: 350px;

  color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};

  @media (max-width: ${mqSizes.mobileM}) {
    max-width: 325px;
    min-width: 250px;
  }

  @media (max-width: ${mqSizes.mobileS}) {
    max-width: 275px;
  }

  .content-focus {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content-title {
      width: 100%;
      padding-top: 8px;
      display: flex;
      justify-content: center;

      font-family: 'Ubuntu';
      font-size: 21pt;
      font-weight: 600;
    }

    .content-hero {
      width: 200px;
      height: 200px;

      image-rendering: pixelated;
/* 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
    }
    .content-msg {
      padding-top: 16px;
      padding-bottom: 16px;

      font-family: 'Ubuntu';

      span {
        font-weight: 600;
      }
    }

    .content-form {
      width: 100%;
      padding: 8px;
      padding-bottom: 0;
    }

  }

  .content-actions {
    padding: 8px;

    .action-wrap {
      padding-top: 16px;
    }
  }

`