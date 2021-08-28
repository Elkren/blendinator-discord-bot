const { Client } = require("discord.js");

const { setupGifMessage } = require("./messages/gif.js");
const { setupDab } = require("./messages/dab.js");
const { setupPog } = require("./messages/pog.js");
const { setupHelpCommand } = require("./messages/commands.js");
const { setupBlend } = require("./messages/blend.js");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  setupGifMessage(msg);
  setupPog(msg);
  setupDab(msg);
  setupHelpCommand(msg);
  setupBlend(msg, client);
});

client.login(process.env.BOT_KEY);
