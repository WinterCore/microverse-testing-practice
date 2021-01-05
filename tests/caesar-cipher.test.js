import caesarCipher from '../src/caesar-cipher';

describe('caesarCipher', () => {
  it('Should encrypt text correctly', () => {
    const result = caesarCipher('abcde', 5);

    expect(result).toEqual('fghij');
  });

  it('Should wrap from z to a', () => {
    const result = caesarCipher('xyz', 5);

    expect(result).toEqual('cde');
  });

  it('Should keep the same case when encrypting', () => {
    const result = caesarCipher('AbC', 5);

    expect(result).toEqual('FgH');
  });

  it('Should only encrypt english letters', () => {
    const result = caesarCipher('abc.,/?#4', 5);

    expect(result).toEqual('fgh.,/?#4');
  });
});
