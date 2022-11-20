import { io } from "socket.io-client";
const SERVER_URL = "http://localhost:1337";
const JWT_TOKEN = "your users JWT token";

// token will be verified, connection will be rejected if not a valid JWT
const socket = io(SERVER_URL, {
  auth: {
    token: JWT_TOKEN
  },
});

//  wait until socket connects before adding event listeners
socket.on("connect", () => {
  socket.on("message:update", (data:any) => {
    console.log(data)
  });
});