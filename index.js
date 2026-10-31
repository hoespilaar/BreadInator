const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

var wordFile = require('./BreadRelatedWords.json');
var config = require('./config.json');

client.on('clientReady', () =>{
    console.log('Bot online');
})

client.on('messageCreate', msg=>{
    
    if (msg.content.substring(0, 2).toLowerCase() == wordFile.prefix) {
        commands(msg);
    }

    testForKeyWords(msg);
})

function commands (msg) {
    let messageArgs = msg.content.substring(2).split(" ");

    if (messageArgs[0].toLowerCase() == "status"){
        msg.reply("The bot is working.");
    }
}

function testForKeyWords (msg) {

    wordFile.bread.forEach(element => {
        if (msg.content.toLowerCase().includes(element)) {
            msg.react('🍞');
        }
    });

    wordFile.baguette.forEach(element => {
        if (msg.content.toLowerCase().includes(element)) {
            msg.react('🥖');
        }
    });

    wordFile.hamburger.forEach(element => {
        if (msg.content.toLowerCase().includes(element)) {
            msg.react('🍔');
        }
    });

    wordFile.cheese.forEach(element => {
        if (msg.content.toLowerCase().includes(element)) {
            msg.react('🧀');
        }
    });

    wordFile.croissant.forEach(element => {
        if (msg.content.toLowerCase().includes(element)) {
            msg.react('🥐');
        }
    });
}


client.login(config.token);