import { randomBytes, scryptSync } from "crypto";

function createHashAndSalt(password) {
  const salt = randomBytes(16).toString('hex');

  const hashPassword = scryptSync(password, salt, 64).toString('hex');

  return { salt, hashPassword };
}

export default createHashAndSalt;
