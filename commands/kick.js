const blue = 3447003
const red = 15158332


exports.kick = function (msg, user, reason, bot, logCH, date, time, timeLogs, config) {

    var fs = require('fs');

    const dir = ('./logs/kicks/' + (user.id) + '/' + (date))

    //fs.readdir(dir, function (err, files) {
    //    var totalFiles = files.length;
    //})

    if (!msg.member.roles.has(config.staffrole)) {
        msg.channel.send({
            embed: {
                color: red,
                title: "Error:",
                description: "Insufficient permissions!"
            }
        })
    } else {
        if (user) {
            user.kick(reason).then(() => {
                msg.channel.send({
                    embed: {
                        color: blue,
                        author: {
                            name: msg.author.username,
                            icon_url: msg.author.avatarURL
                        },
                        description: "User, " + (user) + " has been kicked from the server by " + (msg.author),
                        fields: [{
                            name: "Reason:",
                            value: "\"`" + (reason) + "`\""
                        }]
                    }
                });

                msg.mentions.members.first().send({
                    embed: {
                        color: red,
                        title: (msg.guild.name),
                        description: "You have been kicked for: `" + (reason) + "`"
                    }
                }).catch(function (err) {
                    if (err != "DiscordAPIError: cannot send message to this user")
                        console.log(err);
                });

                bot.channels.get(logCH).send({
                    embed: {
                        color: red,
                        author: {
                            name: msg.author.username,
                            icon_url: msg.author.avatarURL
                        },
                        title: "Kick",
                        description: "User, " + (user) + " has been kicked from the server by " + (msg.author),
                        fields: [{
                                name: "Reason:",
                                value: "\"`" + (reason) + "`\""
                            },
                            {
                                name: "Date & Time:",
                                value: (date) + " @ " + (time)
                            }
                        ]
                    }
                });
                if (!fs.existsSync('./logs/kicks/' + (user.id))) {
                    fs.mkdirSync('./logs/kicks/' + (user.id));
                };
                if (!fs.existsSync('./logs/kicks/' + (user.id) + '/' + (date))) {
                    fs.mkdirSync('./logs/kicks/' + (user.id) + '/' + (date));
                };
                fs.writeFile('./logs/kicks/' + (user.id) + '/' + (date) + '/' + (timeLogs) + '.txt', (user) + '(' + (user.username) + ')' + '\n\nDate & Time:\n' + (date) + ' @ ' + (time) + '\n\nKicked by:\n' + (msg.author) + '(' + (msg.author.username) + ')' + '\n\nReason:\n' + (reason), function (err) {
                    if (err) {
                        return console.log(err);
                    };
                });
                msg.delete();
            }).catch(err => {
                msg.reply('`Error: Unable to kick user`');
                console.log(err);
            });
        } else {
            msg.reply('`Error: Invalid Arguments. You have not specified who you would like to kick, or the user is not in the server`');
        }
    }
};