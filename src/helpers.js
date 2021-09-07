async function selfDestructMessage(content, msg) {
  const botMessage = await msg.channel.send(content);
  const botMessageToDelete = await msg.channel.messages.fetch(botMessage.id);
  setTimeout(() => {
    botMessageToDelete.delete();
  }, 10000);
}

module.exports = {
  selfDestructMessage,
};
