/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface Props {
  noYScrolling?: boolean,
  children?: React.ReactNode,
}

const PageBase: React.FC<Props> = ({ children, noYScrolling }) => {
  const PageCss = css`
    background-color: #e0e0e0;
    width: 100%;
    height: 100%;
    overflow-y: ${noYScrolling ? css`none` : css`auto`};
  `;

  return (
    <div css={PageCss}>
      { children }
    </div>
  )
}



export { PageBase }
