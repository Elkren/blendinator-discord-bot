const setupRero = (msg) => {
  if (
    msg.content.toLowerCase().includes("rero") &&
    !msg.content.toLowerCase().includes("rerosus")
  ) {
    msg.react(msg.guild.emojis.cache.get("760910640125706321"));
  }

  if (
    msg.content.toLowerCase().includes("sus") &&
    !msg.content.toLowerCase().includes("rerosus")
  ) {
    var sus1 = msg.guild.emojis.cache.get("760911482220576830");
    var sus2 = msg.guild.emojis.cache.get("760911500021334087");
    msg.channel.send(`${sus1}${sus2}`);
  }
};

module.exports = {
  setupRero,
};
