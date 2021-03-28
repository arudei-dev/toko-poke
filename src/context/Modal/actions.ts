import { TModalState, TModalPayload } from './state'
import { useModalDispatch } from './hooks'

export type TModalActionType = "SHOW_MODAL" | "CLOSE_MODAL"

export type TModalAction = {
  type: TModalActionType,
  payload?: TModalPayload,
}


const show = (modal: TModalPayload): TModalAction => ({
  type: "SHOW_MODAL",
  payload: modal,
})

const close = (): TModalAction => ({
  type: "CLOSE_MODAL",
})


export const ModalActions = {
  show,
  close,
}