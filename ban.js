Sadly, I am not actually going to show the code to each command but all I will show are little snippets of the code and what they do etc.

const Discord = require('discord.js'); -- This makes sure discord.js is downloaded and used and it requires discord.js downloaded to make it.

const client = new Discord.Client(); -- This creates a new discord client like how it says.

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});  
-- Basic Client connection


client.login('YOUR_TOKEN'); -- This place is where I connect the command to the bot. It is used in every single command mostly but there are other ways to connect the command/script to the bot but this is the one I use.
