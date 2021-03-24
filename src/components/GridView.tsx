/** @jsxImportSource @emotion/react */
import { cssGridView } from './GridView.style'
import React from 'react';

interface Props {
  children?: React.ReactNode | React.ReactNode[],
  usePadding?: boolean
}

const GridView: React.FC<Props> = ({ children, usePadding }) => {
  return (
    <div css={cssGridView({ usePadding: usePadding ?? true })}>
      { children && React.Children.map(children, child => {
        return <div className="grid-item">
          { child }
        </div>
      }) }
    </div>
  )
}



export { GridView }
