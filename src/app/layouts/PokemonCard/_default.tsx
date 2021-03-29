/** @jsxImportSource @emotion/react */
import React from "react"
import { PokeSilhouette } from "assets/svg/PokeSilhouette"
import { capitalize1stLetterOfEachWord } from "core/utils/string-helper"
import { AsyncImage } from "components"
import { CardView } from "components"
import { ThemeAwareLayout, ThemeStyle } from 'components/theme'
import { cssPokemonCard } from './_default.style'

interface Props extends Partial<ThemeAwareLayout> {
  id: number,
  pokeName?: string,
  pokeSpriteURL?: string,
  autoCapitalize?: boolean,
  usePlaceholder?: boolean,
  onClick?: (e: React.MouseEvent) => void;
}

export const LayoutPokemonCardDefault: React.FC<Props> = ({ 
  id, 
  pokeName, 
  pokeSpriteURL, 
  autoCapitalize, 
  usePlaceholder,
  onClick,
  themeStyle
}) => {


  const _onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    onClick && onClick(e)
  }

  return (
    <CardView 
      isDisabled={usePlaceholder} 
      isClickable={!usePlaceholder} 
      onClick={_onClick}
      stretchWidth={true}
      themeStyle={themeStyle}
    >
      <div css={cssPokemonCard({
        isLoading: usePlaceholder ?? false,
        themeStyle: themeStyle ?? 'light'
        })}>

          <div className="pokemon-sprite">
            {
              (!usePlaceholder || pokeSpriteURL) ? (
                <AsyncImage src={pokeSpriteURL} alt={`Pokemon '${pokeName}'`}>
                  <PokeSilhouette color="#00000033"/>
                </AsyncImage>
              ) : (
                <PokeSilhouette color="#00000011"/>
              )
            }
          </div>

          <div className="pokemon-name">
            {
              (!usePlaceholder && pokeName) ? (
                // Add character ellipsis
                autoCapitalize ? capitalize1stLetterOfEachWord(pokeName) : pokeName
              ) : (
                "???"
              )
            }
          </div>
      </div>
    </CardView>
  )
}
