exports.warn = function (bot, msg, staffRole, red, green, user, config, args, date, time, timeLogs, logCH) {
    var fs = require('fs');
    args.slice(2).join(' ');
    const reason = args.slice(1).join(' ');

    if (!msg.member.roles.has(staffRole.id)) {
        msg.channel.send({
            embed: {
                color: red,
                title: "Error:",
                description: "Insufficient Permissions!"
            }
        })
    } else {
        if ((!user) || (!args[1])) {
            msg.channel.send({
                embed: {
                    color: red,
                    title: "Error:",
                    description: "Invalid arguments! Please use the format: `" + (config.prefix) + "warn @user <reason>`"
                }
            })
        };

        if ((user) && (args[1])) {
            msg.channel.send({
                embed: {
                    color: green,
                    title: "Success!",
                    description: "User, " + (user) + " has been warned.",
                    fields: [{
                        name: "Reason:",
                        value: "`" + (reason) + "`"
                    }],
                    footer: {
                        text: (date) + " @ " + (time)
                    }
                }
            });

            bot.channels.get(logCH).send({
                embed: {
                    author: {
                        name: (msg.author.username),
                        icon_url: (msg.author.avatarURL)
                    },
                    color: red,
                    title: "Warn",
                    description: "User, " + (user) + " has been warned by " + (msg.author) + ".",
                    fields: [{
                            name: "Reason:",
                            value: "`" + (reason) + "`"
                        },
                        {
                            name: "Channel:",
                            value: "`#" + (msg.channel.name) + "`"
                        },
                        {
                            name: "Date & Time:",
                            value: (date) + " @ " + (time)
                        }
                    ]
                }
            });

            if (!fs.existsSync('./logs/warns/' + (user.id))) {
                fs.mkdirSync('./logs/warns/' + (user.id));
            };
            if (!fs.existsSync('./logs/warns/' + (user.id) + '/' + (date))) {
                fs.mkdirSync('./logs/warns/' + (user.id) + '/' + (date));
            };
            fs.writeFile('./logs/warns/' + (user.id) + '/' + (date) + '/' + (timeLogs) + '.txt', (user) + '(' + (user.username) + ')' + '\n\nDate & Time:\n' + (date) + ' @ ' + (time) + '\n\nWarned by:\n' + (msg.author) + '(' + (msg.author.username) + ')' + '\n\nReason:\n' + (reason), function (err) {
                if (err) {
                    return console.log(err);
                };
            });
        }
    }
}