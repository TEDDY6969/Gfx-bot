const Discord = require("discord.js");
const randoms = require('../../JSON/random.json');
const express = require('express')
const app = express()
const { Canvas, resolveImage } = require('canvas-constructor')
const canvas = require('canvas')
const { registerFont } = require('canvas');
registerFont('./fonts/Montserratbl.ttf', { family: 'Montserrat' });
module.exports = {
  name: "pandalogo", 
  aliases: ["pandal", ""], 
  category: "",
  description: "Create amazing logo having Panda icon",
  usage: "<prefix>pandal <text>",
  run: async (client, message, args) => {

let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];

const text = args.join(" ");
if (!text || text.length > 9) return message.channel.send(`**${message.author.username}** give me text having less than 9 character.
 
${random}`); 


 let pfp = await resolveImage(message.author.displayAvatarURL({
            format: "jpg",
            size: 1024
        }))


 const img = await canvas.loadImage('https://i.ibb.co/pW74dvG/Photo-1627209330195.png');

  let image = new Canvas(540, 540)
    .printImage(img, 0, 0, 540, 540)
    .setColor("#25ace3")
    .setTextFont('48px Vampire Wars')
    .setTextAlign("center")
    .printWrappedText(text, 270, 368)
    .toBuffer();

  return message.channel.send(new Discord.MessageAttachment((await image), "atreya.png"))
   
}
}