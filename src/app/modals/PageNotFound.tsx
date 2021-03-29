import { useHistory } from 'react-router-dom'
import { useAppContext } from 'context/App/hooks'
import { useModalContext } from 'context/Modal/hooks'
import { LayoutCatchPokemonMessage } from "app/layouts/CatchPokemon/Message"
import { TModalPageNotFound } from '.'
import { actRemovePokemon } from 'context/App/actions'

export const ModalPageNotFound = () => {
  const [appState, appDispatch] = useAppContext()
  const themeStyle = appState.useTheme

  const [modalState, modalDispatch] = useModalContext()
  const modalData = (modalState?.modal as TModalPageNotFound)?.modalPayload

  const history = useHistory()


  const _onGoHomeClick = () => {
    history.replace('/')

    modalDispatch({
      type: 'CLOSE_MODAL'
    })
  }

  return (
    <LayoutCatchPokemonMessage
      messageTitle={modalData.errorTitle}
      messageText={modalData.errorMessage}
      primaryButtonText="Go Home"
      onPrimaryClick={_onGoHomeClick}
      themeStyle={themeStyle}
      />
  )
}
