import analyze from '../src/array-analysis';

describe('analyze', () => {
  it('Should analyse the provided array successfully', () => {
    const result = analyze([1, 8, 3, 4, 2, 6]);

    expect(result).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it('Should return null when provided with an empty array', () => {
    expect(analyze([])).toEqual(null);
  });
});
