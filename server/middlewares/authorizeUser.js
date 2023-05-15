import jwt from "jsonwebtoken";

function authorizeUser(socket, next) {
  const tokenJwt = socket.handshake.auth.token;

  try {
    jwt.verify(tokenJwt, process.env.SECRET_WORD);

    next();
  }catch(error) {
    next(error);
  }
}

export default authorizeUser;