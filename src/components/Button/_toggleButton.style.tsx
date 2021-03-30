/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { 
  DefaultThemeColors, 
} from 'components/theme'
import {
  ButtonBaseProps, 
  cssButtonBaseNormal,
  cssButtonBaseHover,
  cssButtonBaseActive,
} from './_base.style'

export type ToggledStyle = 'raised-sunken' | 'raised' | 'sunken'

export type ToggleButtonBaseProps = ButtonBaseProps & {
  oneWayToggle: boolean,
  toggledStyle: ToggledStyle
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

    box-shadow: 0;
    transition: box-shadow 150ms;

    ${props.toggledStyle !== 'raised' && cssToggleButtonNormal(props)}

    .contentInner {
      padding: 8px 12px;
      border-radius: 4px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};
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
      ${props.toggledStyle !== 'raised' && cssToggleButtonActive(props)}
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

    ${props.oneWayToggle && props.toggledStyle === 'raised' && css`

      &:active {
        .contentInner {
          box-shadow: none;
        }
      }
    `}
  }

`