const Discord = require('discord.js');
const Canvas = require('canvas');

const client = new Discord.Client();


client.on('message', message => {
	if (message.content === '!joinfake') {
		client.emit('guildMemberAdd', message.member);
	}
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./welcomeeva.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	
	ctx.font = ctx.fillText(canvas, `${member.displayName}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer());

	channel.send(attachment);
});




const cron = require("node-cron");
    const express = require("express");
    const fs = require("fs");

    app = express();
    //honors in seperate channel
    //clear up subjects
    //time duration of the period
    //using seperate server or dm or channel permission learn
    //7hour day check
    //test other cron hours
    //adding birthdays


    var cns = {message: "Cryptography and Network Security(CNS) by George Mathew : https://meet.google.com/iyc-stko-ycn", subject: "CNS - George Mathew"};
    var ml = {message: "Machine Learning(ML) by Ezu : https://meet.google.com/dni-bzrr-war", subject: "ML - Ezu"};
    var cg = {message: "Computer Graphics(CG) by Jayasree : https://meet.google.com/odp-ayya-trc", subject: "CG - Jayasree"};
    var csa = {message: "Computer System Architecture(CSA) by Mumthas : http://meet.google.com/aan-gzyr-xin", subject: "CSA - Mumthas"};
    var dc = {message: "Distributed Computing(DC) by Bisna : http://meet.google.com/shm-xotx-ydd", subject: "DC - Bisna"};
    var dip = {message: "Digital Image Processing(DIP) by Jayasree : https://meet.google.com/rcm-cdom-hwh", subject: "DIP - Jayasree"};
    var lab = {message: "Compiler Design Lab(CDL) by Mumthas and Kala : http://meet.google.com/zvg-pobm-piz", subject: "CD Lab - Mumthas and Kala"};
    var pp = {message: "Programming Paradigms(PP) : https://meet.google.com/jmd-dohm-zmn", subject: "PP - Lucifer"};
    var project = {message : "Project hour under Valsaraj", subject: "Project - Valsaraj"};
    var seminar = {message : "Seminar hour under Ajay James", subject: "Seminar - Ajay James"};
    var honors = {message : "Honors : Digital Image Processing(DIP) by Jayasree : https://meet.google.com/rcm-cdom-hwh", subject: "Honors(DIP) - Jayasree"};

    var timetablearray = [[ pp,   ml, project,  seminar, seminar, honors ],
                          [ cns,  cg,      ml,       pp,     lab,    lab ],
                          [ csa,  cns,     cg,  seminar, seminar,   lab  ],
                          [ dc,   csa,     cg,      ml,     cns,  honors ],
                          [ cg,   dc,     csa,      pp,     dc,   honors ]];

     
  var weekday = ["Sunday",  "Monday",  "Tuesday",  "Wednesday", "Thursday",  "Friday",  "Saturday"];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


  cron.schedule("* * * * *", function() {
    const channel = client.channels.cache.get('756451422069063711');
    const channelgallery = client.channels.cache.get('752834723973300247');

    var currentTime = new Date();

    var ISTOffset = 330;   // IST offset UTC +5:30 

var indiaTime = new Date(currentTime.getTime() + (ISTOffset)*60000);

    var n = indiaTime.getDay()
    var timestring = indiaTime.getHours()+":"+indiaTime.getMinutes();
    //use a single current class var to assign the current class and show it when the current class is called
    
    if(n!=6&&n!=0){
      if(indiaTime.getDay()==5)
      {
	       if(timestring=="8:0"){
    channel.send(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].message);
    channelgallery.send(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].message);
	      }
	      else if(timestring=="8:55"){
    channel.send("Hour 2: " + timetablearray[n-1][1].message);
    channelgallery.send("Hour 2: " + timetablearray[n-1][1].message);
	      }
	      else if(timestring=="9:50"){  
    channel.send("Hour 3: " + timetablearray[n-1][2].message); 
    channelgallery.send("Hour 3: " + timetablearray[n-1][2].message);
	      }
	      else if(timestring=="10:45"){
    channel.send("Hour 4: " + timetablearray[n-1][3].message);
    channelgallery.send("Hour 4: " + timetablearray[n-1][3].message);
	      }
	      else if(timestring=="11:40"){
    channel.send("Hour 5: " + timetablearray[n-1][4].message);
    channelgallery.send("Hour 5: " + timetablearray[n-1][4].message);
	      }
	      else if(timestring=="14:0"){
    channel.send("Hour 6: " + timetablearray[n-1][5].message);
    channelgallery.send("Hour 6: " + timetablearray[n-1][5].message);
	      }
      }
      else
      {
	      if(timestring=="8:30"){
    channel.send(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].message);
    channelgallery.send(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].message);
	      }
	      else if(timestring=="9:30"){
    channel.send("Hour 2: " + timetablearray[n-1][1].message);
    channelgallery.send("Hour 2: " + timetablearray[n-1][1].message);
	      }
	      else if(timestring=="10:30"){  
    channel.send("Hour 3: " + timetablearray[n-1][2].message); 
    channelgallery.send("Hour 3: " + timetablearray[n-1][2].message);
	      }
	      else if(timestring=="11:30"){
    channel.send("Hour 4: " + timetablearray[n-1][3].message);
    channelgallery.send("Hour 4: " + timetablearray[n-1][3].message);
	      }
	      else if(timestring=="12:30"){
    channel.send("Hour 5: " + timetablearray[n-1][4].message);
    channelgallery.send("Hour 5: " + timetablearray[n-1][4].message);
	      }
	      else if(timestring=="14:0"){
    channel.send("Hour 6: " + timetablearray[n-1][5].message);
    channelgallery.send("Hour 6: " + timetablearray[n-1][5].message);
	      }
      }
    }
//     const user = <client>.users.cache.get('<id>');
// user.send('<content>'); send dm 752835857081303052
  });

  function tominutes(h, m){
     return h*60 + m;
  }

  function help(){
    var commandstring = "\n**go to lab** or **go to csa** - display the subject meetlink\n\n**current class** - display current class\n\n**timetable today** - display today's timetable\n\n**timetable help** - display the commands available";
    return commandstring;
  }


  //lower case this case insensitive
  client.on('message', msg => {
    var messagestring = msg.content.toLowerCase();
    if (messagestring === 'go to cns') {
      msg.reply(cns.message);
    }
    else if(messagestring === 'go to ml'){
        msg.reply(ml.message);
    }
    else if(messagestring === 'go to cg'){
        msg.reply(cg.message);
    }
    else if(messagestring === 'go to csa'){
        msg.reply(csa.message);
    }
    else if(messagestring === 'go to dc'){
        msg.reply(dc.message);
    }
    else if(messagestring === 'go to dip'){
        msg.reply(dip.message);
    }
    else if(messagestring === 'go to lab'){
        msg.reply(lab.message);
    }
    else if(messagestring === 'current class'){
      var currentTime = new Date();
      var ISTOffset = 330;   // IST offset UTC +5:30 
      var indiaTime = new Date(currentTime.getTime() + (ISTOffset)*60000);
      var n = indiaTime.getDay()
      var hours = indiaTime.getHours();
      var minutes = indiaTime.getMinutes();
      if(n!=6&&n!=0){
        if(tominutes(hours, minutes)>tominutes(8, 30)&&tominutes(hours, minutes)<=tominutes(9,30)){
          msg.reply("Current class : " + timetablearray[n-1][0].message);
        }
        else if(tominutes(hours, minutes)>tominutes(9, 30)&&tominutes(hours, minutes)<=tominutes(10,30)){
          msg.reply("Current class : " + timetablearray[n-1][1].message);
        }
        else if(tominutes(hours, minutes)>tominutes(10, 30)&&tominutes(hours, minutes)<=tominutes(11,30)){
          msg.reply("Current class : " + timetablearray[n-1][2].message); 
        }
        else if(tominutes(hours, minutes)>tominutes(11, 30)&&tominutes(hours, minutes)<=tominutes(12,30)){
          msg.reply("Current class : " + timetablearray[n-1][3].message);
        }
        else if(tominutes(hours, minutes)>tominutes(12, 30)&&tominutes(hours, minutes)<=tominutes(13,30)){
          msg.reply("Current class : " + timetablearray[n-1][4].message);
        }
        else if(tominutes(hours, minutes)>tominutes(14, 0)&&tominutes(hours, minutes)<=tominutes(15,0)){
          msg.reply("Current class : " + timetablearray[n-1][5].message);
        }
        else{
          msg.reply("No class hours now bruh...")
        }
      }
      else{
        msg.reply("Go back to sleep, its " + weekday[indiaTime.getDay()]);
      }
  }
  else if(messagestring === 'timetable today'){
    var currentTime = new Date();
    var ISTOffset = 330;   // IST offset UTC +5:30 
    var indiaTime = new Date(currentTime.getTime() + (ISTOffset)*60000);
    var n = indiaTime.getDay()
    if(n!=6&&n!=0){
      var i;
      var timetabletoday = "\n";
      for(i=0; i<6; i++){
        timetabletoday = timetabletoday + (i+1) + ". " + timetablearray[n-1][i].subject + "\n";   
      }
      msg.reply(timetabletoday);
    }
    else{
      msg.reply("Go back to sleep, its " + weekday[indiaTime.getDay()]);
    }
  }
  else if(messagestring === 'timetable help'){
      msg.reply(help());
    }
  });



client.login(process.env.TOKEN);
