/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { cssPageBase, ThemeStyle } from './PageBase.style'

interface Props {
  noYScrolling?: boolean,
  autoScrollRestore?: boolean
  children?: React.ReactNode,
  themeStyle?: ThemeStyle,
}

const PageBase: React.FC<Props> = ({ 
  children, 
  noYScrolling, 
  autoScrollRestore,
  themeStyle 
}) => {

  const location = useLocation();

  const rootDivRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (autoScrollRestore) {
      rootDivRef?.current?.scrollTo(0,0)
    }
  }, [location.pathname, location.search])

  return (
    <div ref={rootDivRef} css={cssPageBase({
      noYScrolling: noYScrolling ?? false,
      ThemeStyle: themeStyle ?? "light"
    })}>
      { children }
    </div>
  )
}



export { PageBase }
