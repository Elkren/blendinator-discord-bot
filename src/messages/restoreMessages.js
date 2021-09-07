const { selfDestructMessage } = require("../helpers.js");

const setupRestoreMessages = async (
  msg,
  deletedMessages,
  filterDeletedMessages
) => {
  if (msg.content === "`restore") {
    if (deletedMessages.some((e) => e.channelId === msg.channel.id)) {
      deletedMessages.forEach((message) => {
        if (message.channelId === msg.channel.id) {
          msg.channel.send({ embed: message.embed });
        }
      });
      filterDeletedMessages(msg.channel.id);
    } else {
      selfDestructMessage("No recently deleted messages", msg);
    }
  }
};

module.exports = {
  setupRestoreMessages,
};
