/** @jsxImportSource @emotion/react */
import { cssGridView } from './GridView.style'
import React from 'react';

interface Props {
  children?: React.ReactNode | React.ReactNode[],
  alignContent?: 'left' | 'center' | 'right'
  usePadding?: boolean
}

const GridView: React.FC<Props> = ({
  children, 
  usePadding,
  alignContent,
}) => {
  return (
    <div css={cssGridView({
      usePadding: usePadding ?? true,
      alignContent: alignContent ?? 'center'
    })}>
      { children && React.Children.map(children, child => {
        return <div className="grid-item">
          { child }
        </div>
      }) }
    </div>
  )
}



export { GridView }
