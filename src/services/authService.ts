"use server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { createCerdential, getCerdential } from "./models/cerdential";
type Authentication = {
  username: string;
  password: string;
};
const PASSWORD_LENGTH = 8;
export async function authenticate({ username, password }: Authentication) {
  const cerdential = await getCerdential(username);
  if (cerdential) {
    let correctPassword = await verifyPassword(password, cerdential.password);
    if (correctPassword) {
      const { password, ...withoutPassowrd } = cerdential;
      return withoutPassowrd;
    }
  }
  return null;
}
export type SignUpI = { userId: number; username: string; password: string };
export async function signup({ userId, username, password }: SignUpI) {
  const hasedPassowrd = await hashPassword(password);
  await createCerdential({ email: username, password: hasedPassowrd }, userId);
}

function generatePassword() {
  return crypto
    .randomBytes(length)
    .toString("base64")
    .slice(0, PASSWORD_LENGTH);
}

// Function to hash the password
async function hashPassword(plainPassword: string) {
  const saltRounds = 10; // Salt rounds determine the complexity of the hashing
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

async function verifyPassword(plainPassword: string, hashedPassword: string) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}
