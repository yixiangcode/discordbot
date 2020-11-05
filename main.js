const Discord = require('discord.js');
const _levels = require('discord-xp');
const canvacord = require("canvacord");
const Commando = require('discord.js-commando')
const path = require('path')
/*
module.exports = class PlayAudioCommand extends Commando.Command{
    constructor(client){
        super(client,{
            name: 'playaudio',
            group: 'misc',
            memberName: 'playaudio',
            description: 'Plays some audio',
        })
    }

    async run(message){
        
    }
}
*/

const client = new Discord.Client();

const ytdl = require("ytdl-core");
const levels = require('discord-xp/models/levels');
const { author } = require('canvacord');
var version = '1.2';
var servers = {};

//const token = 'NzcwMjY3NTEwOTU5ODk4NjI1.X5bFhQ.ngJSg0pTO6RKRtdy6GlDVPdLGmM';

const PREFIX = '&';

client.once('ready',()=>{
    console.log('你的小可爱已上线哟~');
});
module.exports.run = async (client,message,args)=>{
    const target = message.mentions.users.first() || message.author;
    const user = await _levels.fetch(target.id,message.guild.id);
    const neededXp = _levels.xpFor(parseInt(use.level) + 1);
    if(!user) return message.reply("你还没有xp值哟，试试发点信息呗~");
    const img = "https://cdn.discordapp.com/embed/avatars/0.png";
    if(message.content==="%rank"){
        const rank = new canvacord.Rank()
    
        .setAvatar(message.author.displayAvatarURL({dynamic:false,format:'png'}))
        .setCurrentXP(user.xp)
        .setRequiredXP(neededXp)
        .setStatus(message.author.presence.status)
        .setProgressBar("#FFA500", "COLOR")
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator);
    }
    rank.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, "funnys.png");
            message.channel.send(attachment);
        });
}
client.on('message',message=>{
    /*
    const { voice } = message.member

    if(!voice.channelID){
        message.reply('')
        return
    }

    voice.channel.join().then((connection)=>{
        connection.play(path.join(__dirname,'hellp.mp3'))
    });
    */

    if(message.content ==="嗨"){
        message.reply('hiiii亲爱的');
    }
    if(message.content ==="hi"){
        message.reply('hiiii亲爱的');
    }
    if(message.content ==="晚安"){
        message.reply('晚安亲爱的😘');
    }
    if(message.content ==="sad"){
        message.reply("😥");
    }
    if(message.content ==="QAQ"){
        message.reply("不哭不哭眼泪是珍珠越哭越像🐖欸不是你本来就是");
    }
    if(message.content ==="030"){
        message.reply("你以为你跟我一样可爱吗😘");
    }
    if(message.content ==="干"){
        message.reply("亲爱的骂粗话bad bad啊");
    }
    if(message.content ==="先下"){
        message.reply("亲爱的早点睡哟😘");
    }
    if(message.content ==="下了"){
        message.reply("亲爱的早点睡哟😘");
    }
    if(message.content ==="有人嗎"){
        message.reply("\n没人哦\n想跟我做坏坏的事吗😜");
    }
    if(message.content ==="有人吗"){
        message.reply("\n没人哦\n想跟我做坏坏的事吗😜");
    }
    if(message.content ==="笑死"){
        message.channel.send("🤣");
    }
    if(message.content ==="嘿嘿"){
        message.channel.send("😏");
    }
    if(message.content ==="你懂的"){
        message.channel.send("😏");
    }
    if(message.content ==="傻眼"){
        message.channel.send("🙄");
    }
    if(message.content ==="喵"){
        message.channel.send("喵喵尼哥");
    }
    if(message.content ==="拿"){
        message.channel.send("🖕😑🖕");
    }
    if(message.content ==="666"){
        message.channel.send("🤙🤙🤙");
    }
    if(message.content ==="丑逼"){
        message.channel.send({files:["./images/ML.jpg"]});
    }
    if(message.content ==="爱你"){
        message.channel.send("baby我也爱你😘");
    }
    if(message.content ==="好看"){
        message.channel.send("biiii你很sweet勒~");
    }
    if(message.content ==="。。"){
        message.channel.send("。。。。。。。。。。。。。。。。。。。。。。。。。");
    }
    if(message.content ==="来咯"){
        message.channel.send("亲爱的我来惹~");
    }
    if(message.content ==="ok"){
        console.log(message.author.username);
        if(message.author.username==="yixiang"){
            message.channel.send("Sorry");
        }else{
            message.channel.send("👌");
        }
    }
    if(message.content ==="走咯"){
        message.channel.send("带上我😏");
    }
    

    
    let args = message.content.substring(PREFIX.length).split(" ");

   /* const command = args.shift().toLowerCase();

    if(message.content === "&play"){
        let track = await client.player.play(message.member.voice.channel,args[0],message.member.user.tag);
        message.channel.send('正在播放 ${track.name}! - Requested by ${track.requestedBy}');
    }

    if(message.content === '&stop'){
        let track =await client.player.stop(message.guild.id);
        message.channel.send('我停了喔~~');
    }
    */

    if(message.content==="!bothelp"){
        var embed = new Discord.MessageEmbed()
        .setAuthor('YI XIANG BOT LIST')
        .setDescription('```hi | hello | mute```')
        .addFields({name:'Prefix',value:'```?```',inline:true})
        .setColor('#00FFF3')

        message.channel.send(embed);
    }
    switch (args[0]) {
        case 'play':
            function play(connection,message){
                var server = servers[message.guild.me.id];
                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
                server.queue.shift();
                server.dispatcher.on("end",function(){
                    if(server.queue[0]){
                        play(connection,message);
                    }else{
                        connection.disconnect();
                    }
                })
            }
            if(!args[1]){
                message.channel.send("亲爱的要给link哟~");
                return;
            }
            if(!message.member.voice.channel){
                message.channel.send("亲爱的要在语音频道才可执行此操作哟~");
                return;
            }
            if(!servers[message.guild.me.id]) servers[message.guild.me.id] = {
                queue: []
            }
            var server = servers[message.guild.me.id];
            server.queue.push(args[1]);
            if(!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
                play(connection,message);
            })
            break;
        case 'skip':
            var server = servers[message.guild.me.id];
            if(server.dispatcher) server.dispatcher.end();
            message.channel.send("已跳过>>")
            break;
        case 'stop':
            var server =servers[message.guild.me.id];
            if(message.guild.me.voice.connection){
                for(var i = server.queue.length -1;i >= 0; i--){
                    server.queue.splice(i,1);
                }

                server.dispatcher.end();
                message.channel.send("结束LIST离开语音频道~")
            }
            if(message.guild.me.connection) message.guild.me.voice.connection.disconnect();
            break;
        case 'ping':
            message.channel.send('pong!');
            break;
        case '电路':
            var embed = new Discord.MessageEmbed()
            .setTitle('电路LINK')
            .setURL('https://us04web.zoom.us/j/2468450244?pwd=M3QzTzJpYmhraytpbnNMRmZrU05hdz09')
            message.channel.send(embed);
            break;
        case '数学':
            var embed = new Discord.MessageEmbed()
            .setTitle('数学LINK')
            .setURL('https://us02web.zoom.us/j/7479775377?pwd=Uk1rZUxyNGpWU1FYUVpHK2RqVTFxQT09')
            message.channel.send(embed);
            break;
        case '英文':
            var embed = new Discord.MessageEmbed()
            .setTitle('英文LINK')
            .setURL('https://meet.google.com/lookup/edq6e7yffr')
            message.channel.send(embed);
            break;
        case '数位':
            var embed = new Discord.MessageEmbed()
            .setTitle('数位LINK')
            .setURL('https://meet.google.com/lookup/hk3hboi2l2')
            message.channel.send(embed);
            break;
        case '国文':
            var embed = new Discord.MessageEmbed()
            .setTitle('国文LINK')
            .setURL('https://meet.google.com/lookup/d5c2c4lq77')
            message.channel.send(embed);
            break;
        case '华文':
            var embed = new Discord.MessageEmbed()
            .setTitle('华文LINK')
            .setURL('https://meet.google.com/lookup/byaxnxtspq')
            message.channel.send(embed);
            break;
        case 'dp':
            var embed = new Discord.MessageEmbed()
            .setTitle('德培LINK')
            .setURL('https://meet.google.com/lookup/gdimhoedfm')
            message.channel.send(embed);
            break;
        case '体育':
            var embed = new Discord.MessageEmbed()
            .setTitle('体育LINK')
            .setURL('https://meet.google.com/qxa-ebio-zuf')
            message.channel.send(embed);
            break;
        case '电':
            var embed = new Discord.MessageEmbed()

            .setColor("BLUE")
            .setAuthor("课程表")
            .addFields(
                { name: '高一电机电子1', value: '```一.国文|物理|华文||电路|数位|英文||班会|电子\n二.电路|英文|电脑||体育|电子|华文||数学|国文\n三.华文|电子|数学||数位 实习|电脑||数位|物理\n四.数学|电子 实习||国历|电机|英文||联课|联课\n五.数学|数学|英文||物理|华文|国文||电机|电路\n六.空节|电机|国文||空节|数学|英文||华文|空节```' },
            )
            .setImage('https://i.imgur.com/x9bLVxi.gif')
            message.channel.send(embed);
            console.log(message.author.username);
            break;
        case 'time':
            message.channel.send("上课时间\n```第一节：7.35am-8.15am\n第二节：8.20am-9.00am\n第三节：9.05am-9.45am\n第四节：9.50am-10.30am\n第五节：10.35am-11.15am\n第六节：11.20am-12.00pm\n第七节：12.20pm-1.00pm\n第八节：1.05pm-1.45```")
            console.log(message.author.username);
            break;
        case 'clear':
            if(!args[1]) return message.reply('亲爱的要写几行哟~');
            message.channel.bulkDelete(args[1]);
            message.reply("```message deleted```");
            break;
        case 'help':
            var embed = new Discord.MessageEmbed()

            .setColor('#00FFF3')
            .setTitle('y²N Bot List')
            .setURL('https://yixiang.000webhostapp.com/')
            .setAuthor('Yi Xiang', 'https://i.imgur.com/GlJ21p6.png', 'https://www.instagram.com/yixiang_0906/')
            .setDescription('Thanks for using me~')
            .setThumbnail('https://i.imgur.com/VDMbwcb.png')
            .addFields(
                { name: 'Developer', value: '```Yi Xiang```' },
                { name: 'Introduction', value: "```This is a bot.That's all~```" },
                { name: 'Emoji', value: "```sad | 笑死 | 嘿嘿 | 你懂的 | 拿 | 666 | 丑逼 | ok```" },
                { name: 'Instruction', value: '```hi | 嗨 | 晚安 | QAQ | 030 | 干 | 先下 | 下了 | 有人吗 | 喵 | 爱你 | 好看 | 。。 | 来咯 | 走咯```'},
                { name: 'Features', value: '```$clear 10 | $电 | $ping | $play | $stop | $skip | $help | $科目 | $fshutdown(emergency)```' },
                //{ name: '\u200B', value: '\u200B' },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
            )
            //.addField('','More features are in development',true)
            //.addField('Inline field title', 'Some value here', true)
            //.setImage('https://i.imgur.com/O0VqCrZ.jpg')
            .setImage('https://i.imgur.com/x9bLVxi.gif')
            .setTimestamp()
            .setFooter('小可爱’s Birthday : Monday, ‎October ‎26, ‎2020, ‏‎8:50 PM', 'https://i.imgur.com/VDMbwcb.png');
            message.channel.send(embed);
            break;

/*
            .setAuthor('小可爱 BOT LIST')
            .setDescription('```Hello World!```')
            .setThumbnail
            .addFields({name:'Developer',value:'```Yi Xiang\n```',inline:true})
            .addFields({name:'Birthday',value:'```‎Monday, ‎October ‎26, ‎2020, ‏‎8:50 PM\n```',inline:true})
            .addFields({name:'Instruction',value:'```hi\n晚安\nsad\nQAQ\n030\n干\n先下\n下了\n有人吗\n笑死\n嘿嘿\n你懂的\n哭哭\n喵\n拿\n666\n丑逼\n爱你\n你好好看\n。。\n来咯\nok\n走咯\n```',inline:true})
            .setColor('#00FFF3')
            message.channel.send(embed);
            break;
            */
        case 'fs':
            message.reply('人家还要听嘛');
            break;
        case 's':
            message.reply('亲爱的不要');
            break;
        case 'skip':
            message.reply('亲爱的不要');
            break;
        case 'p':
            message.reply('好听咩亲爱的😗');
            break;
        case 'q':
            message.reply('人家也在你的清单里吗😜')
            break;
        case 'fshutdown':
            message.reply('Shutting down......');
            client.off();
            break;
            /*
        case 'restart':
            message.reply('Restarting......');
            client.destroy();
            client.login(process.env.token);
            break;
            */
    }
})
module.exports.config = {
    name:"rank",
    aliases:['level']
}

client.login(process.env.token);