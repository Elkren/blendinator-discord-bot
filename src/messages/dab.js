const setupDab = (msg) => {
  if (msg.content === "!dab") {
    msg.channel.send("ヽ( •_•)ᕗ");
  }
};

module.exports = {
  setupDab,
};
