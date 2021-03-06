exports.restart = async (bot, Discord, msg, navy, green, red, config) => {
    if (!msg.member.roles.has(config.staffrole)) {
        msg.channel.send({
            embed: {
                color: red,
                title: "Error:",
                description: "Insufficient permissions!"
            }
        })
    } else {
        const confirmation = new Discord.RichEmbed()
            .setColor(navy)
            .setTitle("Confirmation")
            .setDescription("Are you sure you want to restart the bot? (\"Y\" to confirm)");
        msg.channel.send(confirmation);

        const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, {
            time: 10000
        });

        collector.on('collect', msg => {
            const fs = require("fs");

            if ((msg.content) === "Y" || (msg.content) === "y") {
                const restarting = new Discord.RichEmbed()
                    .setColor(navy)
                    .setTitle("Restarting bot")
                    .setDescription("Bot is now restarting... " + bot.emojis.get("644345141183643664"));

                msg.channel.send(restarting);

                const logRestart = new Discord.RichEmbed()
                    .setColor(red)
                    .setAuthor(msg.author.username, msg.author.avatarURL)
                    .setTitle("Bot restarted")
                    .setDescription(msg.author.username + " is restarting the bot.");
                bot.channels.get(config.logsChannel).send(logRestart)
                    .then(bot.destroy())
                    .then(bot.login(config.token));

                bot.on('ready', () => {
                    const success = new Discord.RichEmbed()
                        .setColor(green)
                        .setTitle("Success!")
                        .setDescription("Bot has successfully restarted!");
                    msg.channel.send(success);
                    bot.channels.get(config.logsChannel).send(success);
                });
            }
        });
    }
}