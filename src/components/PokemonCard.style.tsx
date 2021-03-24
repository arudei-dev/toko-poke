/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


export const cssPokemonCard = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const cssPokemonSpriteRoot = css`
  width: 128px;
  height: 128px;
  object-fit: fill;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  image-rendering: pixelated;

  @media (max-width: 420px) {
    width:  96px;
    height: 96px;
  }
`

export const cssPokemonNameRoot = css`
  color: #001f3f;
  font-family: 'Ubuntu';
  font-weight: 600;
  font-size: 16pt;
`

export const cssActionDivRoot = css`
  padding: 8px;
  padding-top: 16px;
  width: 100%;
`

// const cssGridViewItem = (usePadding: boolean) => css`
//   .grid-item {
//     min-width: 250px;
//     ${usePadding && css`padding: 20px;`}

//     @media (max-width: 420px) {
//       min-width: 100px;
//       ${usePadding && css`padding: 12px;`}
//     }
//   }
// `

// export type CssGridViewProps = {
//   usePadding: boolean,
// }

// export const cssGridView = (props: CssGridViewProps) => css`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;

//   ${cssGridViewItem(props.usePadding)}
// `;