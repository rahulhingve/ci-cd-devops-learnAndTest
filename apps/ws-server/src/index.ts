import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";
const server = new WebSocketServer({ port: 3023 });

server.on("connection", async (socket) => {
  console.log("Client connected");
  const res = await client.user.create({
    data: {
      username: Math.random().toString(36).substring(2, 15),
      password: Math.random().toString(36).substring(2, 15),
    },
  });

  console.log(res);

  socket.send(" connected and user created successfully");
});
