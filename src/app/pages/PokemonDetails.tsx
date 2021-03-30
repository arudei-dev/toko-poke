/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentLoadingStatus } from "core/types/AsyncStatus";
import { useLQPokemonDetailsByName } from "context/Apollo/services/lqPokemonDetails";
import { useAppState } from 'context/App/hooks'
import { useModalDispatch } from 'context/Modal/hooks'
import { CardView, PageBase, StandardButton, ToggleButton } from 'components'
import { LayoutPokemonBio } from 'app/layouts/PokemonDetails/PokemonBio'
import { LayoutPokemonMovesList } from "app/layouts/PokemonDetails/PokemonMovesList";
import { LayoutPokemonStatsList } from "app/layouts/PokemonDetails/PokemonStatsList";
import { cssPagePokemonDetails } from './PokemonDetails.style'

export const PokemonDetails = () => {
  type RegisteredTabs = 'moves' | 'stats'
  const [tabActive, setTabActive] = useState<RegisteredTabs>('moves')
  const [contentStatus, setcontentStatus] = useState<ContentLoadingStatus>('loading')

  const appState = useAppState()
  const themeStyle = appState.useTheme
  
  const modalDispatch = useModalDispatch()

  let { pokeName } = useParams<{ pokeName: string, }>()
  const [loadDetails, { called, loading, data: pokeData }] = useLQPokemonDetailsByName()

  useEffect(() => {
    loadDetails({
      variables: {
        poke_name: pokeName
      }
    })
  }, [loadDetails, pokeName])

  useEffect(() => {
    if (!loading && called) {
      if (!pokeData?.id) {
        setcontentStatus('error')

        modalDispatch({
          type: 'SHOW_MODAL',
          payload: {
            modalType: 'Page Not Found',
            modalPayload: {
              errorTitle: "What pokemon?",
              errorMessage: `
                Oops, looks like there's no pokemon named ${pokeName}!
              `
            }
          }
        })
      }
      else {
        setcontentStatus('ready')
      }
    }
    else {
      setcontentStatus('loading')
    }
  }, [modalDispatch, pokeData?.id, pokeName, loading, called])


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
      themeStyle={themeStyle}
      stretchWidth={true}
      >
        <div className="poke-bio-enclose">
          <div className="poke-bio-content">
            <LayoutPokemonBio
              themeStyle={themeStyle}
              pokeData={pokeData}
              />
          </div>

          <div className="poke-bio-actions">
            <StandardButton 
              title="Catch 'em"
              isLoading={loading && !called}
              stretchWidth={true}
              themeStyle={themeStyle}
              onClick={_onCatchButtonClick}
              />
          </div>
        </div>
    </CardView>
  )

  const PokeDetails = () => (
    <div className="poke-details-enclose">
      <div className="details-inner tab">
        <div className="tab-item">
          <ToggleButton 
            themeStyle={themeStyle}
            title="Moves"
            oneWayToggle={true}
            checked={tabActive === 'moves'}
            stretchWidth={false}
            stretchHeight={false}
            onClick={e => _onToggleButtonClick('moves')}
            />
        </div>

        <div className="tab-item">
          <ToggleButton 
            themeStyle={themeStyle}
            title="Stats"
            oneWayToggle={true}
            checked={tabActive === 'stats'}
            stretchWidth={false}
            stretchHeight={false}
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
                themeStyle={themeStyle}
                movesList={pokeData?.moves}
                />
            </div>
          )
          : (
            <div className="content-stats">
              <LayoutPokemonStatsList
                isLoading={false}
                themeStyle={themeStyle}
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
        <PokeDetails/>
      </div>
    </div>
  )

  const _renderLoading = () => (
    <div className={`pokemon-details multi`}>
      <div className="column poke-bio">
        <CardView
          themeStyle={themeStyle}
          stretchWidth={true}
          >
            <div className="poke-bio-enclose">
              <div className="poke-bio-content">
                <LayoutPokemonBio
                  themeStyle={themeStyle}
                  usePlaceholder={true}
                  pokeData={pokeData}
                  />
              </div>

              <div className="poke-bio-actions">
                <StandardButton 
                  title="Catch 'em"
                  isLoading={true}
                  stretchWidth={true}
                  themeStyle={themeStyle}
                  onClick={_onCatchButtonClick}
                  />
              </div>
            </div>
        </CardView>
      </div>
      <div className="column poke-details">
        <div className="content-moves">
          <LayoutPokemonMovesList
            isLoading={false}
            usePlaceholder={true}
            themeStyle={themeStyle}
            />
        </div>
      </div>
    </div>
  )

  return (
    <div
      css={cssPagePokemonDetails({
        themeStyle,
        isLoading: contentStatus !== 'ready'
      })}>
        <PageBase
          themeStyle={themeStyle}
          noYScrolling={contentStatus !== 'ready'}
          autoScrollRestore={true}>
            {
              contentStatus === 'ready' 
              ? _renderComplete() 
              : contentStatus === 'loading'
                ? _renderLoading()
                : <></> 
            }
        </PageBase>
    </div>
  )
}
