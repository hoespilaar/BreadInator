const Discord = require('discord.js');
const client = new Discord.Client();

const prfx = '!';

const fs = require('fs');
const { endianness } = require('os');
var wordFile = require('./BreadRelatedWords.json');
var config = require('./config.json')

client.on('ready', () =>{
    console.log('Bot online');
})

client.on('message', msg=>{
    
    let messageArgs = msg.content.split(" ");

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
})

client.login(config.token);