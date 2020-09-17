const Discord = require('discord.js');

const client = new Discord.Client();

const cron = require("node-cron");
    const express = require("express");
    const fs = require("fs");

    app = express();


    


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  cron.schedule("* * * * *", function() {
    const channel = client.channels.cache.get('756049115267465256');
    channel.send('Test on Heroku');

//     const user = <client>.users.cache.get('<id>');
// user.send('<content>'); send dm 752835857081303052
  });


  
  client.on('message', msg => {
    if (msg.content === 'go to cns') {
      msg.reply('https://meet.google.com/iyc-stko-ycn');
    }
    else if(msg.content === 'go to ml'){
        msg.reply('https://meet.google.com/dni-bzrr-war');
    }
    else if(msg.content === 'go to cg'){
        msg.reply('https://meet.google.com/odp-ayya-trc');
    }
    else if(msg.content === 'go to csa'){
        msg.reply('http://meet.google.com/aan-gzyr-xin');
    }
    else if(msg.content === 'go to dc'){
        msg.reply('http://meet.google.com/shm-xotx-ydd');
    }
    else if(msg.content === 'go to dlp'){
        msg.reply('https://meet.google.com/rcm-cdom-hwh');
    }
    else if(msg.content === 'go to lab'){
        msg.reply('http://meet.google.com/zvg-pobm-piz');
    }
  });



client.login(process.env.TOKEN);
