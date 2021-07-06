const Discord = require('discord.js');
const _levels = require('discord-xp');
const canvacord = require("canvacord");
const Commando = require('discord.js-commando')
const path = require('path')
const ytdl = require("ytdl-core");
const levels = require('discord-xp/models/levels');
const cron = require('cron');
const moment = require('moment');

const client = new Discord.Client();
var version = '1.2';
var servers = {};

const { Player } = require("discord-player");
const { prependListener } = require('discord-xp/models/levels');
const { time } = require('console');
const { discordTime } = require('canvacord/src/Util');
const player = new Player(client);
client.player = player;

client.msgs = require("./data.json")
const fs = require("fs");
const { send } = require('process');

client.once('ready',()=>{
    console.log('你的小可爱已上线哟~');
    var chn = client.channels.cache.get('707515094568927295');
});

client.on('ready',() => {
    var chn = client.channels.cache.get('770291696034381844');

    //var chn = client.channels.cache.get('707515094568927295');
    var msgNumber = "802009634020917248";
    setInterval(() => {
        const date = new Date();
        //d=date.getDay();
        d=moment().utcOffset(+8).format("ddd")
        h=moment().utcOffset(+8).format("hh")
        m=moment().utcOffset(+8).format("mm")
        s=moment().utcOffset(+8).format("ss")
        a=moment().utcOffset(+8).format("a")
        var 电路 = new Discord.MessageEmbed()
            .setTitle('Bp Link')
            .setURL('https://us04web.zoom.us/j/2468450244?pwd=M3QzTzJpYmhraytpbnNMRmZrU05hdz09')
        var 英文 = new Discord.MessageEmbed()
            .setTitle('英文Link')
            .setURL('https://zoom.us/j/91898041291?pwd=eDJTSko2V1RhdjFSUCtBWG9TWHRoZz09')
        var 国文 = new Discord.MessageEmbed()
            .setTitle('国文Link')
            .setURL('https://meet.google.com/lookup/aitlqfg7rw')
        var 华文 = new Discord.MessageEmbed()
            .setTitle('华文Link')
            .setURL('https://meet.google.com/lookup/e7mv5pql56')
        var Dp = new Discord.MessageEmbed()
            .setTitle('德培Link')
            .setURL('https://zoom.us/j/5906765099?pwd=bUNLT2RmcVpJbjJWbTEwbzFXZ3NZZz09')
        var 数学 = new Discord.MessageEmbed()
            .setTitle('数学Link')
            .setURL('https://us04web.zoom.us/j/4645446141?pwd=VXlSbUxISGo2NG1DRldIRWg4MXNIdz09')
        var 物理 = new Discord.MessageEmbed()
            .setTitle("物理Link")
            .setURL("https://zoom.us/j/3901234262?pwd=NFFHYkpHK09va2pVU1AxWU52ejAvZz09")
        var 宝哥 = new Discord.MessageEmbed()
            .setTitle("宝哥Link")
            .setURL("https://meet.google.com/lookup/f4jrhfglxq")
        var 国历 = new Discord.MessageEmbed()
            .setTitle("国历Link")
            .setURL("https://meet.google.com/lookup/bjtzgmbgcx")
        var 体育 = new Discord.MessageEmbed()
            .setTitle("体育Link")
            .setURL("https://meet.google.com/lookup/cqjmopwuvn")
        var 课程默认图 = new Discord.MessageEmbed()
            .setTitle("课程Link将在每堂课结束自动生成")
            .setDescription("```"+"此时间段无课程"+"```")
            .setColor("GREEN")
        if(s==="00"){
            var 主界面 = new Discord.MessageEmbed()
            .setAuthor('XianG自动化网课Link系统©','https://i.imgur.com/kqd6hKk.gif')
            .setColor("00FFFD")
            .addFields(
                { name: '标准时间  🕓', value: '```'+moment().utcOffset(+8).format("hh:mm a")+'```' },
                //{ name: '᲼', value: '◉已优化Link更新时间\n◉已更新最新调整时间' },
            )
            .setImage('https://i.imgur.com/pBo1t9i.jpg')
            .setTimestamp()
            .setFooter('y²N version 2.1.2', 'https://i.imgur.com/VDMbwcb.png');
            chn.messages.fetch({around: "801997167802843157", limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(主界面);
            });
        }
        if(d==="Sat"&&h==="07"&&m==="20"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(物理);
            });
        }
        if(d==="Sat"&&h==="08"&&m==="15"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(宝哥);
            });
        }
        if(d==="Sat"&&h==="09"&&m==="05"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(国历);
            });
        }
        if(d==="Sat"&&h==="10"&&m==="00"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(Dp);
            });
        }
        if(d==="Sat"&&h==="10"&&m==="50"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(课程默认图);
            });
        }
        if(d==="Mon"&&h==="07"&&m==="10"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(Dp);
            });
        }
        if(d==="Mon"&&h==="08"&&m==="15"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(数学);
            });
        }
        if(d==="Mon"&&h==="09"&&m==="05"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(国文);
            });
        }
        if(d==="Mon"&&h==="10"&&m==="00"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(宝哥);
            });
        }
        if(d==="Mon"&&h==="10"&&m==="50"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(华文);
            });
        }
        if(d==="Mon"&&h==="11"&&m==="40"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(宝哥);
            });
        }
        if(d==="Mon"&&h==="12"&&m==="50"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(英文);
            });
        }
        if(d==="Mon"&&h==="01"&&m==="40"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(电路);
            });
        }
        if(d==="Mon"&&h==="03"&&m==="30"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(课程默认图);
            });
        }
        if(d==="Tue"&&h==="07"&&m==="10"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(英文);
            });
        }
        if(d==="Tue"&&h==="08"&&m==="15"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(物理);
            });
        }
        if(d==="Tue"&&h==="09"&&m==="05"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(宝哥);
            });
        }
        if(d==="Tue"&&h==="11"&&m==="40"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(电路);
            });
        }
        if(d==="Tue"&&h==="01"&&m==="40"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(数学);
            });
        }
        if(d==="Tue"&&h==="02"&&m==="40"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(课程默认图);
            });
        }
        if(d==="Wed"&&h==="07"&&m==="10"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(华文);
            });
        }
        if(d==="Wed"&&h==="08"&&m==="15"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(体育);
            });
        }
        if(d==="Wed"&&h==="09"&&m==="05"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(宝哥);
            });
        }
        if(d==="Wed"&&h==="10"&&m==="00"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(英文);
            });
        }
        if(d==="Wed"&&h==="10"&&m==="50"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(Dp);
            });
        }
        if(d==="Wed"&&h==="11"&&m==="40"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(数学);
            });
        }
        if(d==="Wed"&&h==="12"&&m==="50"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(国文);
            });
        }
        if(d==="Wed"&&h==="01"&&m==="50"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(课程默认图);
            });
        }
        if(d==="Thu"&&h==="07"&&m==="10"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(数学);
            });
        }
        if(d==="Thu"&&h==="09"&&m==="05"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(英文);
            });
        }
        if(d==="Thu"&&h==="10"&&m==="00"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(电路);
            });
        }
        if(d==="Thu"&&h==="10"&&m==="50"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(国文);
            });
        }
        if(d==="Thu"&&h==="11"&&m==="40"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(华文);
            });
        }
        if(d==="Thu"&&h==="01"&&m==="50"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(课程默认图);
            });
        }
        if(d==="Fri"&&h==="07"&&m==="10"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(宝哥);
            });
        }
        if(d==="Fri"&&h==="08"&&m==="15"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(数学);
            });
        }
        if(d==="Fri"&&h==="09"&&m==="05"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(英文);
            });
        }
        if(d==="Fri"&&h==="10"&&m==="00"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(电路);
            });
        }
        if(d==="Fri"&&h==="10"&&m==="50"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(华文);
            });
        }
        if(d==="Fri"&&h==="11"&&m==="40"&&a==="am"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(Dp);
            });
        }
        if(d==="Fri"&&h==="01"&&m==="40"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(物理);
            });
        }
        if(d==="Fri"&&h==="02"&&m==="25"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(国文);
            });
        }
        if(d==="Fri"&&h==="03"&&m==="30"&&a==="pm"){
            chn.messages.fetch({around: msgNumber, limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(课程默认图);
            });
        }
    }, 100);
})

//const token = 'NzcwMjY3NTEwOTU5ODk4NjI1.X5bFhQ.ngJSg0pTO6RKRtdy6GlDVPdLGmM';

const PREFIX = '&';

client.on('message',message=>{
	const date = new Date(); // today
	
	/*
	if(message.content==="jt"){
		message.channel.send("**Server join Date: **" + author.date.join + "\n");
	}*/
	if(message.content=="set"){
		const random = Math.floor(Math.random() * 100);
		client.msgs[message.author.username]={
			message:random
		}
		fs.writeFile("./data.json",JSON.stringify(client.msgs,null,4),err=>{
            if(err)throw err;
        })
		message.channel.send("请开始猜数字~");
	}
	
	if(message.content.startsWith ("$n")){
		guess = message.content.slice(2);
		
		let ans = client.msgs[message.author.username].message;
		//message.channel.send("答案：" + ans);
		if(guess==ans){
			message.channel.send("恭喜！答案是" + ans);
			const random = Math.floor(Math.random() * 100);
			
			client.msgs[message.author.username]={
			message:random
			}
			fs.writeFile("./data.json",JSON.stringify(client.msgs,null,4),err=>{
				if(err)throw err;
			})
		}
		else if(guess<ans){
			message.channel.send("猜大一点");
		}
		else if(guess>ans){
			message.channel.send("猜小一点");
		}
		else{
			message.channel.send("Error!");
		}
	}

    if(message.content.startsWith ("write")){
        editedmessage= message.content.slice(6);

        client.msgs[message.author.username]={
            message:editedmessage
        }
        fs.writeFile("./data.json",JSON.stringify(client.msgs,null,4),err=>{
            if(err)throw err;
            message.channel.send("message written");
        })
    }
	if(message.content.startsWith ("read")){
        let _message = client.msgs[message.author.username].message;
        message.channel.send("message is : " + _message);
    }

    if(message.content==="time"||message.content ==="时间"||message.content ==="几点"){
        d=moment().utcOffset(+8).format("ddd")
        h=moment().utcOffset(+8).format("hh")
        m=moment().utcOffset(+8).format("mm")
        s=moment().utcOffset(+8).format("ss")
        a=moment().utcOffset(+8).format("a")
        message.channel.send(d + "  " + h + " : " + m + " : " + s + " " + a);
    }
    client.user.setStatus("dnd");
    client.user.setActivity("Visual Studio Code",{type:'STREAMING'}).catch(console.error);

    if(message.channel.id==="773829631848742912"){
        if(message.content!=="Clearing..."){
            message.channel.send("Clearing...");
        }
        message.fetch().then(message => message.delete());
    }
    if(message.content ==="嗨"||message.content ==="hi"){
        message.channel.send("ih");
    }
	
	if(message.content ==="123"){
		while(True){
			message.channel.send(1++);
		}
    }
	
    if(message.content ==="rs"){
        var chn = client.channels.cache.get('770291696034381844');
        var 课程默认图 = new Discord.MessageEmbed()
            .setTitle("课程Link将在每堂课结束后自动生成")
            .setDescription("```"+"此时间段无课程"+"```")
            .setColor("GREEN")
            chn.messages.fetch({around: "802009634020917248", limit: 1}).then(msg => {
                const fetchedMsg = msg.first();
                fetchedMsg.edit(课程默认图);
            });
    }
    if(message.content ==="晚安"){
        message.channel.send('<a:catsleep:778203433701474364>');
    }
	if(message.content ==="各位吃午餐了没？🍚"||message.content ==="各位吃晚餐了没？🍚"){
		message.channel.send('<a:pepeEggplant:777479557472583710>')
	}
	if(message.content ==="好耶，3点了✨"){
		message.channel.send('<a:winnie:778827377240309762>')
		message.channel.send("<:queue:786936888262393927><:gun_2:777479299162308610>");
	}
    if(message.content ==="喵"){
        message.channel.send("<:queue:786936888262393927><:gun_2:777479299162308610>");
    }
    if(message.content ==="拿"){
		message.channel.send("拿条淋");
        message.channel.send("🖕😑🖕");
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
    var chn = client.channels.cache.get('782935833501368320');
    if(message.channel.id !== "782935833501368320"){
		chn.send(message.author.username + " 向 " + message.guild.name + " 的 " + message.channel.name + " 发送了 " + "【" + message.content + "】");
        //chn.send(message.author.username + " (id:" + message.author.id + ") " + " 向 " + message.guild.name + " (id:" + message.guild.id + ") " + "发送了" + "【" + message.content + "】");
    }
    
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
                message.channel.send("要在语音频道才可执行此操作哟~");
                return;
            }
            if(!servers[message.guild.me.id]) servers[message.guild.me.id] = {
                queue: []
            };
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
            if(message.guild.me.voice.connection) message.guild.me.voice.connection.disconnect();
            break;
        case 'ping':
            message.channel.send(`Ping: **${Date.now() - message.createdTimestamp}ms.**`);
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
        case 'clear':
            console.log(message.author.username);
            if(message.author.username==="K."){
                message.channel.send("删屁删 030");
            }else{
                if(!args[1]) return message.reply('亲爱的要写几行哟~');
                message.channel.bulkDelete(args[1]);
                message.reply("```message deleted```");
            }
            
            break;
        case 'dev':
            message.channel.send("<@632908358935904258>");
            break;
        case 'help':
            var embed = new Discord.MessageEmbed()

            .setColor('#00FFF3')
            .setTitle('y²N Bot List')
            .setURL('https://yixiang.000webhostapp.com/')
            .setAuthor('Yi Xiang', 'https://i.imgur.com/kqd6hKk.gif', 'https://www.instagram.com/yixiang_0906/')
            .setDescription('Thanks for using me~')
            .setThumbnail('https://i.imgur.com/o7yI7Gq.gif')
            .addFields(
                { name: 'Developer', value: '```Yi Xiang```' },
                { name: 'Introduction', value: "```This is a bot.That's all~```" },
                { name: 'Website', value: "```https://yixiang.000webhostapp.com/```" },
                { name: 'Emoji', value: "```喵 | 拿 | emoji```" },
                { name: 'Instruction', value: '```hi | 嗨 | 晚安 | 喵 | time | 时间 | 几点 ```'},
                { name: 'Prefix', value: '```Whatever symbol you want~```'},
                { name: 'Features', value: '```$clear 10 | $电 | $ping | $play | $stop | $skip | $help | $rps | $dev | $fshutdown【紧急用】```' },
				{ name: 'Latest Update', value: '```$n + number (猜数字)[输入set初始化]小心嫑玩坏它（：```' },
                { name: '商业合作请联系', value: '```07-6636892```'},
                //{ name: '\u200B', value: '\u200B' },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
            )
            //.addField('','More features are in development',true)
            //.addField('Inline field title', 'Some value here', true)
            //.setImage('https://i.imgur.com/O0VqCrZ.jpg')
            .setImage('https://i.imgur.com/x9bLVxi.gif')
            .setTimestamp()
            .setFooter('y²N’s Birthday : Monday, ‎October ‎26, ‎2020, ‏‎8:50 PM', 'https://i.imgur.com/VDMbwcb.png');
            message.channel.send(embed);
            break;
        case 'rps':
            if(!args[1]) return message.reply('【RPS石头剪刀布】\n是不会出喔🙄');
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
            message.channel.send('<a:crying:786944293729730560>');
            break;
        case 's':
        case 'skip':
            message.channel.send('<:skip:786943173866815508>');
            break;
        case 'p':
            message.channel.send('<a:pepeJam:777478863268741120>');
            break;
        case 'q':
            message.channel.send('<a:music:786942432730152980>')
            break;
        case 'fshutdown':
            message.channel.send('Shutting down......');
            client.off();
            break;
        case 'restart':
            message.channel.send('Restarting......');
            client.destroy();
            client.login(process.env.token);
            break;
    }
})
//client.login(process.env.token);
client.login('NzcwMjY3NTEwOTU5ODk4NjI1.X5bFhQ.ngJSg0pTO6RKRtdy6GlDVPdLGmM');