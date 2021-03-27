// /** @jsxImportSource @emotion/react */
import React from 'react';
import { ThemeStyle } from 'components/theme';
import { ButtonBaseProps } from './_base.style'


export type BaseButtonProps = Partial<ButtonBaseProps> & {
  onClick?: (e: React.MouseEvent) => void
}

