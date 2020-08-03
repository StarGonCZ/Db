const fs = require('fs');
const Discord = require('discord.js');
const prefix = 'beelo ';

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`/commands/${file}`);
    client,commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('The Bees are flying!');
});


client.on('message', message => {
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const longcommand = message.content.slice(prefix.length).toLowerCase();
    

    if(command === 'hi' || command === 'hello'){
        client.commands.get('greeting').execute(message, args);
    }else if(longcommand.includes('time')){
        var bate = new Date().toLocaleTimeString();
        message.channel.send(bate);
    }
});


client.login('NzM4NDAyMDIzNjAyNTIwMTM2.XyLYeQ.8-iohaMyuhYtkDRxj-r3tJMGruc');
