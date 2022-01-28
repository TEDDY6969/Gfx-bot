const { default_prefix } = require("./config.json")
const express = require("express");
const fetch = require ('node-fetch')
const app = express();


app.get("/", (req, res) => {
  res.send('Hello There , This is Giveaway Bot and now its online Thanks (BunnySupport)')
});

function pong() { 

  
console.log('Bunny is God')
} 

setInterval(pong, 60000);

// listen for requests | Don't change this!
const listener = app.listen(3000, () => {
  console.log("Listening on PORT " + listener.address().port);
});
 const DisTube = require("distube")
 const Canvas = require ("canvas");
const { DiscordTogether } = require('discord-together');
const { config } = require("dotenv");
const db =require("quick.db");
const moment = require("moment");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const snekfetch = require("snekfetch")
const translate = require('google-translate-api');

let cooldown = new Set();
let cdseconds = 3;
const Discord = require('discord.js')

const discord = require('discord.js')///this is ok bruh
const disbut = require('discord-buttons')
const client = new Discord.Client()
disbut(client)
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { Client, MessageEmbed }  = require('discord.js');





client.queue = new Map();
client.vote = new Map();
const ready  = require("./handlers/ready.js")

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.queue = new Map()
process.on('unhandledRejection', console.error);

  const { addexp } = require("./handlers/xp.js");
client.on("ready", async () => {
  console.log(`ready!`);
  client.user.setStatus("idle");
  client.user
    .setActivity(`GFX BoT • ELoBHİ creation 🌸`, {
      type: "LISTENING"
    })
    console.log("Dumb bot is dumbbb")
});

client.on("message", async message => {
    
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;

  if(cooldown.has(message.author.id)){

    return message.channel.send(`**${message.author.username}** wait \`3\` seconds to use this command!`)
  }
  cooldown.add(message.author.id);
  setTimeout(() => {
cooldown.delete(message.author.id)}, cdseconds * 1000)

  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
  return addexp(message)
});

 






const fs = require('fs')

 
console.log("Wait for a while..")

    
client.login(process.env.TOKEN);
