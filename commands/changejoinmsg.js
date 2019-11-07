exports.chjoin = async (msg, config, args, Discord, staffRole, red, green, welcome) => {
    var fs = require('fs');

    if (!msg.member.roles.has(staffRole.id)) {
        msg.channel.send({
            embed: {
                color: red,
                title: "Error:",
                description: "Insufficient permissions!"
            }
        })
    } else {
        switch (args[0]) {
            case 'edit':
                const collector = new Discord.MessageCollector(msg.channel, m => m.author.id === msg.author.id, { time: 10000 });
                const editask = new Discord.RichEmbed()
                    .setColor(green)
                    .setTitle("Edit Join Message")
                    .setDescription("Please enter the new join message.")
                msg.channel.send(editask);

                collector.on('collect', msg => {
                    welcome.msg = {
                        MSG: (msg.content)
                    }

                    fs.writeFile("./welcome.json", JSON.stringify(welcome.msg), (err) => {
                        if (err) {
                            console.log(err);
                        }
                    });

                    const editconfirm = new Discord.RichEmbed()
                        .setColor(green)
                        .setTitle("Success!")
                        .setDescription("Join message changed to: \n\n" + (msg.content))
                    msg.channel.send(editconfirm);
                });
                break;
            case 'view':
                const joinmsgview = new Discord.RichEmbed()
                    .setColor(green)
                    .setTitle("Join Message:")
                    .setDescription(welcome.MSG)
                msg.channel.send(joinmsgview);
                break;
            default:
                const joinmsghelp = new Discord.RichEmbed()
                    .setColor(green)
                    .setTitle("Join Welcome Message!")
                    .setDescription("How to edit and view the welcome message for new users!")
                    .addField("`" + (config.prefix) + "joinmsg edit`", "Edit/Change the welcome message.", false)
                    .addField("`" + (config.prefix) + "joinmsg view`", "View the welcome message. (DOES NOT WORK)`", false)
                msg.channel.send(joinmsghelp);
        }
    }
}