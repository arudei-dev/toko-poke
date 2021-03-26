/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ThemeStyle } from './theme'

export type TInfoChipSize = 'small' | 'medium' | 'large'

export type CssInfoChipProps = {
  size: TInfoChipSize,
  themeStyle: ThemeStyle,
}

export const cssInfoChip = (props: CssInfoChipProps) => css`
  color: white;
  padding: 8px 12px;
  margin: 4px;

  background-color: ${
    props.themeStyle === 'light'
    ? css`#00000010`
    : css`#ffffff10`
  };
  border-radius: 999px;
  /* vertical-align: middle; */
  text-transform: capitalize;

  display: flex;
  justify-content: center;
  
  font-family: 'Geomanist';
  font-weight: 600;
  font-size: 12pt;
`