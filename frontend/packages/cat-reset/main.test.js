const { add } = require('./main')

describe('main', () => {
  test('should add', () => {
    expect(add(1,2)).toEqual(3)
  })
})
