exports.dog = async (msg, Discord, darkorange, superagent) => {
    let message = await msg.channel.send("Generating sexy dog image...")

    let {body} = await superagent
    .get('https://dog.ceo/api/breeds/image/random')
    //console.log(body.file)
    if (!{body}) return msg.channel.send("*An unkown error has occured. Please try again.*")

    let dEmbed = new Discord.RichEmbed()
        .setColor(darkorange)
        .setAuthor((msg.author.username), (msg.author.avatarURL))
        .setTitle("Enjoy this sexy dog image ;)")
        .setImage(body.message);
    msg.channel.send(dEmbed);
    message.delete();
}