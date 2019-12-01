exports.eightball = async (bot, Discord, msg, args, red, darkred, green, blue) => {
    if (!args[0]) {
        const noArgs = new Discord.RichEmbed()
            .setColor(red)
            .setTitle("Invalid Arguments!")
            .setDescription("`You did not ask a question. Be sure to ask the Magic 8Ball a question!`");
        msg.channel.send(noArgs);
    } else {
        let type = ["goodResponse", "neutralResponse", "badResponse"];
        let goodResponse = ["It is certain.", "It is decidedly so.", "Without of doubt", "Yes - definitely", "You may rely on it", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signgs point to yes."];
        let neutralResponse = ["Reply hazy, try again.", "Ask again later.", "Better nout count on it.", "Cannot predict now.", "Concentrate and ask again."];
        let badResponse = ["Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
        
        let chooseType = type[Math.floor(Math.random() * type.length)];
        
        if (chooseType === "goodResponse") {
            const answer = new Discord.RichEmbed()
                .setColor(green)
                .setDescription("🎱 " + (goodResponse[Math.floor(Math.random() * goodResponse.length)]));
            msg.channel.send(answer);
        } else if (chooseType === "neutralResponse") {
            const answer1 = new Discord.RichEmbed()
                .setColor(blue)
                .setDescription("🎱 " + (neutralResponse[Math.floor(Math.random() * neutralResponse.length)]));
            msg.channel.send(answer1);
        } else {
            const answer2 = new Discord.RichEmbed()
                .setColor(darkred)
                .setDescription("🎱 " + (badResponse[Math.floor(Math.random() * badResponse.length)]));
            msg.channel.send(answer2);
        }

        //const answer = new Discord.RichEmbed()
        //    .setColor(darkred)
        //    .setDescription("🎱" + response);
        //msg.channel.send(answer);
    }
}