/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ThemeAwareLayout, mqSizes } from 'components/theme'

export type cssLayoutPokemonBioProps = ThemeAwareLayout & {

}

export const cssLayoutPokemonBio = (props: cssLayoutPokemonBioProps) => css`
  width: 100%;


  .poke-bio {
    width: 100%;
    height: 100%;
    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${mqSizes.desktopM}) {
      width: 100%;
      height: 100%;
      padding-bottom: 0;
      padding-right: 16px;

      display: grid;
      grid-template-columns: minmax(0, auto) minmax(0, 1fr) !important;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-template-areas: ". .";
    }

    @media (max-width: ${mqSizes.mobileM}) {
      padding-bottom: 8px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .poke-avatar {
      width: 200px;
      height: 200px;
      image-rendering: pixelated;

      @media (max-width: ${mqSizes.desktopS}) {
        width: 150px;
        height: 150px;
      }

      @media (max-width: ${mqSizes.mobileL}) {
        width: 100px;
        height: 100px;
      }

      @media (max-width: ${mqSizes.mobileM}) {
        width: 150px;
        height: 150px;
      }
    }

    .poke-details {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: ${mqSizes.desktopM}) {
        padding-left: 8px;
        align-items: flex-start;
      }
      
      @media (max-width: ${mqSizes.mobileM}) {
        align-items: center;
      }
      
      .poke-infohero {
        color: white;
        font-family: "Ubuntu";
        font-size: 36pt;
        font-weight: 600;

        text-align: center;

        @media (max-width: ${mqSizes.desktopS}) {
          display: flex;
          flex-direction: column;
          align-items: center;
          
          font-size: 32pt;
        }

        @media (max-width: ${mqSizes.mobileL}) {
          font-size: 22pt;
        }

        @media (max-width: ${mqSizes.mobileM}) {
          display: flex;
          flex-direction: column;
          align-items: center;
          
          font-size: 32pt;
        }
      }

      .poke-types {
        width: 100%;
        // padding-top: 8px;

        display: flex;
        flex-direction: column;
        align-items: center;

        .poke-types-list {
          width: 100%;
          padding-top: 4px;

          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;

          @media (max-width: ${mqSizes.desktopM}) {
            justify-content: flex-start;
          }

          @media (max-width: ${mqSizes.mobileM}) {
            justify-content: center;
          }
        }
      }
    }
  }
`