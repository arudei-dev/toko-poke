/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useAppContext } from 'context/App/hooks'
import { useModalDispatch } from 'context/Modal/hooks'
import { GridView, PageBase, StandardButton } from 'components'
import { LayoutPokemonCardWithNickname } from 'app/layouts/PokemonCard'
import { cssMyPokemonsListPage } from './MyPokemonLists.style'

export const MyPokemonLists = () => {
  const history = useHistory()

  const [ appState, appDispatch ] = useAppContext()
  const currentPokeList = appState?.myProfile?.myPokeList ?? []
  const themeStyle = appState.useTheme

  const modalDispatch = useModalDispatch()

  
  const _onPokemonCardClick = (p: {e: React.MouseEvent, id: number}) => {
    history.push(`/pokemon/${currentPokeList[p.id].species.name}/details`);
  }

  const _onReleaseButtonClick = (p: {e: React.MouseEvent, id: number}) => {
    if (!currentPokeList) return;
    
    modalDispatch({
      type: 'SHOW_MODAL',
      payload: {
        modalType: 'Release Pokemon',
        modalPayload: {
          id: p.id,
          name: currentPokeList[p.id].species.name,
          nickname: currentPokeList[p.id].nickname,
        }
      }
    })
  }

  const _onGoToPokeListClick = () => {
    history.push(`/?page=1`);
  }

  const _renderNoPokemons = () => (
    <div className="div-no-pokemons">
      <div className="message">
        There are currently no pokemons in your collections. Go catch 'em!
      </div>
      <div className="actions">
        <StandardButton
          title="Go to Pokemons List"
          onClick={_onGoToPokeListClick}
          />
      </div>
    </div>
  )

  return (
    <PageBase
      themeStyle={themeStyle}
      autoScrollRestore={true}>
        <div css={cssMyPokemonsListPage()}>
          {
            (currentPokeList.length !== 0) ? (
              <GridView>
                {
                  currentPokeList?.map((poke, idx) => (
                    <div className="poke-item">
                      <LayoutPokemonCardWithNickname
                        key={idx}
                        id={idx}
                        autoCapitalize={true}
                        nickname={poke?.nickname || "???"}
                        pokeName={poke?.species?.name || "???"}
                        pokeSpriteURL={poke?.species?.image || ""}
                        themeStyle={themeStyle}
                        usePlaceholder={false}
                        onClick={_onPokemonCardClick}
                        buttonText="Release"
                        onButtonClick={_onReleaseButtonClick}
                        />
                    </div>
                  ))
                }
              </GridView>
            )
            : (
              _renderNoPokemons()
            )
          }
        </div>

    </PageBase>
  )
}
