const setupPum = (msg) => {
  if (msg.content.toLowerCase().includes("pam")) {
    msg.react(msg.guild.emojis.cache.get("678058876364652574"));
  }
};

module.exports = {
  setupPum,
};
