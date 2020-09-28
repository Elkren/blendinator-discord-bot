const { client } = require("./client.js");
const { setupGifMessage } = require("./gif.js");
const { setupPum } = require("./pum.js");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  setupGifMessage(msg);
  setupPum(msg);
});

client.login("NzYwMTc3MTU5Mzg5ODM5Mzgx.X3IQJg.KkEBnKL5MhJAUJPTiQ5FKN_TgJ4");
