const task3 = require('../task3')

describe('task 3 solver', () => {
  
  it('should return "" if n is not divisible by 2 or 3', () => {
    expect(task3.solve(1)).toEqual("")
    expect(task3.solve(7)).toEqual("")
    expect(task3.solve(11)).toEqual("")
  })
    it('should return "fizz" if n is not divisible by 2 but not 3', () => {
      expect(task3.solve(2)).toEqual("fizz")
      expect(task3.solve(4)).toEqual("fizz")
      expect(task3.solve(8)).toEqual("fizz")

  })
    it('should return "buzz" if n is not divisible by 3 but not 2', () => {
      expect(task3.solve(3)).toEqual("buzz")
      expect(task3.solve(9)).toEqual("buzz")
      expect(task3.solve(15)).toEqual("buzz")
})
    it('should return "fizzbuzz" if n is divisible by 2 and 3', () => {
      expect(task3.solve(2*3)).toEqual("fizzbuzz")
      expect(task3.solve(12)).toEqual("fizzbuzz")
      expect(task3.solve(2*3*7)).toEqual("fizzbuzz")

    })

})