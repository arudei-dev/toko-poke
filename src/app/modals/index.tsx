import { useModalState } from 'context/Modal/hooks'
import { ModalCatchPokemon } from "./CatchPokemon"
import { PokemonLists_pokemons_results } from 'context/Apollo/types/PokemonLists'


export const ModalController = () => {

  const modalState = useModalState()

  switch (modalState.modal?.modalType) {
    case "Catch Pokemon":
      return <ModalCatchPokemon />

    default:
      return <></>
  }
}

export type TModalCatchPokemon = {
  modalType: "Catch Pokemon",
  modalPayload: Partial<PokemonLists_pokemons_results>,
}

export type TModalRegistry = 
  TModalCatchPokemon
  | {
    modalType: null,
    modalPayload: null,
  }