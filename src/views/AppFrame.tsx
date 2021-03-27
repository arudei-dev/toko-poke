/** @jsxImportSource @emotion/react */
import { cssAppFrame } from "./AppFrame.style"

interface AppFrameProps {
  children?: React.ReactNode,
}

export const AppFrame: React.FC<AppFrameProps> = ({
  children
}) => {
  return (
    <div css={cssAppFrame()}>
      { children }
    </div>
  )
}
