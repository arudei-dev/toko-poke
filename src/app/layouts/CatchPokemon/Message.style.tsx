/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, mqSizes, ThemeAwareLayout } from 'components/theme'

export type { ThemeAwareLayout }

export const cssLayoutCatchPokemonMessage = (props: ThemeAwareLayout) => css`

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0px 0px 0px;
  grid-template-areas:
    "."
    "."
    ".";

  width: 350px;

  color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};

  @media (max-width: ${mqSizes.mobileM}) {
    width: 325px;
  }

  @media (max-width: ${mqSizes.mobileS}) {
    width: 275px;
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
  }

  .content-msg {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-family: 'Ubuntu';
    font-size: 14pt;
    line-height: 1.5em;
    
    padding: 8px;
    padding-top: 16px;
    padding-bottom: 8px;
  }

  .content-actions {
    padding: 8px;

    .action-wrap {
      padding-top: 16px;
    }
  }
`