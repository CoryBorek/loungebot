exports.survival = function (Discord, msg, blue) {
    const infoEmbed = new Discord.RichEmbed()
        .setColor(blue)
        .setTitle("The Lounge Survival Information")
        .addField("__Server IP:__", "**TheLoungeDisc.aternos.me**", false)
        .addField("__Version:__", "*1.15.1*", false)
        .addField("__Game:__", "*Minecraft Java Edition*", false);
    msg.channel.send(infoEmbed);
}