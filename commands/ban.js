const blue = 3447003
const red = 15158332

var fs = require('fs');

exports.ban = async (bot, msg, user, logCH, reason, timeLogs, config) => {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

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
            msg.mentions.members.first().send({
                embed: {
                    color: red,
                    title: (msg.guild.name),
                    description: "You have been banned for: `" + (reason) + "`"
                }
            }).catch(function (err) {
                if (err != "DiscordAPIError: cannot send message to this user")
                    console.log(err);
            });
            msg.mentions.members.first().ban(reason).then(() => {
                msg.channel.send({
                    embed: {
                        color: blue,
                        author: {
                            name: msg.author.username,
                            icon_url: msg.author.avatarURL
                        },
                        description: "User, " + (user) + " has been banned from the server by " + (msg.author),
                        fields: [{
                            name: "Reason:",
                            value: "\"`" + (reason) + "`\""
                        }]
                    }
                });
                bot.channels.get(logCH).send({
                    embed: {
                        color: red,
                        author: {
                            name: msg.author.username,
                            icon_url: msg.author.avatarURL
                        },
                        title: "Ban",
                        description: "User, " + (user) + " has been banned from the server by " + (msg.author),
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
                if (!fs.existsSync('./logs/bans/' + (user.id))) {
                    fs.mkdirSync('./logs/bans/' + (user.id));
                };
                if (!fs.existsSync('./logs/bans/' + (user.id) + '/' + (date))) {
                    fs.mkdirSync('./logs/bans/' + (user.id) + '/' + (date));
                };
                fs.writeFile('./logs/bans/' + (user.id) + '/' + (date) + '/' + (timeLogs) + '.txt', (user) + '(' + (user.username) + ')' + '\n\nDate & Time:\n' + (date) + ' @ ' + (time) + '\n\nBanned by:\n' + (msg.author) + '(' + (msg.author.username) + ')' + '\n\nReason:\n' + (reason), function (err) {
                    if (err) {
                        return console.log(err);
                    };
                });
            }).catch(err => {
                msg.reply('`Error: Unable to ban that user`');
                console.log(err);
            });
        } else {
            msg.reply({
                embed: {
                    color: red,
                    author: {
                        name: (msg.author.username),
                        icon_url: (msg.author.avatarURL)
                    },
                    title: "Error:",
                    description: "`Invalid arguments. Please use the format" + (config.prefix) + "\"ban @user <reason>\"`"
                }
            });
        }
    }
}