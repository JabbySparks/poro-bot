// Jabby's Special bot 10/08/2016 (Started)

const Discord = require('discord.js');
const poro = new Discord.Client();

const prefix = "!";

poro.on('ready', () => {
  console.log("Bot Online and Ready!");
});

poro.on('guildMemberAdd',(guild, member) => {  //When someone new joins
  console.log(`New User "${member.user.username}" has joined "${guild.name}"`); // Prints in console log
  guild.defaultChannel.sendMessage(`Welcome ${member.user.username} to ** ${guild.name}`); //Prints in cht
});

poro.on('message', message => {
  if (!message.content.startsWith(prefix)) return; //Stops Bot from reading something without it's command
  if(message.author.bot) return; //Stops Bot from replying to other bots

  if (message.content.startsWith(prefix + "help")) { //Shows commands
    message.reply("My commands are: !league (calls everyone for league)");
    return;
  }

  else if (message.content.startsWith(prefix + "league")) { //Calls everyone for leauge
    message.reply(message, "@JabbySparks");
  }
});

poro.on("error", e => { console.error(e); }); //Catches Errors
poro.login('token'); //Logs bot in
