import { PrismaClient } from "@prisma/client";
import CryptoJS from 'crypto-js';

const prisma = new PrismaClient();

export const getUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.password) {
    return null;
  }

  const [salt, iterations, storedHash] = user.password.split(':');
  const keySize = 512/32;
  const hashedPassword = CryptoJS.PBKDF2(password, salt, {
    keySize: keySize,
    iterations: parseInt(iterations)
  }).toString(CryptoJS.enc.Hex);

  if (hashedPassword !== storedHash) {
    return null;
  }

  return user;
};