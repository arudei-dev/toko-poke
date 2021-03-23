/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

interface Props {
  title: string
  onClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<Props> = ({title, onClick}) => {

  const ButtonCss = css`
    width: 100%;
    border: none;
    text-decoration:none;
    outline: none;
    padding: 10px;
    cursor: pointer;

    border-radius: 4px;
    background: linear-gradient(145deg, #e0e0e0, #e0e0e0);
    box-shadow:  3px  3px 8px #bebebe,
                -3px -3px 8px #ffffff;

    font-family: 'Ubuntu';
    font-weight: 600;
    font-size: 14pt;

    transition: box-shadow 150ms;

    &:focus, &:hover, &:active {
      border: none;
    }

    &:hover {
      background: linear-gradient(145deg, #f0f0f0, #cacaca);
      box-shadow:  7px 7px 14px #bebebe,
                  -7px -7px 14px #ffffff;
    }

    &:active {
      background: linear-gradient(145deg, #e0e0e0, #e0e0e0);
      box-shadow: inset  5px  5px 10px #bebebe,
                  inset -5px -5px 10px #ffffff;
    }
  `;

  const _onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClick && onClick(e)
  }

  return (
    <button css={ButtonCss} onClick={_onClick}>
      {title}
    </button>
  )
}

export { Button }
