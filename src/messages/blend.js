const setupBlend = async (msg, client) => {
  if (!msg.content.startsWith("`blend")) return;

  console.log(msg.content);

  if (!msg.content.includes("<@!")) {
    msg.channel.send("You need to @ someone to Blend, baka");
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

  const guild = client.guilds.cache.get("696150952025129081");
  const member = guild.member(user);

  const originalChannelId = member.voice.channel.id;

  var channelIds = [
    "729013123360751717",
    "729013283989749841",
    "827661871381086220",
    "807188837146165338",
  ];

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
