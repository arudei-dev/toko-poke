/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { StandardButton } from "components"
import { useAppContext } from 'context/App/hooks'
import { useModalContext } from 'context/Modal/hooks'
import { tossACoin, CoinFace } from 'core/utils/random-helper'
import { LayoutCatchPokemonLucky, PokemonCatchSaveEventPkg } from 'app/layouts/CatchPokemon/Lucky'
import { LayoutCatchPokemonFail } from 'app/layouts/CatchPokemon/Fail'
import { LayoutCatchPokemonLoading } from 'app/layouts/CatchPokemon/Loading'
import { LayoutCatchPokemonMessage } from 'app/layouts/CatchPokemon/Message'
import { actAddPokemon } from 'context/App/actions'




export const ModalCatchPokemon = () => {
  const [appState, appDispatch] = useAppContext()
  const themeStyle = appState.useTheme
  
  const [modalState, modalDispatch] = useModalContext()
  const pokeData = modalState?.modal?.modalPayload

  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [nicknameOops, setNicknameOops] = useState(false)

  useEffect(() => {
    setIsSuccess(
      tossACoin() === CoinFace.Head ? true : false
    )

    let tossTimeout = setTimeout(() => setIsLoading(false), 3000)

    return () => {
      clearTimeout(tossTimeout)
    }
  }, [])
  

  const _savePokemon = (p: PokemonCatchSaveEventPkg) => {
    console.log("saving pokemon")

    const myPokeList = appState.myProfile?.myPokeList || []

    const nicknameNotAvailable = 
      (myPokeList.length !== 0) 
      && myPokeList.filter(poke => (
        poke.nickname === p.pokeNickname
      )).length > 0

    if (nicknameNotAvailable) {
      setNicknameOops(true)
      return;
    }

    appDispatch(actAddPokemon({
      nickname: p.pokeNickname,
      species: {
        id: p.pokeId,
        name: p.pokeName,
        image: p.pokeImageURL
      }
    }))

    _closeModal()
  }

  const _closeModal = () => {
    modalDispatch({
      type: "CLOSE_MODAL"
    })
  }

  return (
    isLoading ? (
      <LayoutCatchPokemonLoading
        themeStyle={themeStyle}
        onCancelButtonClick={_closeModal}/>
    ) : (
      isSuccess ? (
        !nicknameOops
        ? (
          <LayoutCatchPokemonLucky 
            themeStyle={themeStyle}
            pokeData={pokeData}
            onReleaseClick={_closeModal}
            onSaveClick={_savePokemon}/>
        )
        : (
          <LayoutCatchPokemonMessage 
            themeStyle={themeStyle}
            messageTitle="Oops!"
            messageText="Looks like you tried to enter a nickname you already registered!"
            primaryButtonText="Go back"
            altButtonText="Release"
            onPrimaryClick={() => setNicknameOops(false)}
            onAltClick={_closeModal}
            />
        )
      ) : (
        <LayoutCatchPokemonFail
          themeStyle={themeStyle}
          onCloseButtonClick={_closeModal}/>
      )
    )
    
  )
}
