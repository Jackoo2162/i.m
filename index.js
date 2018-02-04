const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
  if (message.content === 'gasi dotchin geol almyeonseodo gatgo sipeo red rose') {
   // message.reply('pong');
    message.channel.sendMessage('gasi julgien areumdam jangmiga pineun beop');
  }
});


bot.on('message', message => {
  if (message.content === 'yh') {
   // message.reply('pong');
    message.channel.sendMessage('Jinhan ppalgang kkotmareun neol saranghandan geot');
  }
});

bot.on('message', message => {
  if (message.content === 'ya') {
   // message.reply('pong');
    message.channel.sendMessage('on mome piga nado neol ango sipeo Cuz I think about you errday');
  }
});

bot.on('message', message => {
  if (message.content === 'ya') {
   // message.reply('pong');
    message.channel.sendMessage('imi jungdogin geol malhae mwohae');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"RAPPING WITH JOOHEON BOT"}})
  console.log('I have jackoo: {SERVERNAME}')
})


bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'CHANG-KYUN');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});



bot.login('');
