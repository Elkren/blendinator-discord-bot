const setupBongo = (msg) => {
  if (msg.content.toLowerCase().includes("bong")) {
    msg.react(msg.guild.emojis.cache.get("760261288714043412"));
  }
};

module.exports = {
  setupBongo,
};
