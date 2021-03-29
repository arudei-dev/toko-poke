/** @jsxImportSource @emotion/react */
import React from "react"
import { PokeSilhouette } from "assets/svg/PokeSilhouette"
import { capitalize1stLetterOfEachWord } from "core/utils/string-helper"
import { AsyncImage, StandardButton } from "components"
import { CardView } from "components"
import {
  cssPokemonCard,
  // cssPokemonSpriteRoot,
  // cssPokemonNameRoot,
  // cssActionDivRoot,
  ThemeStyle,
} from './_withNickname.style'

type ClickEventProps = {e: React.MouseEvent, id: number}

interface Props {
  id: number,
  nickname?: string,
  pokeName?: string,
  pokeSpriteURL?: string,
  autoCapitalize?: boolean,
  usePlaceholder?: boolean,
  themeStyle?: ThemeStyle,
  onClick?: (p: ClickEventProps) => void;
  buttonText?: string,
  onButtonClick?: (p: ClickEventProps) => void;
}

export const LayoutPokemonCardWithNickname: React.FC<Props> = ({ 
  id, 
  nickname,
  pokeName, 
  pokeSpriteURL, 
  autoCapitalize, 
  usePlaceholder,
  buttonText,
  onClick,
  onButtonClick,
  themeStyle
}) => {


  const _onClick = (p: ClickEventProps) => {
    p.e.preventDefault()
    p.e.stopPropagation()

    onClick && onClick({ ...p })
  }

  const _onButtonClick = (p: ClickEventProps) => {
    p.e.preventDefault()
    p.e.stopPropagation()

    onButtonClick && onButtonClick({ ...p })
  }

  return (
    <CardView 
      isDisabled={usePlaceholder} 
      isClickable={!usePlaceholder} 
      onClick={e => _onClick({e, id})}
      stretchWidth={true}
      themeStyle={themeStyle}
    >
      <div css={cssPokemonCard}>
        <div className="part pokemon-hero">
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
        <div className="part pokemon-info">
          <div className="info-details">
            <div className="species-name">
              { pokeName }
            </div>
            <div className="nickname">
              { nickname }
            </div>
          </div>
          {
            buttonText && (
              <div className="info-action">
                <StandardButton 
                  themeStyle={themeStyle}
                  stretchWidth={true}
                  onClick={e => _onButtonClick({e, id})}
                  title={buttonText}
                  />
              </div>
            )
          }
        </div>
      </div>
      {/* <div css={cssPokemonCard}>

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
            nickname
            // (!usePlaceholder && pokeName) ? (
            //   // Add character ellipsis
            //   autoCapitalize ? capitalize1stLetterOfEachWord(pokeName) : pokeName
            // ) : (
            //   "???"
            // )
          }
        </div>
        
        <div css={cssActionDivRoot}>
          <StandardButton
            themeStyle={themeStyle}
            isDisabled={usePlaceholder} 
            title="Release"/>
        </div>
      </div> */}
    </CardView>
  )
}
