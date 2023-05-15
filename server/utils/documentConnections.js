const documentConnections = [];

function addConnection(connection) {
  documentConnections.push(connection);
}

function getUsersInDocument(documentName) {
  return documentConnections
    .filter((connection) => connection.documentName === documentName)
    .map((connection) => connection.nameUser);
}

export { addConnection, getUsersInDocument };