

function capitalize1stLetterOfEachWord(s: string): string {
  const words = s.split(" ");

  return words.map(word => 
    word[0].toUpperCase() + word.substring(1)  
  ).join(" ");
}

function truncateWithEllipsis(s: string, maxLength: number, wordBound = true): string {
  if (s.length <= maxLength)
    return s

  const substring = s.substr(0, maxLength + 1)

  return (wordBound
    ? substring.substr(0, substring.lastIndexOf(" "))
    : substring) + "..."
}

export {
  capitalize1stLetterOfEachWord,
  truncateWithEllipsis
}