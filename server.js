var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODM4MTQzMTc2NTM0NTIzOTI0.YI2zqQ.kr5J4NuWabHnkn_byAtniczwFFU",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "Giveaways at Endless Traders!",
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


