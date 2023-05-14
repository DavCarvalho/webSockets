import { findUser, registerUser } from "../db/usersDb.js";


function registerEventsRegister (socket, io) {
    socket.on('register_user', async (data) => {
      const user = await findUser(data.username);

      if(user === null) {
        const result = await registerUser(data);
      
        if(result.acknowledged) {
          socket.emit('successful_registration');
        } else {
          socket.emit('failed_registration');
        }
      } else {
        socket.emit('user_already_registered');
      }
    });
}

export default registerEventsRegister;