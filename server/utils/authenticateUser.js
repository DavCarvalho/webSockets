import { scryptSync, timingSafeEqual } from 'crypto';

function authenticateUser(password, user) {
  const hashTest = scryptSync(password, user.salt, 64);

  const hash = Buffer.from(user.hashPassword, 'hex');

  const authenticated = timingSafeEqual(hashTest, hash);

  return authenticated;
}

export default authenticateUser;
