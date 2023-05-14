import { findUser } from "../db/usersDb.js";
import authenticateUser from "../utils/authenticateUser.js";
import generateJwt from "../utils/gerarJwt.js";



function registerEventsLogin(socket, io) {
  socket.on('authenticate_user', async ({ username, password}) => {
    const user = await findUser(username);

    if(user) {
      const authenticated = authenticateUser(password, user);
  
      if(authenticated) {
        const token = generateJwt({nameUser: username});

        socket.emit('successful_authentication', token);
      } else {
        socket.emit('failed_authentication');
      }
    } else {
      socket.emit('user_not_found');
    }
  });
}

export default registerEventsLogin;