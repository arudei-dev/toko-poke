
function parseUrlQuery(s: string, parse_all: boolean = true): { [key: string]: string; } {
  if (!s) return ({})

  let queries = parse_all ? s.substring(1) : s

  return JSON.parse(
    '{"' + 
    queries.replace(/&/g, '","')
    .replace(/=/g, '":"')
    + '"}',
    (key, value) => (
      key === "" 
      ? value
      : decodeURIComponent(value)
    )
  )
}

export {
  parseUrlQuery
}