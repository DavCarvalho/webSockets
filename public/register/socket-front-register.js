const socket = io();

function emitRegisterUser(data) {
  socket.emit('register_user', data);
}

socket.on('successful_registration', () => alert('User successfully registered'));
socket.on('failed_registration', () => alert('User failed registration'));
socket.on('user_already_registered', () => alert('User already registered'));


export { emitRegisterUser };