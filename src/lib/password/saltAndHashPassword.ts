import CryptoJS from 'crypto-js';

export const saltAndHashPassword = (password: string): string => {
  const salt = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
  const iterations = 10000;
  const keySize = 512/32;
  const hashedPassword = CryptoJS.PBKDF2(password, salt, {
    keySize: keySize,
    iterations: iterations
  }).toString(CryptoJS.enc.Hex);
  
  return salt + ':' + iterations + ':' + hashedPassword;
};