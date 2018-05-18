const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'k!life') {
    	message.reply('https://i.gyazo.com/9279aefaf06a54f51befe0af7328e292.gif');
});  
    
client.on('message', message => {
    if (message.content === 'k!anime') {
    	message.reply('https://www.animegg.org/popular-series');
});        
client.on('message', message => {
    if (message.content === 'k!animerecommend') {
    	message.reply('https://www.animegg.org/series/blend-s');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
