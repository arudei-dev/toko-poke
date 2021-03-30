/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useHistory } from 'react-router-dom'
import { useAppState } from 'context/App/hooks'
import { PageBase, StandardButton } from 'components'
import SurprisedPika from 'assets/img/surprised-pika.png'
import { DefaultThemeColors } from 'components/theme'


export const PageNotFound = () => {
  
  const history = useHistory()
  const appState = useAppState()
  const themeStyle = appState.useTheme

  const cssPageNotFound = css`
    width: 100%;
    height: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-family: 'Ubuntu';
    color: ${DefaultThemeColors(themeStyle).TEXT_COLOR_PRIMARY};

    .page-hero {
      width: 200px;

      img {
        width: 100%;
      }
    }

    .page-title {
      font-size: 32pt;
      font-weight: 700;

      padding-top: 16px;
      padding-bottom: 16px;
    }

    .page-msg {
      text-align: center;

      padding-bottom: 24px;
    }
  `

  return (
    <PageBase
      themeStyle={themeStyle}>
        <div css={cssPageNotFound}>
          <div className="page-hero">
            <img src={SurprisedPika} alt="Surprised Pikachu"/>
          </div>
          <div className="page-title">
            Uh oh...
          </div>
          <div className="page-msg">
            Looks like you're lost! Let's get back to the ball, shall we?
          </div>
          <div className="page-actions">
            <StandardButton 
              themeStyle={themeStyle}
              title="Go to home"
              onClick={() => history.replace('/')}
              />
          </div>
        </div>
    </PageBase>
  )
}
