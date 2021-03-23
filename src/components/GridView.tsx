/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

interface Props {
  children?: React.ReactNode | React.ReactNode[],
  usePadding?: boolean
}

const GridView: React.FC<Props> = ({ children, usePadding }) => {
  const GridViewCss = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .grid-item {
      min-width: 250px;

      @media (max-width: 420px) {
        min-width: 100px;
      }
    }

    ${usePadding && `
      .grid-item {
        padding: 20px;
          
        @media (max-width: 420px) {
          padding: 12px;
        }
      }
    `}
  `;

  return (
    <div css={GridViewCss}>
      { children && React.Children.map(children, child => {
        return <div className="grid-item">
          { child }
        </div>
      }) }
    </div>
  )
}



export { GridView }
