const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require("./Botconfig.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
let xp = require("./xp.json");
bot.commands = new Discord.Collection();

client.on('ready', () => {
    console.log('Alive.');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
fs.readdir("./commands", (err, files) => {
	
		if(err) console.log(err);
		
		let jsfile = files.filter(f => f.split(".").pop() == "js")
		if(jsfile.length <= 0){
			console.log("Couldn't find commands.");
			return;
		}
		
	jsfile.forEach((f, i) => {
	let props = require(`./commands/${f}`);
	console.log(`${f} loaded.`); 
	bot.commands.set(props.help.name, props);
	});
});
bot.on("ready", async () => {
	console.log('${bot.user.username} is online.);
	
	bot.user.setActivity("Rule breakers", {type: "WATCHING")
	//bot.user.setGame("Bullying");
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	
	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if(commandfile) commandfile.run(bot,message,args);
    
    if(cmd === `${prefix}serverinfo`){
		let sicon = message.guild.iconURL;
		let serverembed = new Discord.RichEmbed()
		.setDescription("Server Information")
		.setColor("#15f153")
		.setThumbnail(sicon)
		.addField("Server Name", message.guild.name)
		.addField("created On", message.guild.createdAt)
		.addField("You joined", message.member.joinedAt)
		.addField("Total members"), message.guild.memberCount);
		
		return message.channel.send(serverembed);
	}
	
	
	if (cmd === `${prefix}hello`){
		return message.channel.send("Hi!");
	
	if(cmd === `${prefix}botinfo`){
		
		let bicon = bot.user.displayAvatarURL;
			let botembed = new Discord.RichEmbed()
			.setDescription("Bot Info")
			.setColor("#15f153")
			.setThumbnail(bicon)
			.addField("Bot name", bot.user.userbane)
			.addField("Created On", bot.user.createdAt);
			
			return message.channel.send(botembed);

});

let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

bot.login(botconfig.token);

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
