/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { cssPageBase, ThemeStyle } from './PageBase.style'

interface Props {
  noYScrolling?: boolean,
  children?: React.ReactNode,
  themeStyle?: ThemeStyle
}

const PageBase: React.FC<Props> = ({ children, noYScrolling, themeStyle }) => {
  return (
    <div css={cssPageBase({
      noYScrolling: noYScrolling ?? false,
      ThemeStyle: themeStyle ?? "light"
    })}>
      { children }
    </div>
  )
}



export { PageBase }
