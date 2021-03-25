/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { cssPageBase } from './PageBase.style'

interface Props {
  noYScrolling?: boolean,
  children?: React.ReactNode,
}

const PageBase: React.FC<Props> = ({ children, noYScrolling }) => {
  return (
    <div css={cssPageBase({
      noYScrolling: noYScrolling ?? false,
      themeType: "light"
    })}>
      { children }
    </div>
  )
}



export { PageBase }
