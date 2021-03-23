/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface Props {
  children?: React.ReactNode,
}

const PageBase: React.FC<Props> = ({ children }) => {
  const PageCss = css`
    background-color: #e0e0e0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  `;

  return (
    <div css={PageCss}>
      { children }
    </div>
  )
}



export { PageBase }
