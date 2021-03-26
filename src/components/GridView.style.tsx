/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


export type TCssAlignContent = 'flex-start' | 'center' | 'flex-end' 
                                | 'space-between' | 'space-around' | 'space-evenly'
export type TCssPaddingSize = 'none' | 'small' | 'medium' | 'large'

const cssGridViewItem = (usePadding: TCssPaddingSize) => {
  let paddingSize = {
    Desktop: "0",
    MobileL: "0",
    MobileS: "0",
  }

  if (usePadding === 'small') 
    paddingSize = {
      Desktop: "12px",
      MobileL: "8px",
      MobileS: "4px",
    }

  else if (usePadding === 'medium') 
    paddingSize = {
      Desktop: "20px",
      MobileL: "16px",
      MobileS: "12px",
    }

  return css`
    .grid-item {
      /* min-width: 200px; */
      padding: ${paddingSize.Desktop};

      @media (max-width: 420px) {
        /* min-width: 170px; */
        padding: ${paddingSize.MobileS}
      }
    }
  `
}


export type CssGridViewProps = {
  usePadding: TCssPaddingSize,
  alignContent: TCssAlignContent,
}

export const cssGridView = (props: CssGridViewProps) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props.alignContent}; // should be prop

  ${cssGridViewItem(props.usePadding)}
`;