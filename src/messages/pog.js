const setupPog = (msg) => {
  if (msg.content.includes("pog")) {
    msg.react("🅿");
    msg.react("🅾");
    msg.react("🇬");
  }
};

module.exports = {
  setupPog,
};
