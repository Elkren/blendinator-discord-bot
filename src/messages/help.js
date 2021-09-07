const { MessageEmbed } = require("discord.js");

const setupHelp = async (msg, client) => {
  if (msg.content === "`help") {
    const user = await client.users.fetch("760177159389839381");

    const embed = new MessageEmbed()
      .setAuthor(`${user.username}`, user.avatarURL())
      .setDescription("Commands:")
      .addFields(
        { name: "`blend @Username", value: "Put em through the blender" },
        {
          name: "`gif",
          value: "Add a keyword and get a random gif, results may vary",
        },
        {
          name: "`restore",
          value:
            "Show the deleted messages in a given channel within the last 5 minutes",
        },
        { name: "`dab", value: "ヽ( •_•)ᕗ" },
        { name: "`pog", value: "🅿🅾🇬" }
      )
      .setFooter("All commands have a personal cooldown of 10 seconds");
    msg.channel.send({ embed });
  }
};

module.exports = {
  setupHelp,
};
