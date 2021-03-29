


/** @jsxImportSource @emotion/react */
import { CardView, StandardButton } from "components"
import { cssAppModalView } from "./AppModal.style"
import { useAppState } from 'context/App/hooks'
import { useModalContext } from 'context/Modal/hooks'
import { ModalController } from "app/modals"
import { React } from "@ungap/global-this"


export const AppModalView = () => {
  const appState = useAppState()
  const themeStyle = appState.useTheme

  const [modalState, modalDispatch] = useModalContext()

  const _onCloseButtonClick = () => {
    modalDispatch({
      type: "CLOSE_MODAL"
    })
  }

  const _onOuterDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    // _onCloseButtonClick()
  }

  return (
    (modalState.showModal) ? (
      <div 
        css={cssAppModalView({
          themeStyle
        })} 
        onClick={_onOuterDivClick}>
        <div className="modal-enclosing" onClick={e => e.stopPropagation()}>
          <CardView
            themeStyle={themeStyle}>
            <div className="modal-inner">              
              <ModalController/>
            </div>
          </CardView>
        </div>
      </div>
    ) : (
      <></>
    )
  )
}
