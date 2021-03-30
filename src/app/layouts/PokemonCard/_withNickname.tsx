/** @jsxImportSource @emotion/react */
import React from "react"
import { PokeSilhouette } from "assets/svg/PokeSilhouette"
import { AsyncImage, StandardButton } from "components"
import { CardView } from "components"
import { ThemeAwareLayout } from 'components/theme'
import { cssPokemonCardWithNickname } from './_withNickname.style'

type ClickEventProps = {e: React.MouseEvent, id: number}

interface Props extends Partial<ThemeAwareLayout> {
  id: number,
  nickname?: string,
  pokeName?: string,
  pokeSpriteURL?: string,
  autoCapitalize?: boolean,
  usePlaceholder?: boolean,
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
      <div css={cssPokemonCardWithNickname({
        isLoading: true,
        themeStyle: themeStyle ?? 'light'
      })}>
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
    </CardView>
  )
}
