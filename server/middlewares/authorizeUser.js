import jwt from "jsonwebtoken";

function authorizeUser(socket, next) {
  const tokenJwt = socket.handshake.auth.token;

  try {
    const payloadToken = jwt.verify(tokenJwt, process.env.SECRET_WORD);

    socket.emit('authorization_good', payloadToken);  

    next();
  }catch(error) {
    next(error);
  }
}

export default authorizeUser;