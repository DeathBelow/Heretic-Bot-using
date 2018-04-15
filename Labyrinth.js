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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
