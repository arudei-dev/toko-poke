/** @jsxImportSource @emotion/react */
import { cssText, TTextColor } from "./Text.style"
import { ThemeStyle } from "./theme"

interface Props {
  text?: string,
  textColor?: TTextColor,
  themeStyle?: ThemeStyle,
}

const Text: React.FC<Props> = ({
  text,
  textColor,
  themeStyle,
}) => {
  return (
    <div css={cssText({
      textColor: textColor ?? 'primary',
      themeStyle: themeStyle ?? 'light',
    })}>
      { text }
    </div>
  )
}


export {
  Text
}