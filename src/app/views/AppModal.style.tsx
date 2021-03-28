/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { mqSizes } from 'components/theme'


export const cssAppModalView = () => css`

.modal-inner {
    width: 400px;
    height: 350px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "."
      ".";

    @media (max-width: ${mqSizes.mobileM}) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: ${mqSizes.mobileS}) {
      width: 250px;
    }

    .modal-titlebar {
      min-height: 48px;

      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-template-areas:
        ". .";

      .titlebar-title {
        width: 100%;
        height: 100%;
        padding-left: 8px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        font-family: 'Ubuntu';
        font-size: 21pt;
        font-weight: 600;

        @media (max-width: ${mqSizes.mobileM}) {
          font-size: 18pt;
        }
        @media (max-width: ${mqSizes.mobileS}) {
          font-size: 14pt;
        }
      }

      .icon-close {
        width: 24px;
        height: 24px;
      }

    }
  }
`