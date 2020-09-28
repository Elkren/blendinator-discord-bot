const setupBongo = (msg) => {
  if (msg.content.toLowerCase().includes("bong")) {
    msg.react(msg.guild.emojis.cache.get("678058088686813184"));
  }
};

module.exports = {
  setupBongo,
};
