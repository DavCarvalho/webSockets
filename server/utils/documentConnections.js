const documentConnections = [];

function addConnection(connection) {
  documentConnections.push(connection);
}

function getUsersInDocument(documentName) {
  return documentConnections
    .filter((connection) => connection.documentName === documentName)
    .map((connection) => connection.nameUser);
}

function removeConnection(documentName, nameUser) {
  const index = documentConnections.findIndex(connection => {
    connection.documentName === documentName && connection.nameUser === nameUser
  });

  if(index !== -1) {
    documentConnections.splice(index, 1);
  }
}

function findConnection(documentName, nameUser) {
  return documentConnections.find(connection => {
    return (
      connection.documentName === documentName && connection.nameUser === nameUser
    );
  });
}

export { addConnection, getUsersInDocument, removeConnection, findConnection };