const fetch = require("node-fetch");
const { MessageAttachment } = require("discord.js");

const setupGifMessage = (msg) => {
  if (msg.content.startsWith("!gif ")) {
    var id = Math.round(Math.random() * Math.floor(25));
    var query = msg.content.replace("!gif ", "");
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${query}&limit=1&offset=${id}&rating=pg-13&lang=en`
    )
      .then((response) => response.json())
      .then((body) => {
        console.log(body.data[0].images);
        msg.channel.send(
          new MessageAttachment(body.data[0].images.original.url)
        );
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          msg.channel.send("Sorry! Couldn't find anything");
        }
      });
  }
};

module.exports = {
  setupGifMessage,
};
