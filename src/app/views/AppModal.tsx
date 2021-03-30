


/** @jsxImportSource @emotion/react */
import { useAppState } from 'context/App/hooks'
import { useModalState } from 'context/Modal/hooks'
import { ModalController } from "app/modals"
import { CardView } from "components"
import { cssAppModalView } from "./AppModal.style"


export const AppModalView = () => {
  const appState = useAppState()
  const themeStyle = appState.useTheme

  const modalState = useModalState()


  const _onOuterDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
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
