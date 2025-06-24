// Run with: node server.js
// Requires: npm install express cors body-parser
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory user inventories (in a real app use DB)
const userInventories = {};

// GET inventory by playerId
app.get("/inventory/:playerId", (req, res) => {
  const { playerId } = req.params;
  if (!userInventories[playerId]) {
    return res.status(404).json({ error: "Player not found" });
  }
  res.json({ inventory: userInventories[playerId] });
});

// POST update inventory (called by client when they add new character locally)
app.post("/inventory/:playerId", (req, res) => {
  const { playerId } = req.params;
  const { inventory } = req.body;
  if (!Array.isArray(inventory)) {
    return res.status(400).json({ error: "Invalid inventory format" });
  }
  userInventories[playerId] = inventory;
  res.json({ success: true });
});

// POST trade
app.post("/trade", (req, res) => {
  const { fromPlayerId, toPlayerId, give, receive } = req.body;

  if (!fromPlayerId || !toPlayerId || !give || !receive) {
    return res.status(400).json({ success: false, message: "Missing trade data" });
  }

  // Check inventories exist
  if (!userInventories[fromPlayerId] || !userInventories[toPlayerId]) {
    return res.status(400).json({ success: false, message: "Player inventories not found" });
  }

  // Check if fromPlayer has the character to give
  const fromInv = userInventories[fromPlayerId];
  const toInv = userInventories[toPlayerId];

  const fromHasGive = fromInv.some(c => c.name === give.name);
  const toHasReceive = toInv.some(c => c.name === receive.name);

  if (!fromHasGive) {
    return res.status(400).json({ success: false, message: "You don't own the character you want to give." });
  }
  if (!toHasReceive) {
    return res.status(400).json({ success: false, message: "Other player doesn't have the character you want to receive." });
  }

  // Perform trade: swap characters
  // Remove give from fromPlayer and add receive
  userInventories[fromPlayerId] = fromInv.filter(c => c.name !== give.name);
  if (!userInventories[fromPlayerId].some(c => c.name === receive.name)) {
    userInventories[fromPlayerId].push(receive);
  }

  // Remove receive from toPlayer and add give
  userInventories[toPlayerId] = toInv.filter(c => c.name !== receive.name);
  if (!userInventories[toPlayerId].some(c => c.name === give.name)) {
    userInventories[toPlayerId].push(give);
  }

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Lost RNG backend server running on http://localhost:${PORT}`);
});
