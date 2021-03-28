/** @jsxImportSource @emotion/react */
// import {} from 'react'
import { cssLayoutCatchPokemonMessage, ThemeAwareLayout } from './Message.style'
import { default as SadPikaImg } from 'assets/img/sad-pika-min.png'
import { StandardButton } from 'components'


interface Props extends Partial<ThemeAwareLayout> {
  messageTitle: string,
  messageText: string,
  primaryButtonText: string,
  altButtonText?: string,
  onPrimaryClick?: () => void,
  onAltClick?: () => void,
}

export const LayoutCatchPokemonMessage: React.FC<Props> = ({
  messageTitle,
  messageText,
  primaryButtonText,
  altButtonText,
  onPrimaryClick,
  onAltClick,
  themeStyle,
}) => {

  const _onPrimaryButtonClick = () => {
    onPrimaryClick && onPrimaryClick()
  }

  const _onAltButtonClick = () => {
    onAltClick && onAltClick()
  }

  return (
    <div 
      css={cssLayoutCatchPokemonMessage({
        themeStyle: themeStyle ?? 'light'
      })}>
        <div className="content-title">
          {messageTitle}
        </div>
        <div className="content-msg">
          {messageText}
        </div>
        <div className="content-actions">
          <div className="action-wrap">
            <StandardButton 
              themeStyle={themeStyle}
              title={primaryButtonText} 
              onClick={_onPrimaryButtonClick}
              stretchWidth={true}
              />
          </div>
          {altButtonText && (
            <div className="action-wrap">
              <StandardButton 
                themeStyle={themeStyle}
                title={altButtonText} 
                buttonStyle="borderless"
                onClick={_onAltButtonClick}
                stretchWidth={true}
                />
            </div>
          )}
        </div>
    </div>
  )
}
