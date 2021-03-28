
enum CoinFace {
  Head = 1,
  Tails = 0,
}

function tossACoin(nudgeProbability: number = 0.5): CoinFace {
  return Math.random() < nudgeProbability ? CoinFace.Head : CoinFace.Tails
}

function rollADice(): number {
  const diceFace = [1,2,3,4,5,6]

  const random = Math.floor(Math.random() * diceFace.length);
  return diceFace[random]
}

export {
  tossACoin,
  rollADice,
  CoinFace
}