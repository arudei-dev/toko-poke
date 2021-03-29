/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ThemeAwareLayout, mqSizes, DefaultThemeColors } from 'components/theme'

type Props = ThemeAwareLayout & {

}

export const cssPagePokemonDetails = (props: Props) => css`
  width: 100%;
  height: 100%;

  background-color: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR};
  
  .pokemon-details {
    width: 100%;
    height: 100%;
    
    &.multi {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
      grid-template-rows: minmax(0, 1fr);
      gap: 0px 0px;
      grid-template-areas:
        ". .";

      

      @media (max-width: ${mqSizes.desktopL}) {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
        grid-template-rows: minmax(0, 1fr);
        gap: 0px 0px;
        grid-template-areas:
          ". .";
      }


      @media (max-width: ${mqSizes.desktopM}) {
        display: flex;
        flex-direction: column;

        overflow-y: auto;
      }

      .column {
        width: 100%;
        height: 100%;

        &.poke-bio {
          padding: 16px;

          .poke-bio-enclose {
            width: 100%;
            height: 100%;
            background-color: ${DefaultThemeColors(props.themeStyle).BACKGROUND_COLOR};

            display: grid;
            grid-template-rows: minmax(0, auto) minmax(0, auto);
            grid-template-columns: minmax(0, 1fr);
            gap: 0px 0px;
            grid-template-areas:
              "."
              ".";


            @media (max-width: ${mqSizes.desktopM}) {
              display: grid;
              grid-template-columns: minmax(0, 1fr) minmax(0, auto);
              grid-template-rows: minmax(0, 1fr);
              gap: 0px 0px;
              grid-template-areas:
                ". .";
            }

            @media (max-width: ${mqSizes.mobileM}) {
              display: grid;
              grid-template-rows: minmax(0, auto) minmax(0, auto);
              grid-template-columns: minmax(0, 1fr);
              gap: 0px 0px;
              grid-template-areas:
                "."
                ".";
            }

            .poke-bio-actions {
              padding: 8px;
            }

          }
        }

        &.poke-details {
          width: 100%;
          height: 100%;

          padding-top: 16px;
          padding-left: 16px;
          
          .poke-details-enclose {
            width: 100%;
            height: 100%;

            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto minmax(0, 1fr) !important;
            gap: 0px 0px;
            grid-template-areas:
              "."
              ".";

            
            @media (max-width: ${mqSizes.desktopM}) {
              display: flex;
              flex-direction: column;
            }

            .details-inner {
              width: 100%;

              &.tab {
                display: flex;
                padding-bottom: 16px;

                .tab-item {
                  padding-right: 8px;

                  font-family: 'Ubuntu';
                  font-size: 14pt;
                }
              }

              &.content {
                height: 100%;
                overflow-y: auto;

                @media (max-width: ${mqSizes.desktopM}) {
                  overflow-y: visible;
                }

                .content-stats {
                  width: 100%;

                  padding-right: 32px;
                }

                .content-moves {
                  width: 100%;

                }
              }
            }
          }
        }
      }
    }
  }

`