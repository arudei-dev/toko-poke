import { useModalState } from 'context/Modal/hooks'
import { ModalCatchPokemon } from "./CatchPokemon"
import { PokemonLists_pokemons_results } from 'context/Apollo/types/PokemonLists'
import { ModalReleasePokemon } from './ReleasePokemon'


export const ModalController = () => {

  const modalState = useModalState()

  switch (modalState.modal?.modalType) {
    case "Catch Pokemon":
      return <ModalCatchPokemon />

    case "Release Pokemon":
      return <ModalReleasePokemon />

    default:
      return <></>
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
  | {
    modalType: null,
    modalPayload: null,
  }