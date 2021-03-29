/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


export const cssAppFrame = () => css`
  width: 100%;
  height: 100%;

  overflow: hidden;

  position: relative;

  .app-main {
    width: 100%;
    height: 100%;

    overflow: hidden;

    position: absolute;
    left: 0;
    top: 0;

    &.content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: minmax(0, auto) minmax(0, 1fr);
      gap: 0px 0px;
      grid-template-areas:
        "."
        ".";
    }

    &.modals {
      background-color: rgba(220, 225, 230, 0.9);

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.hide {
      display: none;
    }
  }
`