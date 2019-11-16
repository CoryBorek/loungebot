exports.updates = function (bot, Discord, msg, blue) {
    const listEmbed = new Discord.RichEmbed()
        .setColor(blue)
        .setTitle("Future updates/features")
        .setDescription("List of future coming updates/features!\nNOTE: Just because something is in this list does not mean it will 100% be coming in the future, it means it is being looked into/worked on.\nNOTE: This is not a full list, not everything that is being worked on is listed here.")
        .addField("**Games:**", " -Truth Or Dare\n -Tic Tac Toe")
        .addField("**Other:**", " -Bonus XP from bumping the server with `!d bump` in #bot-commands!\n -Some benefits for leveling up.")
        .setFooter("*Suggest features and addition to the bot in #suggestions*", (bot.user.avatarURL));
    msg.channel.send(listEmbed);
}