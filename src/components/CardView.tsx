/** @jsxImportSource @emotion/react */
import { cssCardView } from './CardView.style'

interface Props {
  children?: React.ReactNode,
  isClickable?: boolean,
  isDisabled?: boolean,
  isLoading?: boolean,
  onClick?: (e: React.MouseEvent) => void
}

const CardView: React.FC<Props> = ({ children, isClickable, isDisabled, onClick }) => {

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
      })} 
      onClick={_onClick}>
      { children }
    </div>
  )
}



export { CardView }
