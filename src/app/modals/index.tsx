import { useModalState } from 'context/Modal/hooks'
import { ModalCatchPokemon } from "./CatchPokemon"
import { PokemonLists_pokemons_results } from 'context/Apollo/types/PokemonLists'
import { ModalReleasePokemon } from './ReleasePokemon'
import { ModalPageNotFound } from './PageNotFound'


export const ModalController = () => {

  const modalState = useModalState()

  switch (modalState.modal?.modalType) {
    case "Catch Pokemon":
      return <ModalCatchPokemon />

    case "Release Pokemon":
      return <ModalReleasePokemon />

    case "Page Not Found": 
      return <ModalPageNotFound/>

    default:
      return <></>
  }
}

export type TModalPageNotFound = {
  modalType: "Page Not Found",
  modalPayload: {
    errorTitle: string,
    errorMessage: string,
  }
}

export type TModalCatchPokemon = {
  modalType: "Catch Pokemon",
  modalPayload: Partial<PokemonLists_pokemons_results>,
}

export type TModalReleasePokemon = {
  modalType: "Release Pokemon",
  modalPayload: Partial<PokemonLists_pokemons_results> & {
    nickname?: string
  },
}

export type TModalRegistry = 
  TModalCatchPokemon
  | TModalReleasePokemon
  | TModalPageNotFound
  | {
    modalType: null,
    modalPayload: null,
  }