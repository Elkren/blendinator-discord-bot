const setupPog = (msg) => {
  if (msg.content === "`pog") {
    msg.react("🅿");
    msg.react("🅾");
    msg.react("🇬");
  }
};

module.exports = {
  setupPog,
};
