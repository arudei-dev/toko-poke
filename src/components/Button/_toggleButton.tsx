// /** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { BaseButtonProps } from './_base'
import { ButtonStyle } from './_base.style';
import { cssToggleButtonBase } from './_toggleButton.style'


export type OnToggleChangeFn = (props: { event: React.ChangeEvent<HTMLInputElement>, checked: boolean }) => void

export type ToggleButtonProps = Partial<BaseButtonProps> & {
  title: string,
  checked?: boolean,
  oneWayToggle?: boolean,
  onChange?: OnToggleChangeFn,
  toggledStyle?: 'raised-sunken' | 'raised' | 'sunken'
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  title, 
  oneWayToggle, checked,
  isLoading, isDisabled, 
  themeStyle, buttonStyle, toggledStyle,
  stretchWidth, stretchHeight,
  onClick, onChange,
}) => {
  const [isPressed, setIsPressed] = useState(checked)

  useEffect(() => {
    setIsPressed(checked)
  }, [checked])

  const _onToggleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPressed && oneWayToggle) {
      e.preventDefault()
      return false
    }

    setIsPressed(e.target.checked)

    onChange 
    && onChange({event: e, checked: isPressed ?? false})
  }

  const _onToggleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (isPressed && oneWayToggle) {
      e.preventDefault()
      return false
    }

    onClick 
    && onClick(e)
  }

  return (
    <div 
      css={cssToggleButtonBase({
        isLoading: isLoading ?? false, 
        isDisabled: isDisabled ?? false,
        themeStyle: themeStyle ?? 'light',
        buttonStyle: buttonStyle ?? 'normal',
        stretchWidth: stretchWidth ?? false,
        stretchHeight: stretchHeight ?? false,
        oneWayToggle: oneWayToggle ?? true,
        toggledStyle: toggledStyle ?? 'raised-sunken',
      })}>
        <label className="switch">
          <input 
            type="checkbox" 
            defaultChecked={isPressed} 
            checked={isPressed}
            onClick={_onToggleClick} 
            onChange={_onToggleChanged}/>

          <div className="contentCover">
            <div className="contentInner">
              {title}
            </div>
          </div>
        </label>
    </div>
  )
}
