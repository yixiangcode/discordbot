const Discord = require('discord.js');
const _levels = require('discord-xp');
const canvacord = require("canvacord");
const Commando = require('discord.js-commando')
const path = require('path')
const ytdl = require("ytdl-core");
const levels = require('discord-xp/models/levels');
const cron = require('cron');
const { time } = require('console');

const client = new Discord.Client();
var version = '1.2';
var servers = {};

client.once('ready',()=>{
    console.log('你的小可爱已上线哟~');
});

client.on('ready',() => {
    var chn = client.channels.cache.get('770291696034381844');
    setInterval(() => {
        const date = new Date();
        h=date.getHours();
        m=date.getMinutes();
        s=date.getSeconds();
        if(h==17&&m===0&&s===0){
            chn.send("你可爱的bot温馨提醒您早点睡觉哟~");
        }
        if(h==18&&m===0&&s===0){
            chn.send("现在时间凌晨2点，早点睡哟！");
        }
        if(h===19&&m===0&&s===0){
            chn.send("现在时间为凌晨3点，快去睡觉~");
        }
        if(h===20&&m===0&&s===0){
            chn.send("亲爱的还没睡吗~");
        }
        if(h===21&&m===0&&s===0){
            chn.send("起床准备上课咯各位！！！");
        }
    }, 1000);
})

let scheduledMessage = new cron.CronJob('10 00 00 * * *', () => {
    // This runs every day at 10:30:00, you can do anything you want
    let myChannel = guild.channels.get('770291696034381844');
    myChannel.send('TEST');
  });
  
  // When you want to start it, use:
  scheduledMessage.start()

//const token = 'NzcwMjY3NTEwOTU5ODk4NjI1.X5bFhQ.ngJSg0pTO6RKRtdy6GlDVPdLGmM';

const PREFIX = '&';

client.on('message',message=>{
    const date = new Date(); // today
    if(message.content==="time"){
        message.channel.send(date.getHours()+" : "+date.getMinutes());
    }
    client.user.setStatus("dnd");
    client.user.setActivity("Visual Studio Code",{type:'STREAMING'}).catch(console.error);
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

    if(message.content ==="嗨"||message.content ==="hi"){
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
    if(message.content ==="先下"||message.content ==="下了"){
        message.reply("亲爱的早点睡哟😘");
    }
    if(message.content ==="有人嗎"||message.content ==="有人吗"){
        message.reply("\n没人哦\n想跟我做坏坏的事吗😜");
    }
    if(message.content ==="笑死"){
        message.channel.send("🤣");
    }
    if(message.content ==="嘿嘿"||message.content ==="你懂的"){
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
        message.channel.send("👌");
    }
    if(message.content ==="走咯"){
        message.channel.send("带上我😏");
    }
    if(message.content ==="emoji"){
        message.react("🥳");
        message.react("🤪");
        message.react("🤔");
        message.react("👀");
        message.react("😋");
        message.react("😳");
        message.react("🦥");
        message.react("🖕🏻");
        message.react("❌");
        message.react("✅");
        message.react("😶");
        message.react("🙃");
        message.react("🥴");
        message.react("😑");
        message.react("🐔");
        message.react("🎃");
        message.react("💈");
        message.react("😕");
        //message.member.roles.add("人工智障");
    }
    var o=0;
    if(message.content==="rps"){
        o+=1;
        message.channel.send(o);
    }
    if(message.content==="animate"){
        message.channel.send(":emoji_5:")
    }
    console.log("用户名称：",message.author.username);
    console.log("信息内容：",message.content);
    console.log("服务器id：",message.guild.id);
    console.log("服务器名称：",message.guild.name);

    let args = message.content.substring(PREFIX.length).split(" ");

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
        case '電路':
            var embed = new Discord.MessageEmbed()
            .setTitle('电路LINK')
            .setURL('https://us04web.zoom.us/j/2468450244?pwd=M3QzTzJpYmhraytpbnNMRmZrU05hdz09')
            message.channel.send(embed);
            break;
        case '数学':
        case '數學':
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
        case '數位':
            var embed = new Discord.MessageEmbed()
            .setTitle('数位LINK')
            .setURL('https://meet.google.com/lookup/hk3hboi2l2')
            message.channel.send(embed);
            break;
        case '国文':
        case '國文':
            var embed = new Discord.MessageEmbed()
            .setTitle('国文LINK')
            .setURL('https://meet.google.com/lookup/d5c2c4lq77')
            message.channel.send(embed);
            break;
        case '华文':
        case '華文':
            var embed = new Discord.MessageEmbed()
            .setTitle('华文LINK')
            .setURL('https://meet.google.com/lookup/byaxnxtspq')
            message.channel.send(embed);
            break;
        case 'dp':
            var embed = new Discord.MessageEmbed()
            .setTitle('德培LINK')
            .setURL('https://zoom.us/j/5906765099?pwd=bUNLT2RmcVpJbjJWbTEwbzFXZ3NZZz09')
            message.channel.send(embed);
            break;
        case '体育':
        case '體育':
            var embed = new Discord.MessageEmbed()
            .setTitle('体育LINK')
            .setURL('https://meet.google.com/qxa-ebio-zuf')
            message.channel.send(embed);
            break;
        case '电':
        case '電':    
            console.log(message.author.username);
            //if(message.author.username==="K."||message.author.username==="KK."||message.author.username==="阿乐"||message.author.username==="疯子")
            if(message.author.username===""){
                message.channel.send("Sorry! y²N is not longer support your username.");
            }else{
                var embed = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setAuthor("课程表")
                .addFields(
                { name: '高一电机电子1', value: '```一.电路|数位|空节|电机|华文||国历|空节|班会\n二.英文|物理|华文|空节|电脑||数学|国文|空节\n三.国文|体育|空节|电子|英文||华文|数学|空节\n四.电子|英文|电脑|国文|数学||空节|数位|空节\n五.数学|电机|电路|空节|华文||英文|物理|空节\n六.8点数位```' },
            )
                .setImage('https://i.imgur.com/x9bLVxi.gif')
                message.channel.send(embed);
            }
            break;
        case 'time':
            var embed = new Discord.MessageEmbed()
                .setColor("84FF00")
                .setAuthor("上课时间")
                .addFields(
                { name: '高一电机电子1', value: '```第一节：8.00am-8.40am\n第二节：8.50am-9.30am\n第三节：9.40am-10.20am\n第四节：10.30am-11.10am\n第五节：11.20am-12.00pm\n第六节：12.30pm-1.10pm\n第七节：1.20pm-2.00pm\n第八节：2.10pm-2.50```' },
            )
                .setImage('https://i.imgur.com/x9bLVxi.gif')
                message.channel.send(embed);
            break;
            
        case 'clear':
            console.log(message.author.username);
            if(message.author.username===""){
                message.channel.send("Sorry! y²N is not longer support your username.");
            }else{
                if(!args[1]) return message.reply('亲爱的要写几行哟~');
                message.channel.bulkDelete(args[1]);
                message.reply("```message deleted```");
            }
            
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
                { name: 'Emeoji', value: "```sad | 笑死 | 嘿嘿 | 你懂的 | 拿 | 666 | 丑逼 | ok```" },
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
        case 'rps':
            if(!args[1]) return message.reply('是不会出喔🙄');
                const messages = ["石头","剪刀","布"];
                const random025 = messages[Math.floor(Math.random() * messages.length)];
                let v=0;
                let s=0;
                let score = "Bot : "+v+" 【VS】 "+"Player : "+s;
                let gameWin = false;
                if(random025==="石头"){
                    message.react("👊");
                }
                if(random025==="剪刀"){
                    message.react("✂️");
                }
                if(random025==="布"){
                    message.react("🖐")
                }
                if(random025 === "剪刀"&& args[1] === "石头"){
                    message.channel.send("让你一回=-=");
                    gameWin = true;
                    message.channel.send(score);
                }
                if(random025 === "石头"&& args[1] === "石头"){
                    message.channel.send("不要学我好吗=-=");
                    message.channel.send(score);
                }
                if(random025 === "布"&& args[1] === "石头"){
                    message.channel.send("嫩喔😏");
                    gameWin = false;
                    message.channel.send(score);
                }
                if(random025 === "剪刀"&& args[1] === "剪刀"){
                    message.channel.send("不要学我好吗=-=");
                    message.channel.send(score);
                }
                if(random025 === "石头"&& args[1] === "剪刀"){
                    message.channel.send("嫩喔😏");
                    gameWin = false;
                    message.channel.send(score);
                }
                if(random025 === "布"&& args[1] === "剪刀"){
                    message.channel.send("让你一回=-=");
                    gameWin = true;
                    message.channel.send(score);
                }
                if(random025 === "剪刀"&& args[1] === "布"){
                    message.channel.send("嫩喔😏");
                    gameWin = false;
                    message.channel.send(score);
                }
                if(random025 === "石头"&& args[1] === "布"){
                    message.channel.send("让你一回=-=");
                    gameWin = true;
                    message.channel.send(score);
                }
                if(random025 === "布"&& args[1] === "布"){
                    message.channel.send("不要学我好吗=-=");
                    message.channel.send(score);
                }
                if(gameWin = true){
                    v+=1;
                }else{
                    s+=1;
                }
            break;
        case '更新':
            var embed = new Discord.MessageEmbed()
                .setColor("B300FF")
                .setAuthor("y²N Latest Update")
                .addFields(
                { name: '更新内容：', value: '```1)更新查看\n2)课程表更新\n3)课程表时间更新\n4)LINK支持簡繁體```' },
            )
                .setImage('https://i.imgur.com/x9bLVxi.gif')
                message.channel.send(embed);
            break;
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
        case 'restart':
            message.reply('Restarting......');
            client.destroy();
            client.login(process.env.token);
            break;
    }
})
client.login(process.env.token);