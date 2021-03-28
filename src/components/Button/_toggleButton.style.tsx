/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { 
  DefaultThemeColors, 
  DefaultThemeProperties, 
  ThemeStyle 
} from 'components/theme'
import {
  ButtonBaseProps, 
  cssButtonBase,
  cssButtonBaseNormal,
  cssButtonBaseHover,
  cssButtonBaseActive,
  cssButtonBaseDisabled,
} from './_base.style'

export type ToggleButtonBaseProps = ButtonBaseProps & {
  oneWayToggle: boolean,
}


const cssToggleButtonNormal = (props: ToggleButtonBaseProps) => css`
  ${cssButtonBaseNormal(props)}

  border-radius: 8px;
`

const cssToggleButtonHover = (props: ToggleButtonBaseProps) => css`
  ${cssButtonBaseHover(props)}
`

const cssToggleButtonActive = (props: ToggleButtonBaseProps) => css`
  ${cssButtonBaseActive(props)}
`

// const cssToggleButtonDisabled = (props: ToggleButtonBaseProps) => css`
//   ${cssButtonBaseDisabled(props)}
// `


export const cssToggleButtonBase = (props: ToggleButtonBaseProps) => css`
  width: fit-content;
  height: fit-content;

  ${props.stretchWidth && css`width: 100%;`}
  ${props.stretchHeight && css`height: 100%;`}

  .switch {
    width: fit-content;
    height: fit-content;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;

    position: absolute;
    
  }


  .contentCover {
    width: max-content;
    height: max-content;
    cursor: pointer;

    border-radius: 8px;

    padding: 4px;

    ${cssToggleButtonNormal(props)}

    .contentInner {
      padding: 8px 12px;
      border-radius: 4px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      ${cssToggleButtonHover(props)}
    }

    &:active {
      .contentInner {
        ${cssToggleButtonActive(props)}
      }
    }
  }

  input:checked + .contentCover {
    ${cssToggleButtonNormal(props)}

    .contentInner {
      ${cssToggleButtonActive(props)}
    }

    ${!props.oneWayToggle && css`

      &:hover {
        ${cssToggleButtonHover(props)}
      }
      
      &:active {
        .contentInner {
          box-shadow: none;
        }
      }
    `}
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3; 
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

`