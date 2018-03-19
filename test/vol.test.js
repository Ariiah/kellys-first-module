const { expect } = require('chai')
const { spherev, torusv } = require('./src/vol')

describe ('canary test', function () {
  it('expectes true to be true', function () {
    expect(true).to.eql(true)
  })
})

describe ('vol tests', function () {
  it('calculates sphere vol correctly', function () {
    expect(spherev(1)).to.eql(4.1887902047863905)
  })

  it('calculates torusv correctly', function () {
    expect(4, 3).to.eql(710.611)
  })
})
