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