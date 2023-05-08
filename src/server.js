import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

import "./dbConnect.js";

const app = express();
const port = process.env.port || 3000;

const actuallyPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(actuallyPath, "../..", "public");
app.use(express.static(publicDirectory));

const httpServer = http.createServer(app);

httpServer.listen(port, () =>
  console.log(`listing on ${port}`)
);

const io = new Server(httpServer);

export default io;
