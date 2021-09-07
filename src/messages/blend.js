const setupBlend = async (msg, client) => {
  if (!msg.content.startsWith("`blend")) return;

  if (!msg.content.includes("<@!")) {
    msg.channel.send("You need to @ someone to Blend");
    return;
  }

  let userId = "";
  if (Math.floor(Math.random() * 100) <= 10) {
    userId = msg.author.id;
    msg.channel.send("No u");
  } else {
    userId = msg.content.split("!").pop().split(">")[0];
  }

  const user = await client.users.fetch(userId);

  const guild = client.guilds.cache.get(process.env.GUILD_ID);
  const member = guild.member(user);

  const originalChannelId = member.voice.channel.id;

  var channelIds = process.env.CHANNEL_IDS.split(",");

  channelIds.forEach((channelId) => {
    setTimeout(() => {
      member.voice.setChannel(channelId);

      if (channelId == channelIds[3]) {
        member.voice.setChannel(originalChannelId);
      }
    }, 100);
  });
};

module.exports = {
  setupBlend,
};
