import "dotenv/config";
import registerEventsDocument from "./registerEvents/eventsDocument.js";
import registerEventsIndex from "./registerEvents/eventsIndex.js";
import registerEventsLogin from "./registerEvents/eventsLogin.js";
import registerEventsRegister from "./registerEvents/eventsRegister.js";
import authorizeUser from "./middlewares/authorizeUser.js";
import io from "./server.js";

const nspUsers = io.of('/users');

nspUsers.use(authorizeUser);

nspUsers.on('connection', (socket) => {
  registerEventsIndex(socket,io);
  registerEventsDocument(socket, io);

});

io.of("/").on("connection", (socket) => {
  registerEventsRegister(socket, io);
  registerEventsLogin(socket, io);
});


