const blue = 3447003

exports.help = function (bot, msg, args, config, Discord) {
    switch (args[0]) {
        default:
                const newHelp = new Discord.RichEmbed()
                .setColor(blue)
                .setTitle("Commands Help!")
                .setDescription("All commands you can use with *LoungeBot-2000*!")
                .addField((bot.emojis.get("645043961387417600")) + " **General**", "`" + (config.prefix) + "help general`", true)
                .addField((bot.emojis.get("633118752400998412")) + " **Random**", "`" + (config.prefix) + "help random`", true)
                .addField("🎲 **Games**", "`" + (config.prefix) + "help games`", true)
                .addField((bot.emojis.get("625509288730820611")) + " **Other**", "`" + (config.prefix) + "help other`", true)
                .setFooter("More commands comming soon!", (bot.user.avatarURL));
            msg.channel.send(newHelp);
            break;
        
        case 'general':
            const genHelp = new Discord.RichEmbed()
                .setColor(blue)
                .setTitle("Commands Help!")
                .setDescription("All general commands:")
                .addField("***__help__***", "`Displays the commands help.`", true)
                .addField("***___report___***", "`Check your level and XP info.`", true)
                .addField("***__survival__***", "`Join information of our Lounge Survival Minecraft server!`", true)
                .setFooter("More commands comming soon!", (bot.user.avatarURL));
            msg.channel.send(genHelp);
            break;

        case 'random':
            const randHelp = new Discord.RichEmbed()
                .setColor(blue)
                .setTitle("Commands Help!")
                .setDescription("All random commands:")
                .addField("***__ship__***", "`Put a cute heart between and someone else and combime your name UwU.`", true)
                .addField("***__president__***", "`Get a random U.S. president.`", true)
                .addField("***__dog__***", "`Get a random picture of a dog.`", true)
                .addField("***__cat__***", "`Get a random picture of a cat.`", true)
                .setFooter("More commands comming soon!", (bot.user.avatarURL));
            msg.channel.send(randHelp);
            break;

        case 'games':
            const gameHelp = new Discord.RichEmbed()
                .setColor(blue)
                .setTitle("Commands Help!")
                .setDescription("All games commands:")
                .addField("***__level__***", "`Check yours or someone else's XP info.`", true)
                .addField("***__tord__***", "`Play Truth Or Dare! (Coming Soon)`", true)
                .addField("***__tictactoe__***", "`Play Tic Tac Toe! (Coming Soon)`", true)
                .setFooter("More commands comming soon!", (bot.user.avatarURL));
            msg.channel.send(gameHelp);
            break;

        case 'other':
            const otherHelp = new Discord.RichEmbed()
                .setColor(blue)
                .setTitle("Commands Help!")
                .setDescription("All other commands:")
                .addField("***__botinfo__***", "`Check some info about the bot.`", true)
                .addField("***__updates__***", "`Check out some possible future updates we're looking into/working on!`", true)
                .setFooter("More commands comming soon!", (bot.user.avatarURL));
            msg.channel.send(otherHelp);
            break;
    }
}