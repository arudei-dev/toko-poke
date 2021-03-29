import { tossACoin, rollADice, CoinFace } from './random-helper'

test('tossACoin returns CoinFace.Head or CoinFace.Tails', () => {
  expect([CoinFace.Head, CoinFace.Tails]).toContain(tossACoin())
})

test('tosACoin returns CoinFace.Head or CoinFace.Tails with a ~1:1 distributions', () => {
  const RUN_FOR_X_TIMES = 1000
  const ACCEPTED_MIN = 450
  const ACCEPTED_MAX = 550

  let gotHeads = 0;
  let gotTails = 0;

  for (let i = 0; i < RUN_FOR_X_TIMES; i++) {
    const coinFace = tossACoin()

    switch (coinFace) {
      case CoinFace.Head:
        gotHeads += 1
        break

      case CoinFace.Tails:
        gotTails += 1
        break
    }
  }

  expect(gotHeads).toBeGreaterThanOrEqual(ACCEPTED_MIN)
  expect(gotHeads).toBeLessThanOrEqual(ACCEPTED_MAX)

  expect(gotTails).toBeGreaterThanOrEqual(ACCEPTED_MIN)
  expect(gotTails).toBeLessThanOrEqual(ACCEPTED_MAX)
})