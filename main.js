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
        message.reply('嗨你麻痹');
    }
    if(message.content ==="hi"){
        message.reply('hi你麻痹');
    }
    if(message.content ==="谁最帅"){
        message.reply('那必须是益翔~');
    }
    if(message.content ==="晚安"){
        message.reply('晚安~');
    }
    if(message.content ==="sad"){
        message.reply("不哭不哭眼泪是珍珠越哭越像🐖欸不是你本来就是030");
    }
    if(message.content ==="QAQ"){
        message.reply("不哭不哭眼泪是珍珠越哭越像🐖欸不是你本来就是030");
    }
    if(message.content ==="030"){
        message.reply("walao你以为你很可爱是吗");
    }
    if(message.content ==="干"){
        message.reply("好孩子不能骂粗话哟~");
    }
    if(message.content ==="先下"){
        message.reply("下啦下啦下地狱啦030");
    }
    if(message.content ==="下了"){
        message.reply("下啦下啦下地狱啦030");
    }
    if(message.content ==="有人吗"){
        message.reply("看起来是有吗");
    }
    if(message.content ==="懂的"){
        message.channel.send("都懂");
    }
    if(message.content ==="笑死"){
        message.channel.send("🤣");
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
    if(message.content ==="汪"){
        message.channel.send("🖕😑🖕");
    }
    if(message.content ==="666"){
        message.channel.send("🤙🤙🤙");
    }
    if(message.content ==="丑逼"){
        message.channel.send({files:["./images/ML.jpg"]});
    }
    if(message.content ==="011"){
        message.channel.send("yyyyyyyyyyyyyyyyyyi");
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
            if(!args[1]) return message.reply('md现在是不会写几行是吗030');
            message.channel.bulkDelete(args[1]);
            message.reply("```message deleted```");
            break;
        case 'fs':
            message.reply('walao又skip');
            break;
        case 's':
            message.reply('walao又skip');
            break;
        case 'p':
            message.reply('妈的这首不好听勒');
            break;
        case 'q':
            message.reply('看懒啊')
            break;
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
    }
})

client.login(process.env.token);