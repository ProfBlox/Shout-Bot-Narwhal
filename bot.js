// DEPENDANCIES
let Discord = require('discord.js');
let roblox = require('roblox-js');
let bot = new Discord.Client();

// LOGIN INFO
let username = "ShoutBotNarwhal"; // ROBLOX
let password = "rossross"; // ROBLOX

// MISC
let prefix = "!" // Prefix used for the command
let GroupId = 3944945;

// COMMAND

bot.on("message", async message => { // Event runs when there is a new message
if(message.author.bot) return; // Here we check if the message sender is the bot, if it is, it returns and does not carry any further.
if(message.content.indexOf(prefix) !== 0) return; // Checks if the message has the Prefix

// Here we separate our "command" and our "arguments/args" for the command. 
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

// Checks if the command is matching the provided string

if(command === "shout") {
    if(!message.member.roles.some(r=>["High Ranks"].includes(r.name)) ) // OPTIONAL - Checks if the sender has the specified roles to carry on further
        return message.reply("You can't use this command.");
  roblox.login(username, password)
  .then(function () {
    const shoutMSG = args.join(" "); // Joins the arguments minus prefix to form the message to be shouted
        roblox.shout(GroupId, shoutMSG);
        console.log(`Shouted ${shoutMSG}`); // OPTIONAL - Logs specified string to the console
        message.channel.send(`Shouted ${shoutMSG} to the group!`) // OPTIONAL - Sends a message to the channel
  })
.catch(function (err) { // Catches any errors with the function
    console.error(err.stack);
    });
  }
})

bot.login(process.env.token) // Logs into Discord
