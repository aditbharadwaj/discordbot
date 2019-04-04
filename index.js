require('dotenv').config()
const botconfig = require("./botconfig.json");
const Discord = require('discord.js');

var anti_spam = require("discord-anti-spam");
const bot = new Discord.Client({disableEveryone : true});
const fs = require("fs");
const api= "http://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json";
const snekfetch = require("snekfetch");
const welcome = require('./commands/welcome.js');
const clear = require('./commands/clear.js');
bot.commands =new Discord.Collection();
bot.aliases = new Discord.Collection();
const prefix = botconfig.prefix;
//const price = require('./events/riven');


fs.readdir("./cmds/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter( f => f.split(".").pop() === "js")
  if (jsfile.length <= 0){
    console.log("coundnt find command");
    return;

  }

  jsfile.forEach((f,i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    
  });
 
});

bot.on("ready", async() => {
  bot.user.setActivity("type (!help help) to get all the working commands")
})

bot.on("message", async message =>{
  if(message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray= message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
   
  if(!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);
});
bot.on("message", (message) => {
	welcome(message);

});
bot.on("message", (message) => {
	clear(message);

});
/*bot.on("ready", ()=> {
console.log(bot.commands);
});*/



bot.on('ready', () => {
  // Module Configuration Constructor
  anti_spam(bot, {
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
 

bot.login(process.env.BOT_TOKEN)




/*bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})
bot.on('guildMemberAdd', member => {
    member.send(`Welcome on the server! Please be aware that we won’t tolerate troll, spam or harassment. Have fun 😀`)
  })
bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})
bot.on('message', message => {
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


