/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PokeDetails_stats } from 'context/Apollo/types/PokeDetails'
import { ThemeAwareLayout } from 'components/theme';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { Text } from 'components';


interface Props extends Partial<ThemeAwareLayout> {
  isLoading: boolean,
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

  const StatsListItem = (props: {statName: string, statVal: number, baseStat?: number}) => (
    <div className="poke-stats flex-rwc">
      <div className="poke-stats-label flex-rwc">
        <Text 
          text={`${props.statName} [${props.statVal}]`}
          textColor="primary"
          themeStyle={themeStyle}
          />
      </div>

      <div className="poke-stats-progress">
        <ProgressBar
          themeStyle={themeStyle}
          value={props.baseStat ?? 0}
          />
      </div>
    </div>
  )

  return (
    <div css={_cssLayout}>
      {
        statsList?.map((stat, idx) => {
          const statName = stat?.stat?.name ?? "Unknown Stat"
          const statValue = stat?.base_stat ?? 0
          
          return (
            <StatsListItem 
              key={idx}
              statName={statName}
              statVal={statValue}
              baseStat={stat?.base_stat ?? 0}
              />
          )
        })
      }
    </div>
  )
}
