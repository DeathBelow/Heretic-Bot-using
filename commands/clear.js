const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//B>clear 15 + this
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
	if(!args[0]) return message.channel.send("No.");
	message.channel.bulkDelete(args[0]).then(() => {
		message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
	});
}




Module.exports.help = {
	name: "Clear"
}
