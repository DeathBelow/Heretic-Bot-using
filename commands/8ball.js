const Discord = require("discord.js");

modle.exports.run = asnc (bot, message, args) => {
//B>8ball <Question Am I ok?>
if(1args[2]) return message.reply ("please ask a full question!");
let replies = ["Yes.", "No.", "I don't know.", "Weak question", "Try again"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#FF9900")
.addField("Question", question)
.addField("Asnwer", replies[result]);

message.channel.send(ballembed);


}

module.exports.help = {
	name: "8ball"
}
