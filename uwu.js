const Discord = require("discord.js")
const { nsfw } = require('akaneko')
const chancejs = require("chance");
const dbl = require("dbl.js");
const catFacts = require('cat-facts');
const dogFacts = require('dog-facts');
const hastebin = require('hastebin-gen');
const translate = require('google-translate-api');
const chance = new chancejs();
const bot = new Discord.Client()
const superagent = require("superagent")
const moment = require('moment');
require('moment-duration-format');
var config = require("./config.json")
const prefix = config.prefix

let dblclient = new dbl.Client({
    dbltoken: "",
    id: ""
});

bot.on("ready", () => {
    bot.login(config.token);
    console.log('----------------------------------------------------------')
    console.log('[UwU] Connected to Discord via the token successfully.')
    console.log('[UwU] Username: ' + bot.user.username)
    console.log('[UwU] Running on Discord API version ' + Discord.version)
    bot.user.setActivity(`uwu.help.`);
})

// Help Embed
const embed = new Discord.MessageEmbed() // Ver 12.2.0 of Discord.js
.setTitle("Commands | Other")
.setDescription("uwu.help [Shows this message.]\nuwu.uptime [Shows how long the bot has been up.]\nuwu.changelog [Shows the changelog]\nuwu.credits [Shows who created/developed the bot.]\nuwu.cat-facts [Shows a cat fact.]\nuwu.dog-facts [Shows Dog Facts]\nuwu.rules [Shows The Server Rules]")
.setTimestamp()
.setColor('#ed33c9')
// Credits Embed
const embed2 = new Discord.MessageEmbed()
.setTitle("Bot Credits")
.setDescription("Bot Developer <@728315874804498507>\n2nd Bot Developer <@451489821890969632>")
.setColor('#ff8a00')
// Cat Facts Embed
const embed3 = new Discord.MessageEmbed()
.setTitle('Cat Fact:')
.setDescription(catFacts.random())
const embed4 = new Discord.MessageEmbed()
.setTitle('Dog Fact:')
.setDescription(dogFacts.random())
const embed5 = new Discord.MessageEmbed()
.setTitle('Rules:')
.setDescription('**__If people violate these, please dont hesitate to report to staff!__**\n**1.** No disrespecting other members or staff.\n**2.** No sensitive imagery.\n**3.** No self promoting\n**4.** No doxing.')
const embed6 = new Discord.MessageEmbed()
.setTitle('Changelog:')
.setDescription('Added uwu.changelog command.')
.setFooter('8/11/2020 Changelog')
// // // // // // // // // // // // // // // / / // // / //
bot.on("message", msg => {
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefix.length)
    let args = msg.content.split(" ").slice(1)
    if (cmd === "uptime") {
        msg.channel.send("The uptime is **" + moment.duration(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]') + "**")
    }
    if (cmd === "rules") {
        msg.channel.send(embed5)
    }
    if (cmd === "help") {
        msg.channel.send(embed)
    }
    if (cmd === "credits") {
        msg.channel.send(embed2)
    }
    if (cmd === "cat-facts") {
        msg.channel.send(embed3)
    }
    if (cmd === "dog-facts") {
        msg.channel.send(embed4)
    }
    if (cmd === "cum") {
        msg.channel.send("Daddy chill....")
    }
    if (cmd === "changelog") {
        msg.channel.send(embed6)
    }
    if (cmd === "hentai") {
        console.log('Hentai Sent!'); // false
      
        if (msg.channel.nsfw === false) {
          return msg.reply(":warning: This channel isn't marked as NSFW.");
        }

        if (msg.channel.nsfw === true) {
            const hentai = new Discord.MessageEmbed()
            .setImage(nsfw.hentai())
            return msg.reply(hentai)
            
        }
      }
})
bot.login(config.token);