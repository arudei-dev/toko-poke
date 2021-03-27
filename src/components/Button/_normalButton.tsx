

// /** @jsxImportSource @emotion/react */
import React from 'react';
import { BaseButtonProps } from './_base'
import { cssNormalButtonBase } from './_normalButton.style'


export type NormalButtonProps = Partial<BaseButtonProps> & {
  title: string
}

export const NormalButton: React.FC<NormalButtonProps> = ({
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
      css={cssNormalButtonBase({ 
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
