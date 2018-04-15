const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('${bot.user.username} is alive.');
    bot.user.setGame("Bullying");
});

client.on('message', message => {
    if (message.content === 'B>Ping') {
    	message.reply('Pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
