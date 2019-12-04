exports.tord = async (bot, msg, Discord, red, green, blue, config, command, args, gameTord) => {
    let confirmEmbed = new Discord.RichEmbed()
        .setColor(blue)
        .setTitle("Play Truth Or Dare?")
        .setDescription("*Are you sure you would like to start a game of Truth Or Dare? Type: `confirm` to confirm, or: `quit` to quit.*");
    msg.channel.send(confirmEmbed);

    const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, {
        time: 10000
    });
    let host = msg.author.id;

    collector.on('collect', msg => {
        if (msg.content === "confirm") {
            let confirmedEmbed = new Discord.RichEmbed()
                .setColor(green)
                .setTitle("Truth Or Dare!")
                .setDescription("*A game of Truth Or Dare is now starting by " + (msg.author.username) + "! Type: `" + (config.prefix) + "join` to join the game!*");
            msg.channel.send(confirmedEmbed);

            const fs = require('fs');

            if (!fs.existsSync('./truthordare')) {
                fs.mkdirSync('./truthordare'),
                    function (err) {
                        if (err) {
                            return console.log(err)
                            .then(bot.channels.get(logCH).send(err));
                        }
                    };
            };
            gameTord = {
                Channel: (msg.channel.id),
                Host: (host),
                Players: {

                }
            }
            fs.writeFile("./game/tord.json", JSON.stringify(gameTord), (err) => {
                if (err) {
                    console.log(err);
                    bot.channels.get(logCH).send(err);
                }
            });
            const runGame = require('./games/runtord');
            runGame.runTord(msg, Discord, args, green, red, blue, gameTord, config);
        }

        if (msg.content === "quit") {
            let gameQuitEmbed = new Discord.RichEmbed()
                .setColor(red)
                .setTitle("Quit Truth Or Dare.")
                .setDescription("*You have successfully quit `Truth Or Dare`!*");
            msg.channel.send(gameQuitEmbed);
        }
    })
}