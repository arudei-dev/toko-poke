import { capitalize1stLetterOfEachWord } from './string-helper'


test(`
  capitalize1stLetterOfEachWord should return the original sentences, 
  with every 1st letter of a word in it (with word are separated by space) 
  capitalized.
`, () => {
  type TestWordObj = {
    input: string,
    expected: string
  }

  const testWords: TestWordObj[] = [
    {
      input: 'hello',
      expected: 'Hello'
    },
    {
      input: 'hello-world',
      expected: 'Hello-world'
    },
    {
      input: 'hello world',
      expected: 'Hello World'
    },
    {
      input: 'hELLO',
      expected: 'HELLO'
    },

  ]

  testWords.forEach((word) => {
    expect(capitalize1stLetterOfEachWord(word.input)).toBe(word.expected)
  })


})