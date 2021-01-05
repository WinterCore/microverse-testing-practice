import reverseString from '../src/reverse-string';

describe('reverseString', () => {
  it('Should reverse a string correctly', () => {
    const result = reverseString('abcde');

    expect(result).toEqual('edcba');
  });

  it('Should return an empty string when provided with one', () => {
    expect(reverseString('')).toEqual('');
  });
});
