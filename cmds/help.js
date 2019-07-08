const Discord = require("discord.js");
const api= "https://api.myjson.com/bins/rwo9k";
//const api ="https://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    console.log("it works");
      snekfetch.get(api).then(r =>{
        let body =r.body;
        let comp = args[0];
        if (!comp) return message.channel.send("type **!help help** as above argument does not exist");
        //if (isNaN(id)) return message.channel.send("supply a valid number");
 
            let entry = body.find(post => post.name === comp );
            if (!entry) return message.channel.send("type **!help help** as above argument does not exist"); 
        //console.log(entry);
            let embed = new Discord.RichEmbed()
            .setAuthor("Home Made Multipurpose Bot")
            .addField("!price :" , entry.rivenprice)
            .addField("!veild :" , entry.vieldprice)
            .setFooter("made by Adit bharadwaj follow me on github:- https://github.com/aditbharadwaj");
            
            
            message.channel.send({embed : embed});
        });
    
}

module.exports.help ={
    name: "help"
}