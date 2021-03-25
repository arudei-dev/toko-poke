// /** @jsxImportSource @emotion/react */
import React from 'react';
import { cssButtonBase, ThemeStyle } from './Button.style'

interface Props {
  title: string
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: (e: React.MouseEvent) => void
  themeStyle?: ThemeStyle
}

const Button: React.FC<Props> = ({title, isLoading, isDisabled, onClick, themeStyle}) => {

  const _onClick = (e: React.MouseEvent) => {
    if (isLoading || isDisabled) return

    e.preventDefault()
    e.stopPropagation()
    onClick && onClick(e)
  }

  return (
    <button 
      disabled={isDisabled ?? false}
      css={cssButtonBase({ 
        isLoading: isLoading ?? false, 
        isDisabled: isDisabled ?? false,
        themeStyle: themeStyle ?? 'light' 
      })} 
      onClick={_onClick}>
      {title}
    </button>
  )
}

export { Button }
