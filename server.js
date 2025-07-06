// 📁 server.js
const express = require("express");
const { exec } = require("child_process");
const app = express();
app.use(express.json());

app.post("/run", (req, res) => {
  const command = req.body.command;
  if (!command) return res.status(400).send("Command missing");

  exec(command, (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    res.send(stdout || "No output");
  });
});

app.listen(10000, () => console.log("Terminal API ready on port 10000"));
