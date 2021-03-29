/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { PokemonLists_pokemons_results } from "context/Apollo/types/PokemonLists"
import { PokeSilhouette } from 'assets/svg/PokeSilhouette'
import { cssLayoutCatchPokemonLucky, ThemeAwareLayout } from './Lucky.style'
import {
  AsyncImage,
  StandardButton,
  TextField,
} from 'components'

const MSG_NO_NICKNAME = "Please enter a nickname."
const MSG_MAX_LENGTH = "Maximum 15 characters"
const MSG_NICKNAME_NOT_AVAILABLE = "Sorry, but there's already a pokemon with that nickname!"

export type PokemonCatchSaveEventPkg = {
  pokeId: number, 
  pokeName: string, 
  pokeNickname: string,
  pokeImageURL?: string | null,
}

interface Props extends Partial<ThemeAwareLayout> {
  pokeData?: Partial<PokemonLists_pokemons_results> | null,
  onSaveClick?: (pkg: PokemonCatchSaveEventPkg) => void,
  onReleaseClick?: () => void,
}

export const LayoutCatchPokemonLucky: React.FC<Props> = ({
  pokeData,
  onSaveClick, onReleaseClick,
  themeStyle
}) => {
  const [givenNickname, setGivenNickname] = useState("")
  const [textStatus, setTextStatus] = useState("")
  

  const _onSaveButtonClick = () => {
    if (!givenNickname) {
      setTextStatus(MSG_NO_NICKNAME)
      return false;
    }

    if (givenNickname.length > 15) {
      setTextStatus(MSG_MAX_LENGTH)
      return false;
    }

    onSaveClick && onSaveClick({
      pokeId: pokeData?.id!,
      pokeName: pokeData?.name!,
      pokeImageURL: pokeData?.image,
      pokeNickname: givenNickname,
    })
  }

  const _onReleaseButtonClick = () => {
    onReleaseClick && onReleaseClick()
  }

  return (
    <div 
      css={cssLayoutCatchPokemonLucky({
        themeStyle: themeStyle ?? 'light'
      })}>
      <div className="content-focus">
        <div className="content-title">
          Congratulations
        </div>
        <div className="content-msg">
          You just caught <span>{pokeData?.name}</span>!
        </div>
        <div className="content-hero">
          {
            pokeData?.image ? (
              <AsyncImage src={pokeData?.image} alt={`Pokemon '${pokeData?.name}'`}>
                <PokeSilhouette color="#00000033"/>
              </AsyncImage>
            ) : (
              <PokeSilhouette color="#00000011"/>
            )
            // <PokeSilhouette color="#00000011"/>
          }
        </div>

        <div className="content-form">
          <TextField 
            themeStyle={themeStyle}
            statusType={textStatus ? "error" : "none"}
            statusMsg={textStatus}
            placeholder="Nickname (max 15 characters)"
            onChange={({text}) => setGivenNickname(text)}
            onInputChange={() => textStatus && setTextStatus("")}/>
        </div>
      </div>
      <div className="content-actions">
        <div className="action-wrap">
          <StandardButton 
            themeStyle={themeStyle}
            title="Save" 
            onClick={_onSaveButtonClick}
            stretchWidth={true}
            />
        </div>
        <div className="action-wrap">
          <StandardButton 
            themeStyle={themeStyle}
            title="Release" 
            buttonStyle="borderless"
            onClick={_onReleaseButtonClick}
            stretchWidth={true}
            />
        </div>
      </div>
    </div>
  )
}
