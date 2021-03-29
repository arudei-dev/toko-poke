/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { useAppState } from 'context/App/hooks'
import { PageBase, ToggleButton } from 'components'
import { useHistory, useLocation } from 'react-router-dom'
import { cssAppShell } from './AppShell.style'



export const AppShell = () => {
  type RegisteredPageTab = 'poke-list' | 'my-list' | null

  const appState = useAppState()
  const themeStyle = appState.useTheme

  const history = useHistory()
  const location = useLocation()

  const [pageTab, setPageTab] = useState<RegisteredPageTab>(null)

  useEffect(() => {
    const paths = location.pathname?.split("/")

    if (paths.length === 2 && paths[1] === "") {
      setPageTab('poke-list')
    }
    else if (paths[1] === 'profile' && paths[2] === 'poke-lists') {
      setPageTab('my-list')
    }
    else {
      setPageTab(null)
    }

    // if (location.pathname)
  }, [location.pathname])

  return (
    <div css={cssAppShell({
        themeStyle: themeStyle
      })}>
        <div className="nav-enclosing">
          <div className="nav-item">
            <ToggleButton
              themeStyle={themeStyle}
              checked={pageTab === 'poke-list'}
              toggledStyle='raised'
              oneWayToggle={true}
              title="Home"
              onClick={() => history.push('/?page=1')}
              />
          </div>
          <div className="nav-item">
            <ToggleButton
              themeStyle={themeStyle}
              checked={pageTab === 'my-list'}
              toggledStyle='raised'
              oneWayToggle={true}
              title="My Pokemon List"
              onClick={() => history.push('/profile/poke-lists')}
              />
          </div>
        </div>
    </div>
  )
}
