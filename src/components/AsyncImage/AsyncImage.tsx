/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react"
import { cssImg } from './AsyncImage.style'

interface Props {
  src?: string,
  alt?: string,
  children: React.ReactNode,
}

const AsyncImage: React.FC<Props> = ({ src, children, alt, ...props }) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)

  useEffect(() => {
    if (!src) return

    const handleImageLoad = (e: Event) => {
      setLoadedSrc(src)
    }

    const image = new Image()
    image.src = src
    image.addEventListener('load', handleImageLoad)

    return () => {
      image.removeEventListener('load', handleImageLoad)
    }

  }, [src])


  if (src === loadedSrc) return (
    <img css={cssImg} src={src} alt={alt || 'No description available.'} {...props}/>
  )
  else {
    return <>{children}</>
  }
}

export { AsyncImage }
