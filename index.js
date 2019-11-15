// Bot created by Jishy

const Discord = require('discord.js');
const bot = new Discord.Client();

var commands = require('./commands/commands');
var listeners = require('./listeners/listeners');
const autoRespond = require('./autorespond');
const superagent = require('superagent');

const xp = require('./xp.json');
const gameTord = require('./game/tord.json');

// Canvas for image manipulation
const Canvas = require('./node_modules/canvas');

const config = require('./config');

const welcome = require('./welcome');

const ms = require("ms");

// Logs Channel
const logCH = config.logsChannel;

var version = '1.0.3';

// Reports Channel ID
const reportCH = config.reportsChannel;

// Announcements Channel ID
const announceCH = config.announcementsChannel;

// Dates stuff
var today = new Date();
var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var day = today.getDate();
var month = (today.getMonth() + 1);
var timeLogs = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();

var xmasDays = 25 - (day);
var novXmasDays = 55 - (day);

bot.on('ready', () => {
    console.log('LoungeBot-2000 loaded successfully.');
    console.log(month);

    bot.user.setPresence({
        game: {
            name: ((novXmasDays) + " Days until Christmas!"),
            type: "WATCHING"
        },
        status: 'online'
    });

    //define important thing for directory stuff
    var fs = require('fs');
    //defines names of directories to create
    const dirnames = {
        logs: "logs",
        msgdel: "deletedmessages",
        mutes: "mutes",
        bans: "bans",
        kicks: "kicks",
        warns: "warns",
        dms: "dms",
        ships: "ships"
    }

    //creates directory "logs" if it doesn't already exist
    if (!fs.existsSync('./logs')) {
        fs.mkdirSync(dirnames.logs);
        console.log('"logs" directory created.');
    };
    //creates directory "deletedmessages" if does not already exist
    if (!fs.existsSync('./logs/deletedmessages')) {
        fs.mkdirSync('./logs/' + (dirnames.msgdel));
        console.log('"deletedmessages" directory created in directory "logs"');
    };
    //creates directory "mutes" if does not already exist
    if (!fs.existsSync('./logs/mutes')) {
        fs.mkdirSync('./logs/' + (dirnames.mutes));
        console.log('"mutes" directory created in directory "logs"');
    };
    //creates directory "bans" if does not already exist
    if (!fs.existsSync('./logs/bans')) {
        fs.mkdirSync('./logs/' + (dirnames.bans));
        console.log('"bans" directory created in directory "logs"');
    };
    //creates directory "kicks" if does not already exist
    if (!fs.existsSync('./logs/kicks')) {
        fs.mkdirSync('./logs/' + (dirnames.kicks));
        console.log('"kicks" directory created in directory "logs"');
    };
    //creates directory "warns" if does not already exist
    if (!fs.existsSync('./logs/warns')) {
        fs.mkdirSync('./logs/' + (dirnames.warns));
        console.log('"warns" directory created in directory "logs"');
    };
    //creates directory "dms" if does not already exist
    if (!fs.existsSync('./logs/dms/')) {
        fs.mkdirSync('./logs/' + (dirnames.dms));
        console.log('"dms" directory created in directory "logs"');
    };
    if (!fs.existsSync('./ships')) {
        fs.mkdirSync('./' + (dirnames.ships));
        console.log('"ships" directory created.');
    };
});
let status = ["James -\n- " + (novXmasDays) + " Days until Christmas!", "Greys Anatomy -\n- " + (novXmasDays) + " Days until Christmas!", "HTGAWM -\n- " + (novXmasDays) + " Days until Christmas!", "Emergence -\n- " + (novXmasDays) + " Days until Christmas!", "Bot Development -\n- " + (novXmasDays) + " Days until Christmas!", "Jishy UwU -\n- " + (novXmasDays) + " Days until Christmas!", "Cute Guys -\n- " + (novXmasDays) + " Days until Christmas!", "Viola Davis -\n- " + (novXmasDays) + " Days until Christmas!", "Area 51 -\n- " + (novXmasDays) + " Days until Christmas!", "and i oop -\n- " + (novXmasDays) + " Days until Christmas!", "The world -\n- " + (novXmasDays) + " Days until Christmas!", "Minecraft Survival -\n- " + (novXmasDays) + " Days until Christmas!", "Musketqueers -\n- " + (novXmasDays) + " Days until Christmas!", "Electric Avenue -\n- " + (novXmasDays) + " Days until Christmas!", "Tom Holland -\n- " + (novXmasDays) + " Days until Christmas!", "Connor uwu -\n- " + (novXmasDays) + " Days until Christmas!", "General Chat -\n- " + (novXmasDays) + " Days until Christmas!", "*beeping noises* -\n- " + (novXmasDays) + " Days until Christmas!"]

setInterval(function () {
    bot.user.setActivity(status[Math.floor(Math.random() * status.length)], {
        type: "WATCHING"
    });
}, 10000);

// Color codes:
const aqua = 1752220
const green = 3066993
const blue = 3447003
const purple = 10181046
const gold = 15844367
const orange = 15105570
const red = 15158332
const grey = 9807270
const darkergrey = 8359053
const navy = 3426654
const darkaqua = 1146986
const darkgreen = 2067276
const darkblue = 2123412
const darkpurple = 7419530
const darkgold = 12745742
const darkorange = 11027200
const darkred = 10038562
const darkgrey = 9936031
const lightgrey = 12370112
const darknavy = 2899536

function emoji(id) {
    return bot.emojis.get(id).toString();
}

// When a new user joins the server
bot.on("guildMemberAdd", member => {
    if (member != bot) {
        const joinMSG = require('./joinmsg');
        joinMSG.join(member, welcome, config);
    }
});

bot.on('message', async msg => {

    msgLower = msg.content.toLowerCase();

    if (msgLower.includes("yeet")) {
        msg.react("625793112249204787");
    }

    if (msgLower === "ping") {
        msg.react("625793126224625707");
    }

    if (msgLower === "ur not welcome jishy bot" || msgLower === "ur not welcome jishy bot go somewhere else") {
        msg.reply("SHUT THE FUCK UP");
    }

    if (msgLower === "drdoofenshmirtz" || msgLower === "dr doofenshmirtz") {
        msg.react("625509288730820611");
    }

    if ((msg.content.toLowerCase().includes(":o")) || (msg.content.includes("😮"))) {
        msg.react("625794873269813259");
    }

    if (msgLower === "canoe man" || msgLower === "canoeman") {
        msg.react("🛶");
        msg.channel.send("***Canoe Man***", {
            files: [
                "./assets/canoeman.mp4"
            ]
        })
    }

    if (msgLower === "disco dog" || msgLower === "discodog") {
        msg.react("633118752400998412");
        msg.channel.send("***Jajaja***", {
            files: [
                "./assets/Fqd4bwiWayi5NRS6.mp4"
            ]
        })
    }

    if (msgLower === "ducks" || msgLower === "quacks") {
        msg.react("🦆");
        msg.channel.send("***Quack Quack Quack***", {
            files: [
                "./assets/0BjSDyFXMmVp9Kp3.mp4"
            ]
        })
    }

    if (msgLower === "it's too big" || msgLower === "its too big") {
        msg.react("👀")
        msg.channel.send("*That's what she said :eyes:*");
    }

    if (msgLower === "oof") {
        msg.react("625789704448638985");
    }

    if (msgLower === "feelsbadman" || msgLower === "feels bad man" || msgLower === "f e e l s b a d m a n") {
        msg.react("633138518612246548");
    }

    if (msgLower === "owo") {
        msg.channel.send("***What's dis?***");
    }

    if (msgLower === "nyoom") {
        if (msg.author.bot) {

        } else {
            msg.channel.send('*nyoom*');
        }
    }

    if (msgLower === "uwu") {
        msg.channel.send("**OwO**");
    }

    if (msgLower === "ali-a") {
        const alia1 = bot.emojis.get("625512838902841345");
        const alia2 = bot.emojis.get("625512840215789576");
        const alia3 = bot.emojis.get("625512840526036993");
        const alia4 = bot.emojis.get("625512840748335164");
        msg.channel.send(alia1 + alia2 + "\n" + alia3 + alia4);
    }

    if (autoRespond[msg.content]) {
        msg.channel.send(autoRespond[msg.content])
    }

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if (msg.content.indexOf(config.prefix) !== 0) return;

    const user = msg.mentions.users.first();

    const reason = args.slice(2).join(' ');

    // Botinfo command
    if (command === "botinfo") {
        commands.botinfocommand.botinfo(msg, args, version, config, bot);
    };

    // Mute command
    if (command === "mute") {
        commands.mutecommand.mute(bot, msg, args[2], logCH, args[3], timeLogs, args, reason, config);
    };

    // Clear messages command
    if (command === "purge") {
        commands.clearmsgcommand.clearmsg(msg, args, bot, logCH, config);
    };

    // Kick command
    if (command === "kick") {
        commands.kickcommand.kick(msg, user, reason, bot, logCH, date, time, timeLogs, config);
    };

    // Ban command
    if (command === "ban") {
        commands.bancommand.ban(bot, msg, user, logCH, reason, timeLogs, config);
    };

    // Report command
    if (command === "report") {
        commands.reportcommand.report(bot, args, reportCH, user, msg);
    };

    // Announcement command
    if (command === "announce") {
        commands.announcecommand.announce(bot, msg, args, announceCH, logCH, config);
    };

    // Help command
    if (command === "help") {
        commands.helpcommand.help(bot, msg, args, config);
    };

    // Warn command
    if (command === "warn") {
        commands.warncommand.warn(bot, msg, red, green, user, config, args, date, time, timeLogs, logCH);
    };

    // Ship command
    if (command === "ship") {
        commands.shipcommand.ship(bot, msg, args, purple, Canvas, Discord, red, config);
    };

    // Check level and XP info
    if (command === "level") {
        commands.levelcommand.lvlcheck(bot, msg, args, Discord, user, xp, red);
    };

    // Edit bot command prefix
    if (command === "changeprefix") {
        commands.changeprefix.changeprefix(msg, args, Discord, green, red, config);
    };

    // Autoresponse command
    if (command === "autoresponse") {
        commands.autoresponse.autoresponse(msg, args, Discord, green, red, darkgold, autoRespond, config);
    };

    // Random cat image command
    if (command === "cat") {
        commands.cat.cat(msg, Discord, darkorange, superagent);
    }

    // Random dog image command
    if (command === "dog") {
        commands.dog.dog(msg, Discord, darkorange, superagent);
    }

    // Random president command
    if (command === "president") {
        commands.president.president(msg);
    }

    // Staff help command
    if (command === "staffhelp") {
        commands.staffhelp.staffhelp(msg, Discord, config, blue, red);
    }

    // Truth or dare command
    if (command === "tord") {
        //commands.truthordare.tord(bot, msg, Discord, red, green, blue, config, command, args, gameTord);
        msg.reply("That command is not available yet, sorry!");
    }

    // Tic Tac Toe
    if (command === "tictactoe") {
        msg.reply("That command is not available yet, sorry!");
    }

    // Chnage join message
    if (command === "joinmsg") {
        commands.changejoinmsg.chjoin(msg, config, args, Discord, red, green, welcome);
    }

    // Restart bot
    if (command === "restart") {
        commands.restart.restart(bot, Discord, msg, navy, green, red, config);
    }

    // Survival server info
    if (command === "survival") {
        commands.survival.survival(Discord, msg, blue);
    }

    // View future updates/features
    if (command === "updates") {
        commands.updates.updates(bot, Discord, msg, blue);
    }
});

//
//  Main listeners poop goes below here
//

bot.on("message", async msg => {
    // Listening for DMs
    if ((msg.channel.type) == "dm" && (!msg.author.bot)) {
        listeners.DMListener.dmmsg(bot, msg, date, time, timeLogs, orange, Discord);
    };

    // Listening for everything basically, XP is lit
    if ((msg.channel.type) != "dm" && (!msg.author.bot) && (!msg.content.startsWith(config.prefix) && (msg.channel.id != (config.spamCH)))) {
        listeners.XPGiver.xp(msg, Discord, bot, xp, config);
    };
});

//when a message is deleted
bot.on("messageDelete", (messageDelete) => {
    listeners.messageDeleteListener.msgDelete(bot, messageDelete, logCH, darkblue, date, time, timeLogs);
});

bot.login(config.token);