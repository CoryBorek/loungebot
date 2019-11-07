exports.xp = async (msg, Discord, bot, xp, config) => {

    var fs = require('fs');

    const lvlRoles = require('./roles');

    if (!xp[msg.author.id]) {
        xp[msg.author.id] = {
            xp: 0,
            level: 0
        };
    }

    let curxp = xp[msg.author.id].xp;
    let curlvl = xp[msg.author.id].level;
    let nxtlvl = xp[msg.author.id].level * 1000;

    if (curlvl < 9) {
        let xpAdd = Math.floor(Math.random() * 7) + 8;
        console.log(xpAdd);

        xp[msg.author.id].xp = curxp + xpAdd;
        if (nxtlvl <= xp[msg.author.id].xp) {
            xp[msg.author.id].level = curlvl + 1;
            if (curlvl > 0) {
                let lvlup = new Discord.RichEmbed()
                    .setTitle("Level Up!")
                    .setAuthor((msg.author.username), (msg.author.avatarURL))
                    .setColor(0xf3ff00)
                    .setDescription((msg.author.username) + " has leveled up to level " + (lvlRoles.levelRoles[(curlvl)]));
                bot.channels.get(config.lvlupch).send(lvlup);

                msg.reply("Congrats! You leveled up to level `" + (lvlRoles.levelRoles[(curlvl)]) + "`!");
            }

            if (curlvl > 0) {
                let lvlrole = msg.guild.roles.find(`name`, (lvlRoles.levelRoles[curlvl]));

                await (msg.member.addRole(`${lvlrole.id}`));
            }

            if (curlvl > 1) {
                let previousrole = msg.guild.roles.find('name', (lvlRoles.levelRoles[(curlvl) - 1]));
                await (msg.member.removeRole(`${previousrole.id}`));
            }
        }

        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if (err) {
                console.log(err);
            }
        });

        console.log(`level is ${curlvl}`)
    }
}