/** @jsxImportSource @emotion/react */
import { cssAppFrame } from "./AppFrame.style"
import { AppModalView } from "./AppModal"
import { AppShell } from "./AppShell"


interface AppFrameProps {
  children?: React.ReactNode,
}

export const AppFrame: React.FC<AppFrameProps> = ({
  children
}) => {
  return (
    <div css={cssAppFrame()}>
      <div className="app-main content">
        <div className="content-shell">
          <AppShell/>
        </div>
        <div className="content-inner">
          { children }
        </div>
      </div>
      
      <AppModalView/>
    </div>
  )
}
