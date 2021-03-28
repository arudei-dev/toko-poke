/** @jsxImportSource @emotion/react */
// import {} from 'react'
import { cssLayoutCatchPokemonFail, ThemeAwareLayout } from './Fail.style'
import { default as SadPikaImg } from 'assets/img/sad-pika-min.png'
import { StandardButton } from 'components'


interface Props extends Partial<ThemeAwareLayout> {
  onCloseButtonClick?: () => void
}

export const LayoutCatchPokemonFail: React.FC<Props> = ({
  onCloseButtonClick,
  themeStyle
}) => {

  const _onCloseButtonClick = () => {
    onCloseButtonClick && onCloseButtonClick()
  }

  return (
    <div 
      css={cssLayoutCatchPokemonFail({
        themeStyle: themeStyle ?? 'light'
      })}>
        <div className="content-title">
          It escaped!
        </div>
        <div className="content-msg">
          <div className="content-hero">
            <img 
              src={SadPikaImg}
              alt="Pika is sad..." />
          </div>
          <div className="content-info">
            Oh no... better luck next time!
          </div>
        </div>
        <div className="content-actions">
          <StandardButton 
            themeStyle={themeStyle}
            title="Close" 
            onClick={_onCloseButtonClick}
            stretchWidth={true}
            />
        </div>
    </div>
  )
}
