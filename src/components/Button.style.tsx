/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const cssButtonNormal = css`
  border-radius: 4px;
  background: linear-gradient(145deg, #e0e0e0, #e0e0e0);
  box-shadow:  3px  3px 8px #bebebe,
              -3px -3px 8px #ffffff;
              
  transition: box-shadow 150ms;
`

const cssButtonHover = css`
  &:hover {
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow:  7px 7px 14px #bebebe,
                -7px -7px 14px #ffffff;
  }
`

const cssButtonActive = css`
  &:active {
    background: linear-gradient(145deg, #e0e0e0, #e0e0e0);
    box-shadow: inset  5px  5px 10px #bebebe,
                inset -5px -5px 10px #ffffff;
  }
`

type CssProps = {
  isLoading: boolean,
  isDisabled: boolean,
}

const cssButtonBase = ({
  isLoading,
  isDisabled
}: CssProps) => css`
  width: 100%;
  border: none;
  text-decoration:none;
  outline: none;
  padding: 10px;

  ${cssButtonNormal}

  font-family: 'Ubuntu';
  font-weight: 600;
  font-size: 14pt;


  ${isLoading && `color: #e0e0e0`}

  ${!isLoading && `
      cursor: pointer;
      
      &:focus, &:hover, &:active {
        border: none;
      }

      ${cssButtonHover}

      ${cssButtonActive}
    `
  }
`

export { cssButtonBase }