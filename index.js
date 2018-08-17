const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDc4NDMxNjgyODIzODQ3OTM5.DleiNw.j93gZOExim5Lk_iuQHCCcaeFRG8");