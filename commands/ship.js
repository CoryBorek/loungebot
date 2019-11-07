exports.ship = async (bot, msg, args, purple, Canvas, Discord, red, config) => {

    var error = new Discord.RichEmbed()
            .setTitle("Error:")
            .setDescription("Invalid arguments. Please use the format: `" + (config.prefix) + "ship @user`")
            .setColor(red);

    var fs = require('fs');

    if (!args[0]) {
        msg.channel.send(error);
    } else {
        const shipUser = msg.mentions.users.first();

        if (!shipUser) {
            msg.channel.send(error);
        } else {
            var shipName = (msg.author.username).charAt(0) + (msg.author.username).charAt(1) + (msg.author.username).charAt(2) + (shipUser.username).slice((msg.author.username.length) - 2);

            const canvas = Canvas.createCanvas(700, 250);
            const ctx = canvas.getContext('2d');

            const heart = await Canvas.loadImage('./assets/shipHeart.png');

            ctx.drawImage(heart, 0, 0, 706, 250);

            // Begin drawing
            ctx.beginPath();
            // Draw circle
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            // Move to another position
            ctx.moveTo(500, 125);
            // Draw another circle
            ctx.arc(500, 125, 100, 0, Math.PI * 2, true);
            // Finish Drawing
            ctx.closePath();
            // Clip drawing();
            ctx.clip();

            const avatar1 = await Canvas.loadImage(msg.author.avatarURL);

            ctx.drawImage(avatar1, 25, 25, 200, 200);

            //ctx.strokeStyle = '#74037b';
            //ctx.strokeRect(0, 0, canvas.width, canvas.height);

            const shipAvatar = await Canvas.loadImage(msg.mentions.users.first().avatarURL);

            ctx.drawImage(shipAvatar, 400, 25, 200, 200);

            ctx.drawImage(heart, 0, 0, 706, 250);

            var authorLength = msg.author.username.length;
            var shipUserLength = shipUser.username.length;

            if (authorLength >= shipUserLength) {
                var shipName2 = (msg.author.username).charAt(0) + (msg.author.username).charAt(1) + (msg.author.username).charAt(2) + (shipUser.username).slice((shipUser.username.length) - 2);

                if (!fs.existsSync('./ships/' + (shipName2))) {
                    fs.mkdirSync('./ships/' + (shipName2));
                };

                fs.readdir('./ships/' + (shipName2), function (err, files) {
                    var totalFiles = (files.length) + 1;

                    const attachment = new Discord.Attachment(canvas.toBuffer(), 'ship-' + (shipName2) + "-UwU.png");

                    msg.channel.send({
                        embed: {
                            color: purple,
                            title: "Shipping UwU",
                            description: "Shipname: **" + (shipName2) + "**",
                            image: {
                                url: ('attachment://UwU.png')
                            },
                        }
                    });
                    msg.channel.send(attachment)
                });
            }

            if ((msg.author.username.length) < (shipUser.username.length)) {
                const attachment = new Discord.Attachment(canvas.toBuffer(), 'ship-' + (shipName) + "-UwU.png");

                if (!fs.existsSync('./ships/' + (shipName))) {
                    fs.mkdirSync('./ships/' + (shipName));
                };

                fs.readdir('./ships/' + (shipName), function (err, files) {

                    msg.channel.send({
                        embed: {
                            color: purple,
                            title: "Shipping UwU",
                            description: "Shipname: **" + (shipName) + "**",
                            image: {
                                url: ('attachment://UwU.png')
                            },
                        }
                    });
                    msg.channel.send(attachment)
                });
            }
        }
    }
}