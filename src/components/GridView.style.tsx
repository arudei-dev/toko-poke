/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const cssGridViewItem = (usePadding: boolean) => css`
  .grid-item {
    min-width: 200px;
    ${usePadding && css`padding: 20px;`}

    @media (max-width: 420px) {
      min-width: 170px;
      ${usePadding && css`padding: 12px;`}
    }
  }
`

export type TCssAlignContent = 'left' | 'center' | 'right'

export type CssGridViewProps = {
  usePadding: boolean,
  alignContent: TCssAlignContent,
}

export const cssGridView = (props: CssGridViewProps) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${
    props.alignContent === 'center'
    ? css`center`
    : props.alignContent === 'left'
      ? css`flex-start`
      : css`flex-end`
  }; // should be prop

  ${cssGridViewItem(props.usePadding)}
`;