 const Discord = require("discord.js");
const api= "http://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json";
//const api ="https://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    console.log("it works");
   snekfetch.get(api).then(r =>{
        let body =r.body;
        let comp = args[0];
        if (!comp) return message.channel.send("supply an proper weapon name");
        //if (isNaN(id)) return message.channel.send("supply a valid number");

        let entry = body.find(post => post.compatibility === comp);
        if (!entry) return message.channel.send("this weapon does not exist");
        //console.log(entry);

        let embed = new Discord.RichEmbed()
            .setAuthor("Riven prices bot v1.0")
            .addField("Weapon Name" , entry.compatibility)
            .addField("Weapon type: " , entry.itemType)
            .addField("Average price in market rn " , entry.avg)
            .addField("Max price" , entry.max ) 
            .addField("Minimum price" , entry.min )
            .addField("The average variation in the prices that the Riven trades for" ,entry.stddev )
            .addField("Popularity" , entry.pop )
            .setFooter("The prices changes weekly By DE all Data by DE");
            
            message.channel.send({embed : embed});
    });
}

module.exports.help ={
    name: "price"
}