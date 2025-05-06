import index from '..'

describe('Test all APIs:', () => {
  describe('Test default API:', () => {
    it('Should return "Hello!"', () => {
      const received = index()
      const expected = 'Hello!'
      expect(received).toBe(expected)
    })
  })
})
