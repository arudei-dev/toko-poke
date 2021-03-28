
export type TModalPayload = {
  modalType: string,
  modalPayload: any,
}

export type TModalState = {
  showModal: boolean,
  modal?: TModalPayload,
}

export const initialModalState: TModalState = {
  showModal: false,
  modal: {
    modalType: '',
    modalPayload: null,
  }
}