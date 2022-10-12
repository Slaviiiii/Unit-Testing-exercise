const { expect } = require('chai');

function lookupChar(string, index) {
  if (typeof (string) !== 'string' || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe('charLookup tests', () => {
  it('check if first parameter type is valid', () => {
    expect(lookupChar(0, 0)).to.equal(undefined);
  });

  it('check weather second parameter type is valid', () => {
    expect(lookupChar('hello', 'test')).to.equal(undefined);
  });

  it('check weather second parameter is valid integer', () => {
    expect(lookupChar('hello', 0.1)).to.equal(undefined);
  });

  it('check value with index bigger than string length', () => {
    expect(lookupChar('hello', 10)).to.equal('Incorrect index');
  });

  it('check value with neggative index', () => {
    expect(lookupChar('hi', -5)).to.equal('Incorrect index');
  });

  it('check value with valid params', () => {
    expect(lookupChar('hello', 3)).to.equal('l');
  });
});