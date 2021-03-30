/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { cssTextFieldBase, ThemeAwareLayout } from "./TextField.style"

interface TextFieldProps extends Partial<ThemeAwareLayout> {
  id?: string
  name?: string
  placeholder?: string
  statusType?: 'info' | 'error' | 'none'
  statusMsg?: string
  onChange?: (p: {e: React.FormEvent<HTMLInputElement>, text: string}) => void,
  onInputChange?: (e: React.FormEvent<HTMLInputElement>) => void,
}

export const TextField: React.FC<TextFieldProps> = ({
  id, name, placeholder, 
  statusType, statusMsg,
  onChange, onInputChange,
  themeStyle
}) => {
  const [isFocused, setIsFocused] = useState(false)
  

  const _onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    onInputChange && onInputChange(e)
  }

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange({e, text: e.target.value})
  }

  return (
    <div 
      css={cssTextFieldBase({
        isFocused,
        showStatus: statusType ? (statusType !== 'none') : false,
        themeStyle: themeStyle ?? 'light'
    })}>
      <div className="input-enclosure">
        <input 
          className="text-input"
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          onInput={_onInputChange}
          onChange={_onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}/>
      </div>
      <div className="input-status">
        {statusMsg}
      </div>
    </div>
  )
}
