const { Client, MessageEmbed } = require("discord.js");

const { setupGifMessage } = require("./messages/gif.js");
const { setupDab } = require("./messages/dab.js");
const { setupPog } = require("./messages/pog.js");
const { setupHelpCommand } = require("./messages/commands.js");
const { setupBlend } = require("./messages/blend.js");
const { setupRestoreMessages } = require("./messages/restoreMessages.js");

const client = new Client();
const talkedRecently = new Set();
let deletedMessages = [];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (msg.content.startsWith("`")) {
    if (talkedRecently.has(msg.author.id)) {
      const cooldownMessage = await msg.channel.send("Cooldown 10 sec");
      const messageToDelete = await msg.channel.messages.fetch(
        cooldownMessage.id
      );
      setTimeout(() => {
        messageToDelete.delete();
      }, 10000);
      return;
    }

    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 10000);

    setupGifMessage(msg);
    setupPog(msg);
    setupDab(msg);
    setupHelpCommand(msg);
    setupBlend(msg, client);
    setupRestoreMessages(msg, deletedMessages, clearDeletedMessages);
  }
});

function clearDeletedMessages() {
  deletedMessages = [];
}

client.on("messageDelete", (message) => {
  if (message.author.id !== "760177159389839381") {
    const embed = new MessageEmbed()
      .setAuthor(`${message.author.username}`, message.author.avatarURL())
      .setDescription(message.content);

    deletedMessages.push({
      embed: embed,
      time: Date.now(),
    });
  }
});

setInterval(function () {
  var time = Date.now();
  deletedMessages = deletedMessages.filter((message) => {
    return time < message.time + 5000 * 60;
  });
}, 500);

client.login(process.env.BOT_KEY);
