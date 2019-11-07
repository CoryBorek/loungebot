exports.msgDelete = async (bot, messageDelete, logCH, darkblue, date, time, timeLogs) => {

    var fs = require("fs");

    const dir = ('./logs/deletedmessages/' + (`${messageDelete.author.id}`) + '/' + (date))

    bot.channels.get(logCH).send({
        embed: {
            color: darkblue,
            author: {
                name: (`${messageDelete.author.username}`),
                icon_url: (`${messageDelete.author.avatarURL}`)
            },
            title: "Message Deleted:",
            description: "Message sent by " + (`${messageDelete.author}`) + " has been deleted.",
            fields: [{
                    name: "Message content:",
                    value: (`${messageDelete.content}`)
                },
                {
                    name: "Channel",
                    value: "#" + (`${messageDelete.channel.name}`)
                },
                {
                    name: "Date & Time:",
                    value: (date) + " @ " + (time)
                }
            ]
        }
    });
    if (!fs.existsSync('./logs/deletedmessages/' + (`${messageDelete.author.id}`))) {
        fs.mkdirSync('./logs/deletedmessages/' + (`${messageDelete.author.id}`));
    };
    if (!fs.existsSync('./logs/deletedmessages/' + (`${messageDelete.author.id}`) + '/' + (date))) {
        fs.mkdirSync('./logs/deletedmessages/' + (`${messageDelete.author.id}`) + '/' + (date));
    };
    fs.readdir(dir, function (err, files) {
        var totalFiles = files.length;

        if (!fs.existsSync('./logs/deletedmessages/' + (`${messageDelete.author.id}`) + '/' + (date) + '/' + (timeLogs) + '.txt')) {
            fs.writeFile('./logs/deletedmessages/' + (`${messageDelete.author.id}`) + '/' + (date) + '/' + (timeLogs) + '.txt', 'Message from ' + (`${messageDelete.author}`) + '(' + (`${messageDelete.author.username}`) + ') has been deleted.\n\nMessage Content:\n' + (`${messageDelete.content}`) + '\n\nChannel:\n#' + (`${messageDelete.channel.name}`) + '\n\nDate & Time:\n' + (date) + ' @ ' + (time), function (err) {
                if (err) {
                    return console.log(err);
                };
            });
        } else {
            fs.writeFile('./logs/deletedmessages/' + (`${messageDelete.author.id}`) + '/' + (date) + '/' + (timeLogs) + ' (' + ((totalFiles)+1) + ')' + '.txt', 'Message from ' + (`${messageDelete.author}`) + '(' + (`${messageDelete.author.username}`) + ') has been deleted.\n\nMessage Content:\n' + (`${messageDelete.content}`) + '\n\nChannel:\n#' + (`${messageDelete.channel.name}`) + '\n\nDate & Time:\n' + (date) + ' @ ' + (time), function (err) {
                if (err) {
                    return console.log(err);
                };
            });
        }
    });
}