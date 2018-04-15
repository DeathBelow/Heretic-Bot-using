const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
	
	//B>tempmyte @user 1s/m/h/d
	
	let tomute = message.mentions.members.first() || message.guild.members.get(args[0]));
	if(!tomute) return message.reply("Couldn't find user.");
	if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("can't mute them!");
	let muterole = message.guild.role.find(`name`, "muted");
//The beginning of creating a role
	if(!muterole){
		try{
			muterole = await message.guild.createRole({
				name: "muted",
				color: "#000000",
				permissions: []
			})
			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(muterole, {
					SEND_MESSAGES: false,
				ADD_REACTIONS: false
				});
			});
			
		}catch(e){
			console.log(e.stack);
		}
//End of creating the role
let mutetime = args[1];
if(!mutetime) return message.reply("You didn't specify a time!");

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

setTimeout(function(){
tomyte.removeRole(muterole.id);
message.channel.send(`<@${tomute.id> has been unmuted!`)
	}, ms(mutetime));

		
}
module.exports.help = {
	name: "tempmute"
}

