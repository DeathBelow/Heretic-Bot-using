const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//B>say boio
	//No
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
	let botmessage = args.join(" ");
	message.delete().catch();
	message.channel.send(botmessage);
}




Module.exports.help = {
	name: "say"
}
