// Simple Node.JS mocking server and listens to port 8000 by default. You can make POST requests to the root (/) endpoint and any JSON structure you send to the server will be saved in memory. You can also send GET requests to the same endpoint and receive an array of JSON objects that you have previously POSTed.

const ronin = require("ronin-server");
const mocks = require("ronin-mocks");

const server = ronin.server();

server.use("/", mocks.server(server.Router(), false, true));
server.start();
