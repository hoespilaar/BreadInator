const Discord = require('discord.js');
const client = new Discord.Client();

const prfx = '!';

const fs = require('fs');
var wordFile = require('./BreadRelatedWords.json');
var config = require('./config.json')

client.on('ready', () =>{
    console.log('Bot online');
})

client.on('message', msg=>{
    

    let messageArgs = msg.content.split(" ");

    messageArgs.forEach(element => {
        wordFile.words.forEach(elemnt => {
            if (elemnt == element.toLowerCase()) {
                msg.react('🍞');
            } else if (element == "baguette") {
                msg.react('🥖');
            }
        })
    });
})

client.login(config.token);