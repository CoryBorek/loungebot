exports.dmmsg = async (bot, msg, date, time, timeLogs, orange, Discord) => {
    var fs = require('fs');

    const dir = ('./logs/dms/' + (`${msg.author.id}`) + '/' + (date))

    bot.users.get("377989938680954902").send({
        embed: {
            color: orange,
            author: {
                name: (msg.author.username),
                icon_url: (msg.author.avatarURL)
            },
            title: "Direct Message",
            description: "DM from " + (msg.author) + " to BOT",
            fields: [{
                    name: "Message content:",
                    value: "`" + (msg.content) + "`"
                },
                {
                    name: "Date & Time:",
                    value: (date) + " @ " + (time)
                }
            ]
        }
    });

    bot.users.get("371825847440769024").send({
        embed: {
            color: orange,
            author: {
                name: (msg.author.username),
                icon_url: (msg.author.avatarURL)
            },
            title: "Direct Message",
            description: "DM from " + (msg.author) + " to BOT",
            fields: [{
                    name: "Message content:",
                    value: "`" + (msg.content) + "`"
                },
                {
                    name: "Date & Time:",
                    value: (date) + " @ " + (time)
                }
            ]
        }
    });

    if (!fs.existsSync('./logs/dms/' + (msg.author.id))) {
        fs.mkdirSync('./logs/dms/' + (msg.author.id));
    };
    if (!fs.existsSync('./logs/dms/' + (msg.author.id) + '/' + (date))) {
        fs.mkdirSync('./logs/dms/' + (msg.author.id) + '/' + (date));
    };
    fs.readdir(dir, function (err, files) {
        var totalFiles = files.length;

        if (!fs.existsSync('./logs/dms/' + (msg.author.id) + '/' + (date) + '/' + (timeLogs) + '.txt')) {
            fs.writeFile('./logs/dms/' + (msg.author.id) + '/' + (date) + '/' + (timeLogs) + '.txt', 'Message from ' + (`${msg.author}`) + '(' + (msg.author.username) + ') has been DMed to the bot.\n\nMessage Content:\n' + (msg.content) + '\n\nDate & Time:\n' + (date) + ' @ ' + (time), function (err) {
                if (err) {
                    return console.log(err);
                };
            });
        } else {
            fs.writeFile('./logs/dms/' + (msg.author.id) + '/' + (date) + '/' + (timeLogs) + ' (' + ((totalFiles) + 1) + ')' + '.txt', 'Message from ' + (`${msg.author}`) + '(' + (msg.author.username) + ') has been DMed to the bot.\n\nMessage Content:\n' + (msg.content) + '\n\nDate & Time:\n' + (date) + ' @ ' + (time), function (err) {
                if (err) {
                    return console.log(err);
                };
            });
        }
    });

    console.log("DM CHANNEL-- " + (msg.author.username) + "> " + (msg.content))
}