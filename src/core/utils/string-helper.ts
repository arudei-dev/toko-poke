

function capitalizeEachWord(s: string): string {
  const words = s.split(" ");

  return words.map(word => 
    word[0].toUpperCase() + word.substring(1)  
  ).join(" ");
}

export {
  capitalizeEachWord
}