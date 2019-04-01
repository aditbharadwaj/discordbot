require('dotenv').config()
const Discord = require('discord.js');
var anti_spam = require("discord-anti-spam");
const client = new Discord.Client()
const fs = require('fs')


fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, arg => eventHandler(client, arg))
  })
})
client.on('message', msg => {
  if (msg.content === 'owner') {
    msg.reply( ' Adit bharadwaj is the owner of this bot ')
  }
})
client.on('message', msg => {
  if (msg.content === 'who is blueknight') {
    msg.reply( 'blueknight humara neta hai sabka mu me leta hai')
  }
})
client.on('message', msg => {
  if (msg.content === 'gandalf' ) {
    msg.reply( ' All you have to decide is what to do with the time that is given to you.')
  }
})
client.on('message', msg => {
  if (msg.content === 'newkid') {
    msg.reply( ' ohh a new kid in town welcome welcome enjoy ur stay and follow rules :D  ')
  }
})
//message.author.id === '200659103318540288'
client.on('message', function(message) {
    if (message.content == "!clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

client.on('ready', () => {
  // Module Configuration Constructor
  anti_spam(client, {
    warnBuffer: 6, //Maximum amount of messages allowed to send in the interval time before getting warned. 
    maxBuffer: 10, // Maximum amount of messages allowed to send in the interval time before getting banned. 
    interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned. 
    warningMessage: "stop spamming or I'll whack your head off.", // Warning message send to the user indicating they are going to fast. 
    banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it. 
    maxDuplicatesWarning :  7, // Maximum amount of duplicate messages a user can send in a timespan before getting warned 
    maxDuplicatesBan : 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned 
    deleteMessagesAfterBanForPastDays: 7, // Deletes the message history of the banned user in x days.
    exemptRoles: ["STAFF", "TRIAL STAFF", "ANGEL"], // Name of roles (case sensitive) that are exempt from spam filter.
    //exemptUsers: ["MrAugu#9016"] // The Discord tags of the users (e.g: MrAugu#9016) (case sensitive) that are exempt from spam filter.
      });
      
  // Rest of your code
});
 
client.on('message', msg => {
  client.emit('checkMessage', msg); // This runs the filter on any message bot receives in any guilds.
  
  // Rest of your code
});
client.login(process.env.BOT_TOKEN)




/*client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('guildMemberAdd', member => {
    member.send(`Welcome on the server! Please be aware that we won’t tolerate troll, spam or harassment. Have fun 😀`)
  })
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})
client.on('message', message => {
    if (message.content.startsWith('!kick')) {
      const member = message.mentions.members.first()
      
      if (!member) {
        return message.reply(`Who are you trying to kick? You must mention a user.`)
      }
  
      if (!member.kickable) {
        return message.reply(`I can't kick this user. Sorry!`)
      }
  
      return member
        .kick()
        .then(() => message.reply(`${member.user.tag} was kicked.`))
        .catch(error => message.reply(`Sorry, an error occured.`))
    }
  })*/


