const blue = 3447003

exports.help = function (bot, msg, args, config) {
    msg.reply({
        embed: {
            color: blue,
            title: "Commands",
            description: "All the commands available to you in this bot!",
            fields: [
                {
                    name: "- " + (`${config.prefix}`) + "botinfo",
                    value: "`View information of the bot!`"
                },
                {
                    name: "- " + (`${config.prefix}`) + "help",
                    value: "`Display this help message!`"
                },
                {
                    name: "- " + (`${config.prefix}`) + "report",
                    value: "`Report a user for breaking the rules!`"
                },
                {
                    name: "- " + (config.prefix) + "ship",
                    value: "`Ship yourself with another user!`"
                },
                {
                    name: "- " + (config.prefix) + "level",
                    value: "`Check your Level and XP info`"
                },
                {
                    name: "- " + (config.prefix) + "president",
                    value: "`Sends a random president`"
                },
                {
                    name: "- " + (config.prefix) + "cat",
                    value: "`Sends a random picture of a cat`"
                },
                {
                    name: "- " + (config.prefix) + "dog",
                    value: "`Sends a random picture of a dog`"
                },
                {
                    name: "- " + (config.prefix) + "survival",
                    value: "`View Survival Server information`"
                }
            ],
            footer: {
                icon_url: (bot.user.avatarURL),
                text: "More commands coming soon!"
            }
        }
    });
}