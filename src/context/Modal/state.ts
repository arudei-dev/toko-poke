import { TModalRegistry as TModalPayload } from 'app/modals'

export type TModalState = {
  showModal: boolean,
  modal?: TModalPayload,
}

export const initialModalState: TModalState = {
  showModal: false,
  modal: {
    modalType: null,
    modalPayload: null,
  }
}

export type { TModalPayload }