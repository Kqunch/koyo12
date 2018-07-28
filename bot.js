const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var msg = message.content.toLowerCase();
    if (msg === 'k!chilis') {
      message.reply('https://www.chilis.com/menu');
    } else if (msg === 'k!blend s') {
      message.reply('https://https://www.watchcartoononline.io/anime/blend-s-english-subbed');
    } else if (msg === 'k!re:zero') {
      message.reply('https://www.watchcartoononline.io/anime/re-zero-kara-hajimeru-isekai-seikatsu-english-subbed');
    } else if (msg === 'k!help') {
      message.reply('This is an anime bot! Please use the command starting with k! then put your favorite anime name. WATCH ANIME ONLINE!');
    } else if (msg === 'k!list') {
      message.reply('assassination classroom, blend s, re:zero, sao');
    } else if (msg === 'k!sao') {
      message.reply('https://www.watchcartoononline.io/anime/sword-art-online');
    }
});

client.login(process.env.BOT_TOKEN);
