const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var msg = message.content.toLowerCase();
    if (msg === 'k!onepiece') {
      message.reply('https://www.animegg.org/series/one-piece);
    } else if (msg === 'k!blend s') {
      message.reply('https://www.animegg.org/series/blend-s);
    } else if (msg === 'k!re:zero') {
      message.reply('https://www.animegg.org/series/rezero-kara-hajimeru-isekai-seikatsu);
    } else if (msg === 'k!help') {
      message.reply('Use k! and type in your favorite anime! Watch online!');
    } else if (msg === 'k!recommend') {
      message.reply('blend s, SAO, One Piece, Re:Zero, etc. ');
    } else if (msg === 'k!conan') {
      message.reply('https://www.animegg.org/series/detectiveconan);
    } else if (msg === 'k!naruto') {
      message.reply('https://www.animegg.org/series/naruto');
    } else if (msg === 'k!foodwars') {
      message.reply('https://www.animegg.org/series/shokugeki-no-souma);
    } else if (msg === 'k!dragonballz') {
      message.reply('https://www.animegg.org/series/dragonball-z');
    } else if (msg === 'k!pokemon') {
      message.reply('https://www.animegg.org/search?search=pokemon');
    
    }
});

client.login(process.env.BOT_TOKEN);
