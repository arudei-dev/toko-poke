/** @jsxImportSource @emotion/react */
import React from "react"
import PokeSilhouette from "assets/svg/PokeSilhouette"
import { capitalizeEachWord } from "tools/string-helper"
import { AsyncImage } from "./AsyncImage"
import { Button } from "./Button"
import { CardView } from "./CardView"
import {
  cssPokemonCard,
  cssPokemonSpriteRoot,
  cssPokemonNameRoot,
  cssActionDivRoot,
} from './PokemonCard.style'

interface Props {
  id: number,
  pokeName?: string,
  pokeSpriteURL?: string,
  autoCapitalize?: boolean,
  usePlaceholder?: boolean,
  onClick?: (e: React.MouseEvent) => void;
}

const PokemonCard: React.FC<Props> = ({ 
  id, 
  pokeName, 
  pokeSpriteURL, 
  autoCapitalize, 
  usePlaceholder,
  onClick 
}) => {


  const _onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    onClick && onClick(e)
  }

  return (
    <CardView isClickable={!usePlaceholder} onClick={_onClick}>
      <div css={cssPokemonCard}>

        <div css={cssPokemonSpriteRoot}>
          {
            (!usePlaceholder && pokeSpriteURL) ? (
              <AsyncImage src={pokeSpriteURL} alt={`Pokemon '${pokeName}'`}>
                <PokeSilhouette color="grey"/>
              </AsyncImage>
            ) : (
              <PokeSilhouette color="grey"/>
            )
          }
        </div>

        <div css={cssPokemonNameRoot}>
          {
            (!usePlaceholder && pokeName) ? (
              autoCapitalize ? capitalizeEachWord(pokeName) : pokeName
            ) : (
              "???"
            )
          }
        </div>
        <div css={cssActionDivRoot}>
          <Button isLoading={usePlaceholder} title="Catch 'em!"/>
        </div>
      </div>
    </CardView>
  )
}

export default PokemonCard
