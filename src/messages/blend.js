const setupBlend = async (msg, client) => {
  let blending = false;
  if (blending) {
    msg.channel.send("Chill out satan");
    return;
  }

  blending = true;
  if (msg.content.includes("`blend")) {
    var user = await client.users.fetch(
      msg.content.split("!").pop().split(">")[0]
    );

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
          blending = false;
        }
      }, 100);
    });
  }
};

module.exports = {
  setupBlend,
};
