import { useState } from 'react'


export const useLocalStorage = <T>(kv: {key: string, initialValue: T}) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(kv.key)

      return item ? JSON.parse(item) : kv.initialValue
    }
    catch (err) {
      console.log(err) // TODO: Temporary impl.
      return kv.initialValue
    }
  })

  const setValue = (value: T | ( (val: T) => T )) => {
    try {
      const pkgValue = (value instanceof Function) ? value(storedValue) : value

      setStoredValue(pkgValue)

      window.localStorage.setItem(kv.key, JSON.stringify(pkgValue))
    }
    catch (err) {
      console.log(err) // TODO: Temporary impl.
    }
  }

  return [storedValue, setValue]
}