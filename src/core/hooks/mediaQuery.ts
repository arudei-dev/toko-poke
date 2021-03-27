import { useState, useEffect } from 'react';

interface MediaQueryProps {
  queryType: 'min-width' | 'max-width' | 'min-height' | 'max-height' | 'custom',
  queryValue: string
}

export const useMediaQuery = (props: MediaQueryProps) => {
  const query = `(${
    props.queryType === 'custom' 
      ? props.queryValue
      : `${props.queryType}: ${props.queryValue}`
  })`
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const mqListener = () => {
      setMatches(media.matches)
    }

    media.addEventListener("change", mqListener)

    return () => {
      media.removeEventListener("change", mqListener)
    }
  }, [query, matches])

  return matches
}