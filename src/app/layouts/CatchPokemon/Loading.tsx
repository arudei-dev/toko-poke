/** @jsxImportSource @emotion/react */
// import {} from 'react'
import { cssLayoutCatchPokemonLoading, ThemeAwareLayout } from './Loading.style'
import { default as PokeballCatching } from 'assets/img/pokeball-catching.gif'
import { StandardButton } from 'components'


interface Props extends Partial<ThemeAwareLayout>{
  onCancelButtonClick?: () => void,
}

export const LayoutCatchPokemonLoading: React.FC<Props> = ({
  onCancelButtonClick,
  themeStyle
}) => {

  const _onCancelButtonClick = () => {
    onCancelButtonClick && onCancelButtonClick()
  }

  return (
    <div css={cssLayoutCatchPokemonLoading({
      themeStyle: themeStyle ?? 'light'
    })}>
      <div className="content-title">
        Please wait
      </div>
      <div className="content-msg">
        <div className="content-hero">
          <img 
            src={PokeballCatching}
            alt="Pika is sad..." />
        </div>
        Catching Pokemon...
      </div>
      
      <div className="content-actions">
        <StandardButton 
          title="Cancel" 
          themeStyle={themeStyle}
          onClick={_onCancelButtonClick}
          stretchWidth={true}
          />
      </div>
    </div>
  )
}
