import * as calculator from '../src/calculator';

describe('Calculator', () => {
  it('Adds 2 numbers correctly', () => {
    const a = 1;
    const b = 2;
    const result = calculator.add(a, b);

    expect(result).toEqual(a + b);
  });

  it('Subtracts 2 numbers correctly', () => {
    const a = 4;
    const b = 10;
    const result = calculator.subtract(a, b);

    expect(result).toEqual(a - b);
  });

  it('Multiplies 2 numbers correctly', () => {
    const a = 5;
    const b = 3;
    const result = calculator.multiply(a, b);

    expect(result).toEqual(a * b);
  });

  it('Divides 2 numbers correctly', () => {
    const a = 6;
    const b = 2;
    const result = calculator.divide(a, b);

    expect(result).toEqual(a / b);
  });
});
