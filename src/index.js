const { Client } = require("discord.js");

const { setupGifMessage } = require("./messages/gif.js");
const { setupPum } = require("./messages/pum.js");
const { setupDab } = require("./messages/dab.js");
const { setupBongo } = require("./messages/bongo.js");
const { setupHelpCommand } = require("./messages/commands.js");
const { setupRero } = require("./messages/rero.js");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  setupRero(msg);
  setupGifMessage(msg);
  setupBongo(msg);
  setupDab(msg);
  setupHelpCommand(msg);
  setupPum(msg);
});

client.login(process.env.BOT_KEY);
