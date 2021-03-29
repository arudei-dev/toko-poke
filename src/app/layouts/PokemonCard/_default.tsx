/** @jsxImportSource @emotion/react */
import React from "react"
import { PokeSilhouette } from "assets/svg/PokeSilhouette"
import { capitalizeEachWord } from "core/utils/string-helper"
import { AsyncImage } from "components"
import { CardView } from "components"
import {
  cssPokemonCard,
  cssPokemonSpriteRoot,
  cssPokemonNameRoot,
  cssActionDivRoot,
  ThemeStyle,
} from './_base.style'

interface Props {
  id: number,
  pokeName?: string,
  pokeSpriteURL?: string,
  autoCapitalize?: boolean,
  usePlaceholder?: boolean,
  themeStyle?: ThemeStyle,
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
      <div css={cssPokemonCard}>

        <div css={cssPokemonSpriteRoot}>
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

        <div css={cssPokemonNameRoot({
          isLoading: usePlaceholder ?? false,
          themeStyle: themeStyle ?? 'light',
        })}>
          {
            (!usePlaceholder && pokeName) ? (
              // Add character ellipsis
              autoCapitalize ? capitalizeEachWord(pokeName) : pokeName
            ) : (
              "???"
            )
          }
        </div>
        {/* <div css={cssActionDivRoot}>
          <Button
            themeStyle={themeStyle}
            isDisabled={usePlaceholder} 
            title="Catch 'em!"/>
        </div> */}
      </div>
    </CardView>
  )
}
