module.exports = {
	ManageMessage : async function(message, prefix){
		const config = require("./config.json");
		if(message.author.bot) return;

	 	if(message.content.indexOf(prefix) !== 0) return;

	 	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	 	const command = args.shift().toLowerCase();

	 	if(command == "prune"){	 
	 		var messages = message.channel.fetchMessages()
	 			.then(messages => console.log(`${messages.filter(m => m.author.id === args[0]).size} messages`))
  					.catch(console.error);
  			console.log(messages);
		}

		if(command == "flip"){
			
		}

		if(command == "shitpost"){
			channel = message.channel;
			channel.send(config.shitpost);
		}
	}
	//https://discordjs.guide/#/command-handling/
}