import { parseUrlQuery } from './url-helper'


test(`parseUrlQuery`, () => {
  expect(parseUrlQuery("?page=1")).toStrictEqual({
    "page": "1"
  })
  expect(parseUrlQuery("?page=1&some-property=a")).toStrictEqual({
    "page": "1",
    "some-property": "a"
  })
})