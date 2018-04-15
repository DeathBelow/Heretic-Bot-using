const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Alive.');
    bot.user.setGame("Bullying");
    
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
