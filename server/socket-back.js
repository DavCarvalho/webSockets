import registerEventsDocument from "./registerEvents/eventsDocument.js";
import registerEventsIndex from "./registerEvents/eventsIndex.js";
import registerEventsRegister from "./registerEvents/eventsRegister.js";
import io from "./server.js";

io.on("connection", (socket) => {
  registerEventsIndex(socket,io);
  registerEventsDocument(socket, io);
  registerEventsRegister(socket, io);
});


