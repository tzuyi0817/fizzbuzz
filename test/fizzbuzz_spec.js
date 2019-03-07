var should = chai.should()

describe('function FizzBuzz', function () {
  it('若該整數能被 3 整除，回傳 Fizz', function () {
    let result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })
  it('若該整數能被 5 整除，回傳 Buzz', function () {
    let result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('若該整數能被 3 和 5 同時整除，回傳 FizzBuzz', function () {
    let result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('若都不能整除，回傳該整數', function () {
    let result = fizzBuzz(16)
    result.should.be.equal(16)
  })
})