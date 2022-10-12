const expect = require('chai').expect;

function isOddOrEven(string) {
  if (typeof (string) !== 'string') {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

describe('is odd or even tests', () => {
  it('should be undefined if number', () => {
    expect(isOddOrEven(2)).to.be.undefined;
  });

  it('should be undefined if array', () => {
    expect(isOddOrEven([])).to.be.undefined;
  });

  it('should be undefined if object', () => {
    expect(isOddOrEven({})).to.be.undefined;
  });

  it('should return odd if string length is odd', () => {
    expect(isOddOrEven('hi!')).to.equal('odd');
  });

  it('should be even if string length is even', () => {
    expect(isOddOrEven('hell')).to.equal('even');
  });
})