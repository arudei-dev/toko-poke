/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLQPokemonDetailsByName } from "context/Apollo/services/lqPokemonDetails";
import { useAppState } from 'context/App/hooks'
import { useModalDispatch } from 'context/Modal/hooks'
import { LayoutPokemonBio } from 'app/layouts/PokemonDetails/PokemonBio'
import { CardView, PageBase, StandardButton, ToggleButton } from 'components'
import { cssPagePokemonDetails } from './PokemonDetails.style'
import { LayoutPokemonMovesList } from "app/layouts/PokemonDetails/PokemonMovesList";
import { LayoutPokemonStatsList } from "app/layouts/PokemonDetails/PokemonStatsList";

export const PokemonDetails = () => {
  type RegisteredTabs = 'moves' | 'stats'
  const [tabActive, setTabActive] = useState<RegisteredTabs>('moves')

  const appState = useAppState()
  const themeStyle = appState.useTheme
  
  const modalDispatch = useModalDispatch()

  let { pokeName } = useParams<{ pokeName: string, }>()
  const [loadDetails, { called, loading, data: pokeData, error }] = useLQPokemonDetailsByName()

  useEffect(() => {
    loadDetails({
      variables: {
        poke_name: pokeName
      }
    })
  }, [])


  const _onToggleButtonClick = (tab: 'moves' | 'stats') => {
    setTabActive(tab)
  } 

  const _onCatchButtonClick = () => {
    modalDispatch({
      type: 'SHOW_MODAL',
      payload: {
        modalType: "Catch Pokemon",
        modalPayload: {
          id: pokeData?.id,
          name: pokeData?.name,
          image: pokeData?.sprites?.front_default,
        },
      }
    })
  }




  const _renderPokeBio = () => (
    <CardView
      stretchWidth={true}
      >
        <div className="poke-bio-enclose">
          <div className="poke-bio-content">
            <LayoutPokemonBio
              pokeData={pokeData}
              />
          </div>

          <div className="poke-bio-actions">
            <StandardButton 
              title="Catch 'em"
              stretchWidth={true}
              themeStyle={themeStyle}
              onClick={_onCatchButtonClick}
              />
          </div>
        </div>
    </CardView>
  )

  const _renderPokeDetails = () => (
    <div className="poke-details-enclose">
      <div className="details-inner tab">
        <div className="tab-item">
          <ToggleButton 
            title="Moves"
            oneWayToggle={true}
            checked={tabActive === 'moves'}
            stretchWidth={false}
            stretchHeight={false}
            themeStyle={themeStyle}
            onClick={e => _onToggleButtonClick('moves')}
            />
        </div>

        <div className="tab-item">
          <ToggleButton 
            title="Stats"
            oneWayToggle={true}
            checked={tabActive === 'stats'}
            stretchWidth={false}
            stretchHeight={false}
            themeStyle={themeStyle}
            onClick={e => _onToggleButtonClick('stats')}
            />
        </div>
      </div>
      <div className="details-inner content">
        {
          tabActive === 'moves'
          ? (
            <div className="content-moves">
              <LayoutPokemonMovesList
                isLoading={false}
                themeStyle="light"
                movesList={pokeData?.moves}
                />
            </div>
          )
          : (
            <div className="content-stats">
              <LayoutPokemonStatsList
                isLoading={false}
                themeStyle="light"
                statsList={pokeData?.stats}
                />
            </div>
          )
        }
      </div>
    </div>
  )

  const _renderComplete = () => (
    <div className={`pokemon-details multi`}>
      <div className="column poke-bio">
        {_renderPokeBio()}
      </div>
      <div className="column poke-details">
        {_renderPokeDetails()}
      </div>
    </div>
  )

  return (
    <div
      css={cssPagePokemonDetails({
        themeStyle: 'light'
      })}>
        <PageBase
          autoScrollRestore={true}>
            {(!loading && called) && _renderComplete()}
        </PageBase>
    </div>
  )
}
