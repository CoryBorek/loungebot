exports.eightball = async (bot, Discord, msg, args, red, darkred) => {
    if (!args[0]) {
        const noArgs = new Discord.RichEmbed()
            .setColor(red)
            .setTitle("Invalid Arguments!")
            .setDescription("`You did not ask a question. Be sure to ask the Magic 8Ball a question!`");
        msg.channel.send(noArgs);
    } else {
        let responses = ["It is certain.", "It is decidedly so.", "Without a doubt", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not count on it.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
        let response = responses[Math.floor(Math.random() * responses.length)];
        
        const answer = new Discord.RichEmbed()
            .setColor(darkred)
            .setTitle("🎱 The Magic 8Ball!")
            .setDescription(response);
        msg.channel.send(answer);
    }
}