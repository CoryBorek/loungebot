exports.lvlcheck = function (bot, msg, args, Discord, user, xp, red) {
    let curxp = xp[msg.author.id].xp;
    let curlvl = xp[msg.author.id].level;
    let nxtlvl = xp[msg.author.id].level * 1000;
    let difference = nxtlvl - curxp;
    let lvlRoles = require('./roles');

    if (user) {
        //let mentioncurxp = xp[user.id].xp;
        //let mentioncurlvl = xp[user.id].level;
        //let mentionnxtlvl = xp[user.id].level * 300;
        //let mentiondifference = mentionnxtlvl - mentioncurxp;

        //let mentionlvlEmbed = new Discord.RichEmbed()
        //.setAuthor((user.username), (user.avatarURL))
        //.setTitle("XP and Level info for " + (user.username))
        //.setColor(0xf3ff00)
        //.setImage(user.avatarURL)
        //.addField("Current XP:", mentioncurxp, true)
        //.addField("Current Level:", mentioncurlvl, true)
        //.setFooter(`${mentiondifference} XP until level ` + ((mentioncurlvl) + 1));
        //msg.channel.send(mentionlvlEmbed);
        let comingSoon = new Discord.RichEmbed()
        .setColor(red)
        .setTitle("Coming Soon!")
        .setDescription("You will be able to check XP and Level information of other users in a future update!");
        msg.channel.send(comingSoon);
    };

    if (!user) {
        if (curlvl >= 16) {
            let lvlEmbedB = new Discord.RichEmbed()
            .setAuthor((msg.author.username), (msg.author.avatarURL))
            .setTitle("XP and Level info for " + (msg.author.username))
            .setColor(0xf3ff00)
            .setImage(msg.author.avatarURL)
            .addField("Current XP:", curxp, true)
            .addField("Current Level:", lvlRoles.levelRoles[(curlvl)-1], true);
            msg.channel.send(lvlEmbedB);
        } else {
            let lvlEmbed = new Discord.RichEmbed()
            .setAuthor((msg.author.username), (msg.author.avatarURL))
            .setTitle("XP and Level info for " + (msg.author.username))
            .setColor(0xf3ff00)
            .setImage(msg.author.avatarURL)
            .addField("Current XP:", curxp, true)
            .addField("Current Level:", lvlRoles.levelRoles[(curlvl)-1], true)
            .setFooter(`${difference} XP until level ` + ((lvlRoles.levelRoles[curlvl])));
            msg.channel.send(lvlEmbed);
        }
    }
}