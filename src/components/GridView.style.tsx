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

export type CssGridViewProps = {
  usePadding: boolean,
}

export const cssGridView = (props: CssGridViewProps) => css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; // should be prop

  ${cssGridViewItem(props.usePadding)}
`;