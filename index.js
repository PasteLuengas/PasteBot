const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(message.content == 'paste!help'){
        /* message.channel.send({embed: {
            title: 'Ayuda',
            color: 3447003,
            description: 'Aqui as reglas:',
            field: [
                {
                    name: 'Prefijo:',
                    value: 'paste!'
                },
                {
                    name: 'youtube / discord / bitview / onlyfans',
                    value: 'Muestra las redes sociales de la pasta'
                }
            ]
          }});
    } */
    message.channel.send({embed: {
        color: 3447003,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
        },
        title: "Ayuda",
        description: "El prefijo es 'paste!' (sin comillas) ",
        fields: [{
            name: "youtube / discord / bitview / onlyfans",
            value: "Para ver las redes sociales de la pasta",
          },
          {
            name: "Dance",
            value: "Bailar (pero existe la pequeña posiblidad de que te salga otra cosa)"
          },
          {
            name: "Add",
            value: "Puedes [añadir este bot a tu server](https://discord.gg/QuzpTcc) con este comando"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: 'Atte. Paste'
        }
      }
  });
}
    if(message.content === 'grumi es gay'){
        message.reply('si');
    }
    if(message.content === 'paste!youtube'){
        message.reply('https://youtube.com/PasteLuengas');
    }
    if(message.content === 'paste!discord'){
        message.reply('https://discord.gg/QuzpTcc');
    }

    if(message.content === 'paste!bitview'){
        message.reply('http://bitview.net/profile.php?user=PASTE');
    }
    if(message.content == 'paste!cum'){
        message.reply('se ha corrido :cringepipe:');
    }
    if(message.content == 'paste!onlyfans'){
        message.reply('matese');
    }
    if(message.content == 'paste!gay'){
        message.reply('matese');
    }
    if(message.content == 'paste!myavatar'){
        message.reply(message.author.displayAvatarURL());
    }
    if(message.content == 'paste!myavatar'){
        message.reply(message.author.displayAvatarURL());
    }
    // return Math.random() * (max - min) + min;
    if(message.content == 'paste!dance'){
        if(Math.random() * (9 - 1) + 1 < 7){
            message.reply('https://i.pinimg.com/originals/5a/c5/50/5ac550d16dc31f593fd3b316eaf47d42.gif');
        }
        if(Math.random() * (9 - 1) + 1 > 7){
            message.reply('You like D&D, Audrey Hepburn, Fangoria, Harry Houdini and croquet. But you can’t dance');
        }
    }
    if(message.content == 'paste!add'){
        message.reply('abre esta url para añadir a PasteBot a tu servidor https://discord.com/api/oauth2/authorize?client_id=759853780392738817&permissions=8&scope=bot');
    }
    if(message.content == 'paste!add'){
        message.reply('abre esta url para añadir a PasteBot a tu servidor https://discord.com/api/oauth2/authorize?client_id=759853780392738817&permissions=8&scope=bot');
    }
})

client.login('XXXX');
