const setupHelpCommand = (msg) => {
  if (msg.content === "`help") {
    msg.channel.send("I'm a bot, baka");
  }
};

module.exports = {
  setupHelpCommand,
};
