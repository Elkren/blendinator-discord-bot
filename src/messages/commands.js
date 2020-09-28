const setupHelpCommand = (msg) => {
  if (msg.content === "!help") {
    msg.channel.send(
      "Hey, I'm Dabman. ヽ( •_•)ᕗ Try the !dab command or !gif 'keyword' command for big memes"
    );
  }
};

module.exports = {
  setupHelpCommand,
};
