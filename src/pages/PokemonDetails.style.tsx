/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { mqSizes } from 'components/theme'


export const cssFragmentPokeDetails = () => css`
  &.poke-details {
    .poke-details-content {
      width: 100%;
      height: 100%;
      padding-bottom: 8px;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(0, auto) minmax(0, auto) minmax(0, 1fr) !important;
      gap: 0px 0px 0px;
      grid-template-areas:
        "."
        "."
        ".";

      @media (max-width: ${mqSizes.desktopL}) {
        padding-bottom: 0;

        grid-template-columns: minmax(0, 1fr) minmax(0, auto) !important;
        grid-template-rows: 1fr;
        gap: 0px;
        grid-template-areas: ". .";
      }
      
      @media (max-width: ${mqSizes.mobileM}) {
        grid-template-columns: 1fr !important;
        grid-template-rows: 1fr;
        gap: 0px;
        grid-template-areas: ".";
      }

      .poke-bio {
        width: 100%;
        height: 100%;
        padding-bottom: 16px;

        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: ${mqSizes.desktopL}) {
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

          @media (max-width: ${mqSizes.desktopL}) {
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

              @media (max-width: ${mqSizes.desktopL}) {
                justify-content: flex-start;
              }

              @media (max-width: ${mqSizes.mobileM}) {
                justify-content: center;
              }
            }
          }
        }
      }

      .poke-actions {
        width: 100%;

        padding: 8px;
        padding-top: 16px;
        padding-bottom: 21px;

        @media (max-width: ${mqSizes.desktopL}) {
          padding-top: 8px;
          padding-bottom: 0;
        }


        @media (max-width: ${mqSizes.mobileM}) {
          padding-bottom: 8px;
        }
      }

      .poke-stats-list {
        width: 100%;
        height: 100%;

        overflow-y: auto;

        .poke-stats {
          width: 100%;
          padding: 8px;
          padding-bottom: 16px;

          .poke-stats-label {
            width: 100%;
            padding-bottom: 8px;
            text-transform: uppercase;

            font-family: "Geomanist";
            font-weight: 600;
          }

          .poke-stats-progress {
            width: 100%;
          }
        }
      }
    }
  }
`

export const cssPagePokemonDetails = () => css`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";

  @media (max-width: ${mqSizes.desktopL}) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }


  // Flex, Row, Wrap, Center
  .flex-rwc {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .flex-cwc {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  .fragment {
    width: 100%;
    height: 100%;
    padding: 24px;

    min-height: 0 !important;
    min-width: 0 !important;

    ${cssFragmentPokeDetails()}

    @media (max-width: ${mqSizes.desktopL}) {
      height: auto;

      min-height: auto !important;
      min-width: auto !important;
    }


    &.poke-additionals {
      width: 100%;
      height: 100%;
      
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(0, auto) minmax(0, 1fr) !important;
      gap: 0px 0px;
      grid-template-areas:
        "."
        ".";

      @media (max-width: ${mqSizes.desktopL}) {
        display: flex;
        flex-direction: column;
      }

      .additionals-header {
        font-family: 'Ubuntu';
        font-size: 21pt;
        font-weight: 600;

        padding-bottom: 16px;

        @media (max-width: ${mqSizes.desktopL}) {
          display: flex;
          flex-direction: row;

          .tab-item {
            /* width: 120px;
            height: 48px; */
            padding-right: 16px;
          }
        }
      }

      .additionals-list {
        width: 100%;
        height: 100%;
        overflow-y: auto;

        @media (max-width: ${mqSizes.desktopL}) {
          overflow-y: visible;
        }
        
        padding-right: 8px;

        .move-item {
          width: 180px;
          height: 120px;
          
          @media (max-width: ${mqSizes.mobileL}) {
            width: 170px;
            height: 120px;
          }

          @media (max-width: ${mqSizes.mobileM}) {
            width: 140px;
            height: 120px;
          }

          
          .item-cover {
            width: 100%;
            height: 100%;
            padding: 8px 4px;

            min-height: 0 !important;
            min-width: 0 !important;

            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: minmax(0, auto) minmax(0, 1fr) !important;
            gap: 0px 0px;
            grid-template-areas:
              "."
              ".";

            overflow: hidden;

            .item-subtitle {
              width: 100%;
              font-family: 'Geomanist';
              font-size: 9pt;
              font-weight: 700;
    
              padding-bottom: 8px;
            }
    
            .item-title {
              width: 100%;
              height: 100%;

              font-family: 'Geomanist';
              font-size: 18pt;
              font-weight: 400;
              line-height: 24pt;
    
              text-transform: capitalize;
              text-overflow: ellipsis;
              overflow-y: auto;
              
            }
          }
        }
      }
    }
  }

`