const setupRestoreMessages = async (
  msg,
  deletedMessages,
  filterDeletedMessages
) => {
  if (msg.content === "`restore") {
    console.log(deletedMessages);
    console.log(msg.channel.id);
    if (deletedMessages.some((e) => e.channelId === msg.channel.id)) {
      deletedMessages.forEach(({ embed }) => {
        msg.channel.send({ embed });
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
