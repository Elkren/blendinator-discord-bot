const setupRestoreMessages = async (
  msg,
  deletedMessages,
  clearDeletedMessages
) => {
  if (msg.content === "`restore") {
    if (deletedMessages.length > 0) {
      deletedMessages.forEach(({ embed }) => {
        msg.channel.send({ embed });
      });
      clearDeletedMessages();
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
