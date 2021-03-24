/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const cssCardViewHover = css`
  &:hover {
    box-shadow:  10px  10px 20px #bebebe,
                -10px -10px 20px #ffffff;
  }
`

const cssCardViewActive = css`
  &:active:not(:focus-within) {
    box-shadow: inset  7px  7px 14px #bebebe,
                inset -7px -7px 14px #ffffff;
  }
`

export type CssCardViewProps = {
  isClickable: boolean,
  isDisabled: boolean,
}

export const cssCardView = (props: CssCardViewProps) => css`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border-radius: 15px;
  background: #e0e0e0;
  box-shadow:  6px  6px 11px #bebebe,
              -6px -6px 11px #ffffff;
              
  transition: box-shadow 150ms;

  
  ${props.isClickable && css`
    cursor: pointer;
    
    ${cssCardViewHover};

    ${cssCardViewActive};
  `}
`