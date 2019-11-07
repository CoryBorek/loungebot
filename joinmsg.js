exports.join = async (member, welcome, config) => {
    member.guild.channels.get(config.generalCH).send("Welcome, " + (member) + " " + (welcome.MSG));
}