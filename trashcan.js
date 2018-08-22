const Discord = require('discord.js');
const Messages = require('./command.js')
const client = new Discord.Client();

const config = require("./config.json");
const prefix = config.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Playing with Degenerates");
});

client.on('messageDelete', msg => {
  var channel = msg.guild.channels.find(ch => ch.name === 'bot-dungeon');
  if(!channel){
  	channel = msg.guild.channels.find(ch => ch.name === 'cancer-bots');
  }
  channel.send(msg.content + " by " + msg.author.username);
});

client.on('message', async msg =>{
	Messages.ManageMessage(msg, prefix);
});

client.login(config.token);