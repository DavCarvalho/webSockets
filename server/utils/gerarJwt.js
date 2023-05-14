import jwt from "jsonwebtoken";

function generateJwt(payload) {
  const tokenJwt = jwt.sign(payload, process.env.SECRET_WORD, {
    expiresIn: '1h'
  });

  return tokenJwt
}

export default generateJwt;