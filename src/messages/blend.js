const setupBlend = async (msg, client, talkedRecently) => {
  if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(
      "Wait 1 minute before getting typing this again. - " + msg.author
    );
  } else {
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
          }
        }, 100);
      });
    }

    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(msg.author.id);
    }, 60000);
  }
};

module.exports = {
  setupBlend,
};
