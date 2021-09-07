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
      const botMessage = await msg.channel.send("No recently deleted messages");
      const botMessageToDelete = await msg.channel.messages.fetch(
        botMessage.id
      );
      setTimeout(() => {
        botMessageToDelete.delete();
      }, 10000);
    }
  }
};

module.exports = {
  setupRestoreMessages,
};
