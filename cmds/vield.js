const Discord = require("discord.js");
const api= "https://api.myjson.com/bins/myry0";
//const api ="https://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    console.log("it works");
      snekfetch.get(api).then(r =>{
        let body =r.body;
        let comp = args[0];
        if (!comp) return message.channel.send("supply an proper weapon type");
        //if (isNaN(id)) return message.channel.send("supply a valid number");
 
            let entry = body.find(post => post.compatibility === comp );
            if (!entry) return message.channel.send("this weapon type does not exist"); 
        //console.log(entry);
            let embed = new Discord.RichEmbed()
            .setAuthor("Riven prices bot v1.0")
            .addField("Weapon Type" , entry.compatibility)
            .addField("Average Price" , entry.avg)
            .addField("Popularity" , entry.pop)
            .addField("The prices changes weekly By DE, all Data by DE")
            .setFooter("For bot commands type !help help ");
            
            
            message.channel.send({embed : embed});
        });
    
}

module.exports.help ={
    name: "veild"
}