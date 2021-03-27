

// /** @jsxImportSource @emotion/react */
import React from 'react';
import { BaseButtonProps } from './_base'
import { cssStandardButtonBase } from './_standardButton.style'


export type StandardButtonProps = Partial<BaseButtonProps> & {
  title: string
}

export const StandardButton: React.FC<StandardButtonProps> = ({
  title, 
  isLoading, 
  isDisabled, 
  onClick, 
  themeStyle,
  buttonStyle,
  stretchWidth,
  stretchHeight,
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
      css={cssStandardButtonBase({ 
        isLoading: isLoading ?? false, 
        isDisabled: isDisabled ?? false,
        themeStyle: themeStyle ?? 'light',
        buttonStyle: buttonStyle ?? 'normal',
        stretchWidth: stretchWidth ?? false,
        stretchHeight: stretchHeight ?? false,
      })} 
      onClick={_onClick}>
      {title}
    </button>
  )
}
