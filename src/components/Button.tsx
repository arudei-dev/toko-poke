// /** @jsxImportSource @emotion/react */
import React from 'react';
import { ButtonStyle, cssButtonBase, ThemeStyle } from './Button.style'

interface Props {
  title: string
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: (e: React.MouseEvent) => void
  themeStyle?: ThemeStyle
  buttonStyle?: ButtonStyle
  stretchWidth?: boolean
}

const Button: React.FC<Props> = ({
  title, 
  isLoading, 
  isDisabled, 
  onClick, 
  themeStyle,
  buttonStyle,
  stretchWidth,
}) => {

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
        themeStyle: themeStyle ?? 'light',
        stretchWidth: stretchWidth ?? false,
        buttonStyle: buttonStyle ?? 'normal'
      })} 
      onClick={_onClick}>
      {title}
    </button>
  )
}

export { Button }
