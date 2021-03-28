/** @jsxImportSource @emotion/react */
import { cssAppFrame } from "./AppFrame.style"
import { AppModalView } from "./AppModal"


interface AppFrameProps {
  children?: React.ReactNode,
}

export const AppFrame: React.FC<AppFrameProps> = ({
  children
}) => {
  return (
    <div css={cssAppFrame()}>
      <div className="app-main content">
        { children }
      </div>
      <div className="app-main modals">
        <AppModalView/>
      </div>
    </div>
  )
}
