import { useAppContext } from 'context/App/hooks'
import { useModalContext } from 'context/Modal/hooks'
import { LayoutCatchPokemonMessage } from "app/layouts/CatchPokemon/Message"
import { TModalReleasePokemon } from '.'
import { actRemovePokemon } from 'context/App/actions'

export const ModalReleasePokemon = () => {
  const [appState, appDispatch] = useAppContext()
  const themeStyle = appState.useTheme

  const [modalState, modalDispatch] = useModalContext()
  const pokeData = (modalState?.modal as TModalReleasePokemon)?.modalPayload

  const _onConfirmButtonClick = () => {
    const idx = pokeData?.id ?? -1

    appDispatch(actRemovePokemon(idx))

    _closeModal()
  }

  const _closeModal = () => {
    modalDispatch({
      type: 'CLOSE_MODAL'
    })
  }

  return (
    <LayoutCatchPokemonMessage
      messageTitle="Release Pokemon"
      messageText={`Are you sure you want to release ${pokeData?.name || '<???>'} called '${pokeData?.nickname}'?`}
      primaryButtonText="Yes"
      onPrimaryClick={_onConfirmButtonClick}
      altButtonText="Wait no"
      onAltClick={_closeModal}
      themeStyle={themeStyle}
      />
  )
}
