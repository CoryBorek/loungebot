const blue = 3447003

exports.botinfo = function (msg, args, version, config) {
    switch (args[0]) {
        case 'version':
            msg.channel.send('Version ' + version);
            break
        case 'ping':
            msg.reply(new Date().getTime() - msg.createdTimestamp + " ms");
            break;

        case 'commands':
            msg.reply({
                embed: {
                    author: {
                        name: msg.author.username,
                        icon_url: msg.author.avatarURL
                    },
                    color: blue,
                    title: "Commands:",
                    description: "All of the info commands.\n",
                    fields: [{
                            name: (config.prefix) + "botinfo version",
                            value: "`View the version of the bot`",
                        },
                        {
                            name: (config.prefix) + "botinfo ping",
                            value: "`Get the bots ping.`",
                        },
                        {
                            name: (config.prefix) + "botinfo commands",
                            value: "`View this list`",
                        },
                    ]
                }
            });
            break;

        default:
            msg.reply({
                embed: {
                    author: {
                        name: msg.author.username,
                        icon_url: msg.author.avatarURL
                    },
                    color: blue,
                    title: "Commands:",
                    description: "All of the info commands.\n",
                    fields: [{
                            name: (config.prefix) + "botinfo version",
                            value: "`View the version of the bot`",
                        },
                        {
                            name: (config.prefix) + "botinfo ping",
                            value: "`Get the bots ping.`",
                        },
                        {
                            name: (config.prefix) + "botinfo commands",
                            value: "`View this list`",
                        }
                    ]
                }
            });
            break
        }
    }