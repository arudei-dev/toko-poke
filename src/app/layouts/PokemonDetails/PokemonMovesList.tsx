/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PokeDetails_moves } from 'context/Apollo/types/PokeDetails'
import { mqSizes, ThemeStyle } from 'components/theme';
import { GridView } from 'components/GridView';
import { CardView } from 'components/CardView';
import { Text } from 'components/Text';


interface Props {
  isLoading: boolean,
  themeStyle: ThemeStyle
  movesList?: (PokeDetails_moves | null)[] | null,
}

export const LayoutPokemonMovesList: React.FC<Props> = ({
  isLoading,
  themeStyle,
  movesList
}) => {

  const _cssLayout = css`
    width: 100%;
    /* height: 100%;
    overflow-y: scroll; */

    /* @media (max-width: ${mqSizes.desktopL}) {
      overflow-y: visible;
    } */
    
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

        @media (max-width: ${mqSizes.mobileS}) {
          width: 120px;
          height: 100px;
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

            @media (max-width: ${mqSizes.mobileS}) {
              font-size: 8pt;
            }
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

            @media (max-width: ${mqSizes.mobileS}) {
              font-size: 14pt;
            line-height: 18pt;
            }
          }
        }
    }
  `

  return (
    <div css={_cssLayout}>
      <GridView
        alignContent="space-evenly"
        usePadding="small">
        {
          movesList?.map((move, idx) => (
            <div className="move-item">
              <CardView 
                themeStyle={themeStyle}
                stretchHeight={true}
                stretchWidth={true}>
                <div className="item-cover">
                  <div className="item-subtitle">
                    <Text 
                      themeStyle={themeStyle}
                      textColor="secondary"
                      text="POKEMON MOVE"
                      />
                  </div>
                  <div className="item-title">
                    <Text 
                      themeStyle={themeStyle}
                      text={move?.move?.name?.replace(/-/g, " ") || "Unknown move"}
                      />
                  </div>
                </div>
              </CardView>
            </div>
          ))
        }
      </GridView>
    </div>
  )
}
