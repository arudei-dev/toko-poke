/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface Props {
  children?: React.ReactNode,
  clickable?: boolean,
  onClick?: (e: React.MouseEvent) => void
}

const CardView: React.FC<Props> = ({ children, clickable }) => {
  const CardCss = css`
    width: 100%;
    min-height: 100px;
    padding: 10px;
    border-radius: 15px;
    background: #e0e0e0;
    box-shadow:  6px  6px 11px #bebebe,
                -6px -6px 11px #ffffff;
                
    transition: box-shadow 150ms;

    &:hover {
      box-shadow:  10px  10px 20px #bebebe,
                  -10px -10px 20px #ffffff;
    }
    
    ${clickable && `
      cursor: pointer;

      &:active:not(:focus-within) {
        box-shadow: inset  7px  7px 14px #bebebe,
                    inset -7px -7px 14px #ffffff;
      }
    `}
  `;

  const onCardClick = (e: React.MouseEvent) => {
    console.log(e);
  }

  return (
    <div css={CardCss} onClick={onCardClick}>
      { children }
    </div>
  )
}



export { CardView }
