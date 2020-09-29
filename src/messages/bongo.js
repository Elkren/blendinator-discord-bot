const setupBongo = (msg) => {
  if (msg.content.toLowerCase().includes("bong")) {
    msg.react(msg.guild.emojis.cache.get("678058088686813184"));
  }

  if (msg.content.includes("anand")) {
    msg.channel.send("💩");
  }

  if (msg.content.includes("pog")) {
    msg.react("🅿");
    msg.react("🅾");
    msg.react("🇬");
  }
};

module.exports = {
  setupBongo,
};
