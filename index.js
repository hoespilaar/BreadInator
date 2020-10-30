const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
const { endianness } = require('os');

var wordFile = require('./BreadRelatedWords.json');
var config = require('./config.json');

client.on('ready', () =>{
    console.log('Bot online');
})

client.on('message', msg=>{
    
    if (msg.content.substr(0, 2) == wordFile.prefix) {
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