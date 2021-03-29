/** @jsxImportSource @emotion/react */
import { ThemeStyle } from 'components/theme'
import { CssProgressBarProps, CssProgressBarTypes } from './_base.style'
import { cssLinearProgressBar } from './_linear.style'

interface Props {
  min?: number,
  max?: number,
  value?: number,
  themeStyle?: ThemeStyle,
  size?: CssProgressBarTypes.Size,
  colorStyle?: CssProgressBarTypes.ColorStyle
  color?: CssProgressBarTypes.Color
}

export const ProgressBar: React.FC<Props> = ({
  min, max, value,
  themeStyle, size,
  colorStyle, color,
}) => {
  const sanitizedMin = min ?? 0
  const sanitizedMax = max ?? 100
  const sanitizedValue = value ?? 0

  return (
    <div css={cssLinearProgressBar({
      min: sanitizedMin,
      max: sanitizedMax,
      value: (sanitizedValue > sanitizedMax) 
              ? sanitizedMax 
              : (sanitizedValue < sanitizedMin)
                ? sanitizedMin
                : sanitizedValue,
      size: size ?? 'small',
      themeStyle: themeStyle ?? 'light',
      colorStyle: colorStyle ?? 'batteryStyle',
      color: color ?? 'blank'
    })}>
      <div className="progress-bar"></div>
    </div>
  )
}
