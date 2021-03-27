/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PokeDetails_stats } from 'core/api/types/PokeDetails'
import { mqSizes, ThemeStyle } from 'components/theme';
import { GridView } from 'components/GridView';
import { CardView } from 'components/CardView';
import { ProgressBar } from 'components/ProgressBar';
import { Text } from 'components/Text';


interface Props {
  isLoading: boolean,
  themeStyle: ThemeStyle
  statsList?: (PokeDetails_stats | null)[] | null,
}

export const LayoutPokemonStatsList: React.FC<Props> = ({
  isLoading,
  themeStyle,
  statsList
}) => {

  const _cssLayout = css`
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
  `

  return (
    <div css={_cssLayout}>
      {
        statsList?.map((stat, idx) => {
          const statName = stat?.stat?.name ?? "Unknown Stat"
          const statValue = stat?.base_stat ?? 0
          
          return (
            <div className="poke-stats flex-rwc">
              <div className="poke-stats-label flex-rwc">
                <Text 
                  text={`${statName} [${statValue}]`}
                  textColor="primary"
                  themeStyle={themeStyle}
                  />
              </div>
  
              <div className="poke-stats-progress">
                <ProgressBar
                  themeStyle={themeStyle}
                  value={stat?.base_stat ?? 0}
                  />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
