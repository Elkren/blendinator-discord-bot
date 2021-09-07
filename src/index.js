const { Client, MessageEmbed } = require("discord.js");

const { selfDestructMessage } = require("./helpers.js");

const { setupGif } = require("./messages/gif.js");
const { setupDab } = require("./messages/dab.js");
const { setupPog } = require("./messages/pog.js");
const { setupHelp } = require("./messages/help.js");
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
      selfDestructMessage("Cooldown 10 sec", msg);
      return;
    }

    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      talkedRecently.delete(msg.author.id);
    }, 10000);

    setupGif(msg);
    setupPog(msg);
    setupDab(msg);
    setupHelp(msg, client);
    setupBlend(msg, client);
    setupRestoreMessages(msg, deletedMessages, filterDeletedMessages);
  }
});

client.on("messageDelete", (message) => {
  if (message.author.id !== "760177159389839381") {
    const embed = new MessageEmbed()
      .setAuthor(`${message.author.username}`, message.author.avatarURL())
      .setDescription(message.content);

    deletedMessages.push({
      embed: embed,
      channelId: message.channel.id,
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

function filterDeletedMessages(channelId) {
  if (deletedMessages.length > 0) {
    deletedMessages = deletedMessages.filter((x) => x.channelId != channelId);
  }
}

client.login(process.env.BOT_KEY);
