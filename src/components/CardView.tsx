/** @jsxImportSource @emotion/react */
import { cssCardView, ThemeStyle } from './CardView.style'

interface Props {
  children?: React.ReactNode,
  isClickable?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
  stretchWidth?: boolean,
  stretchHeight?: boolean,
  onClick?: (e: React.MouseEvent) => void,
  themeStyle?: ThemeStyle,
}

const CardView: React.FC<Props> = ({ 
  children, 
  isClickable, 
  isDisabled, 
  onClick, 
  stretchWidth,
  stretchHeight,
  themeStyle,
}) => {

  const _onClick = (e: React.MouseEvent) => {
    if (!isClickable || isDisabled) return

    e.preventDefault()
    e.stopPropagation()
    onClick && onClick(e)
  }

  return (
    <div 
      css={cssCardView({
        isClickable: isClickable ?? false,
        isDisabled: isDisabled ?? false,
        stretchWidth: stretchWidth ?? false,
        stretchHeight: stretchHeight ?? false,
        ThemeStyle: themeStyle ?? "light",
      })} 
      onClick={_onClick}>
      { children }
    </div>
  )
}



export { CardView }
