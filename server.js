var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODM4MTUzNTA2MjQyMjk3ODg2.YI29SA.k0qu0RwRYFvv00E9OgHf663SQW8",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "WATCHING ENDLESS TRADERS",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "a!",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  }) 
}


