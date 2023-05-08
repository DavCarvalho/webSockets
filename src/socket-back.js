import io from "./server.js";

const documents = [
  {
    name: 'JavaScript',
    text:'texto de javascript...'
  },
  {
    nome: 'Node',
    text:'texto de node...'
  },
  {
    nome: 'Socket.IO',
    text:'texto de socket.io...'
  }
]

io.on("connection", (socket) => {

  socket.on('select_document', (documentName, returnText) => {
    socket.join(documentName); //take the client that is connected to this socket and put it in a room with the name of the document.

    const document = findDocument(documentName);

    if(document){
      returnText(document.text);
    }

  });
  
  socket.on('text_editor', (text, documentName) => {
    const document = findDocument(documentName);

    if(document) {
      document.text = text;
      socket.to(documentName).emit('text_editor_clients', text);
    }
  });

  // socket.on('disconnect', (reason) => {
  //   console.log(`Client "${socket.id}" disconnected!
  //   Reason: ${reason}`);
  // });

});

function findDocument(name){
  const document = documents.find((document) => {
    return document.name === name;
  });

  return document;
}
