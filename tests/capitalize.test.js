import capitalize from '../src/capitalize';

describe('Capitalize', () => {
  it('Capitalizes the first letter of strings successfully', () => {
    const result = capitalize('hello');

    expect(result).toEqual('Hello');
  });

  it('Returns an empty string when provided with one', () => {
    expect(capitalize('')).toEqual('');
  });
});
