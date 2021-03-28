


/** @jsxImportSource @emotion/react */
import { CardView, StandardButton } from "components"
import { cssAppModalView } from "./AppModal.style"
import { CloseIcon } from 'assets/svg/CloseIcon'
import SadPikaImg from 'assets/img/sad-pika-min.png'


export const AppModalView = () => {
  return (
    <div css={cssAppModalView()}>
      <CardView>
        <div className="modal-inner">
          <div className="modal-titlebar">
            <div className="titlebar-title">
              Modal Title
            </div>
            <div className="titlebar-actions">
              <StandardButton 
                title={(
                  <div className="icon-close">
                    <CloseIcon color="black"/>
                  </div>
                )}
                />
            </div>
          </div>
          

        </div>
      </CardView>
    </div>
  )
}
