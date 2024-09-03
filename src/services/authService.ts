"use server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { getCerdential } from "./models/cerdential";
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

function generatePassword() {
  return crypto
    .randomBytes(length)
    .toString("base64")
    .slice(0, PASSWORD_LENGTH);
}

async function verifyPassword(plainPassword: string, hashedPassword: string) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}
