const Discord = require('discord.js');

const client = new Discord.Client();

//const token = 'NzcwMjY3NTEwOTU5ODk4NjI1.X5bFhQ.ngJSg0pTO6RKRtdy6GlDVPdLGmM';

client.once('ready',()=>{
    console.log('你的小可爱已上线哟~');

});
/*
client.once('message',message=>{
    message.reply('你的小可爱已上线哟~');
})
*/
client.on('message',message=>{
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
        message.reply("不哭不哭眼泪是珍珠越哭越像🐖欸不是你本来就是");
    }
    if(message.content ==="QAQ"){
        message.reply("不哭不哭眼泪是珍珠越哭越像🐖欸不是你本来就是");
    }
    if(message.content ==="030"){
        message.reply("你以为你跟我一样可爱吗😘");
    }
    if(message.content ==="干"){
        message.reply("好孩子不能骂粗话哟~");
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
    if(message.content ==="笑死"){
        message.channel.send("🤣");
    }
    if(message.content ==="嘿嘿"){
        message.channel.send("😏");
    }
    if(message.content ==="你懂的"){
        message.channel.send("😏");
    }
    if(message.content ==="哭哭"){
        message.channel.send("😥");
    }
    if(message.content ==="爱你"){
        message.channel.send("😘");
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
    if(message.content ==="我爱你"){
        message.channel.send("我也爱你😘");
    }
    if(message.content ==="。。"){
        message.channel.send("。。。。。。。。。。。。。。。。。。。。。。。。。");
    }
    if(message.content ==="来咯"){
        message.channel.send("亲爱的我来惹~");
    }
    if(message.content ==="ok"){
        message.channel.send("😘");
    }
    if(message.content ==="走咯"){
        message.channel.send("带上我😏");
    }
})

const PREFIX = '!';

client.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'clear':
            if(!args[1]) return message.reply('亲爱的要写几行哟~');
            message.channel.bulkDelete(args[1]);
            message.reply("```message deleted```");
            break;
        case 'fs':
            message.reply('人家还要听嘛');
            break;
        case 's','skip':
            message.reply('亲爱的不要');
            break;
        case 'p':
            message.reply('亲爱的这首不好听😳');
            break;
        case 'q':
            message.reply('人家也有在你的清单里面吗😜')
            break;
            /*
        case '闭嘴':
            message.reply('OK😥');
            client.off();
            break;
        case 'shutdown':
            message.reply('Shutting down......');
            client.destroy();
            break;
        case 'restart':
            message.reply('Restarting......');
            client.destroy();
            client.login(process.env.token);
            break;
            */
    }
})
client.login(process.env.token);