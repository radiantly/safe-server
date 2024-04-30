import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { Server } from "./models.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route to get server name by ID
app.get("/servers/:id", async (req, res) => {
  try {
    const server = await Server.findByPk(req.params.id);
    if (server) {
      res.json(server);
    } else {
      res.status(404).json({ error: "Server not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to list all servers for a given email
app.get("/servers", async (req, res) => {
  try {
    const servers = await Server.findAll({
      where: {
        email: req.query.email,
      },
    });
    res.json(servers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to add a new server
app.post("/servers", async (req, res) => {
  try {
    const { email, details } = req.body;
    const newServer = await Server.create({ email, details });
    res.status(201).json(newServer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
