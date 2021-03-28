import { TModalState } from "./state"
import { TModalAction } from './actions'


export const modalReducer = (state: TModalState, action: TModalAction): TModalState => {
  switch (action.type) {
    case "SHOW_MODAL": 
      return {
        showModal: true,
        modal: action.payload,
      }

    case "CLOSE_MODAL":
      return {
        showModal: false,
      }
  }
}