/** @jsxImportSource @emotion/react */
import { cssInfoChip, TInfoChipSize } from './InfoChip.style'
import { ThemeStyle } from '../theme'
import { Text } from 'components'

interface Props {
  title: string
  size?: TInfoChipSize,
  themeStyle?: ThemeStyle
}

const InfoChip: React.FC<Props> = ({
  title,
  size,
  themeStyle,
}) => {
  return (
    <div css={cssInfoChip({
      size: size ?? 'small',
      themeStyle: themeStyle ?? 'light'
    })}>
      <Text 
        text={title}
        textColor="primary"
        themeStyle={themeStyle}
        />
    </div>
  )
}


export {
  InfoChip
}