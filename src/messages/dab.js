const setupDab = (msg) => {
  if (msg.content.startsWith("!gif ")) {
    msg.channel.send("ヽ( •_•)ᕗ");
  }
};

module.exports = {
  setupDab,
};
