const CHAR_CODES = {
  a: 'a'.charCodeAt(0),
  z: 'z'.charCodeAt(0),
  A: 'A'.charCodeAt(0),
  Z: 'Z'.charCodeAt(0),
};

const shiftLetter = (char, shift) => {
  const charCode = char.charCodeAt(0);

  if (charCode >= CHAR_CODES.a && charCode <= CHAR_CODES.z) {
    return String.fromCharCode((((charCode - CHAR_CODES.a) + shift) % 26) + CHAR_CODES.a);
  }

  if (charCode >= CHAR_CODES.A && charCode <= CHAR_CODES.Z) {
    return String.fromCharCode((((charCode - CHAR_CODES.A) + shift) % 26) + CHAR_CODES.A);
  }

  return char;
};

const caesarCipher = (str, shift) => str.split('').map(x => shiftLetter(x, shift)).join('');

export default caesarCipher;
