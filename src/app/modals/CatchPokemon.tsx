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


type DialogTypes = "x-nickname" | "release-confirm" | null

export const ModalCatchPokemon = () => {
  const [appState, appDispatch] = useAppContext()
  const themeStyle = appState.useTheme
  
  const [modalState, modalDispatch] = useModalContext()
  const pokeData = modalState?.modal?.modalPayload

  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)

  const [showDialog, setShowDialog] = useState<DialogTypes>(null)

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
    const myPokeList = appState.myProfile?.myPokeList || []

    const nicknameNotAvailable = 
      (myPokeList.length !== 0) 
      && myPokeList.filter(poke => (
        poke.nickname === p.pokeNickname
      )).length > 0

    if (nicknameNotAvailable) {
      setShowDialog('x-nickname')
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

  const _renderDialog = () => {
    switch (showDialog) {
      case "x-nickname":
        return (
          <LayoutCatchPokemonMessage 
            themeStyle={themeStyle}
            messageTitle="Oops!"
            messageText="Looks like you tried to enter a nickname you already registered!"
            primaryButtonText="Go back"
            altButtonText="Release"
            onPrimaryClick={() => setShowDialog(null)}
            onAltClick={_closeModal}
            />
        )

      case "release-confirm": 
        return (
          <LayoutCatchPokemonMessage 
            themeStyle={themeStyle}
            messageTitle="Releasing Pokemon"
            messageText={`Are you sure you want to release ${pokeData?.name}?`}
            primaryButtonText="Release"
            altButtonText="Go back"
            onPrimaryClick={_closeModal}
            onAltClick={() => setShowDialog(null)}
            />
        )
      
      default:
        return <></>
    }
  }

  return (
    isLoading ? (
      <LayoutCatchPokemonLoading
        themeStyle={themeStyle}
        onCancelButtonClick={_closeModal}/>
    ) : (
      isSuccess ? (
        !showDialog
        ? (
          <LayoutCatchPokemonLucky 
            themeStyle={themeStyle}
            pokeData={pokeData}
            onReleaseClick={() => setShowDialog("release-confirm")}
            onSaveClick={_savePokemon}/>
        )
        : (
          _renderDialog()
        )
      ) : (
        <LayoutCatchPokemonFail
          themeStyle={themeStyle}
          onCloseButtonClick={_closeModal}/>
      )
    )
    
  )
}
