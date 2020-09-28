const { Client } = require("discord.js");

const { setupGifMessage } = require("./messages/gif.js");
const { setupPum } = require("./messages/pum.js");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  setupGifMessage(msg);
  setupBongo(msg);
  setupDab(msg);
  setupPum(msg);
});

client.login(process.env.BOT_KEY);
