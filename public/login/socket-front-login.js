import { setCookies } from "../utils/cookies.js";


const socket = io();

function emitAuthenticateUser (data) {
  socket.emit('authenticate_user', data);
}

socket.on('successful_authentication', (tokenJwt) => {
  setCookies('tokenJwt', tokenJwt);

  alert('User successfully authenticated');
  window.location.href = "/";
});
socket.on('failed_authentication', () => alert('Failed to authenticate user'));
socket.on('user_not_found', () => alert('User not registered'));

export { emitAuthenticateUser } 