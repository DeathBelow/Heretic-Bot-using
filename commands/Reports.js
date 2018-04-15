const Discord = require("discord.js");

module.exports.run = async (bot,m essage, args) => {
		let rUser = message.guild.member(message.mention.users.first() || message.guild.members.get(args[0]));
		if(!rUser) return message.channel.send("Counln't find the user.");
		let reason = args.join(" ").slice(22);
		
		let reportEmbed = new Discord.RichEmbed()
		.setDescription("Reports")
		.setColor("#15f153")
		.addField("Reported User", `${rUser} with ID: ${rUser.id}`=
		.addField("Reported by", `${message.author} with ID: ${message.author.id}`)
		.addField("Channel", message.channel)
		.addField("Time", message.createdAt)
		.addField("Reason", reason);
		
		let reportschannel = message.guild.channels.find(`name, "reports"`);
		if(!reportschannel) return message.channel.send("Couldn't find reports channel");
		
		message.delete().catch(O_o=>{});
		reportschannel.send(reportEmbed);
}

module.exports.help = {
	name: "report"
	
}