const express = require("express");
const app = express();
const { client } = require("@repo/db/client");
import { Request, Response } from 'express';
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json({
    message: "User created successfully",
    id: user.id,
  });
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
