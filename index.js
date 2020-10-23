const Discord = require('discord.js');
const Canvas = require('canvas');

const client = new Discord.Client();

//////////////////////////////////////////////////////////////////////////////////////TESTING WELCOME BANNER FUNCTIONALITY

client.on('message', message => {
	if (message.content === '!joinfake') {
		client.emit('guildMemberAdd', message.member);
	}
});

//////////////////////////////////////////////////////////////////////////////////////WELCOME BANNER FOR NEW MEMBERS

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

//////////////////////////////////////////////////////////////////////////////////////BASIC INITIALISATIONS

const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const { send } = require('process');

app = express();


//////////////////////////////////////////////////////////////////////////////////////CLIENT LOGIN

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//////////////////////////////////////////////////////////////////////////////////////TIMETABLE VARIABLE INITIALISATIONS

var cns = {message: "Cryptography and Network Security(CNS) by George Mathew : https://meet.google.com/iyc-stko-ycn", subject: "CNS - George Mathew", link: "CNS : https://meet.google.com/iyc-stko-ycn?pli=1&authuser=2"};
var ml = {message: "Machine Learning(ML) by Ezu : https://meet.google.com/dni-bzrr-war", subject: "ML - Ezu", link: "ML : https://meet.google.com/dni-bzrr-war?pli=1&authuser=2"};
var cg = {message: "Computer Graphics(CG) by Jayasree : https://meet.google.com/odp-ayya-trc", subject: "CG - Jayasree", link: "CG : https://meet.google.com/odp-ayya-trc?pli=1&authuser=2"};
var csa = {message: "Computer System Architecture(CSA) by Mumthas : http://meet.google.com/aan-gzyr-xin", subject: "CSA - Mumthas", link: "CSA : http://meet.google.com/aan-gzyr-xin?pli=1&authuser=2"};
var dc = {message: "Distributed Computing(DC) by Bisna : http://meet.google.com/shm-xotx-ydd", subject: "DC - Bisna", link: "DC : http://meet.google.com/shm-xotx-ydd?pli=1&authuser=2"};
var dip = {message: "Digital Image Processing(DIP) by Jayasree : https://meet.google.com/rcm-cdom-hwh", subject: "DIP - Jayasree", link: "DIP : https://meet.google.com/rcm-cdom-hwh?pli=1&authuser=2"};
var lab = {message: "Compiler Design Lab(CDL) by Mumthas and Kala : http://meet.google.com/zvg-pobm-piz", subject: "CD Lab - Mumthas and Kala", link: "Lab : http://meet.google.com/zvg-pobm-piz?pli=1&authuser=2"};
var pp = {message: "Programming Paradigms in hell(PP) by Salsaraj: https://meet.google.com/jmd-dohm-zmn", subject: "PP - Salsaraj", link: "PP : https://meet.google.com/jmd-dohm-zmn?pli=1&authuser=2"};
var project = {message : "Project hour under Valsaraj", subject: "Project - Valsaraj", link: "Project hour under Valsaraj"};
var seminar = {message : "Seminar hour under Ajay James", subject: "Seminar - Ajay James", link: "Project hour under Ajay James"};
var honors = {message : "Honors : Digital Image Processing(DIP) by Jayasree : https://meet.google.com/rcm-cdom-hwh", subject: "Honors(DIP) - Jayasree", link: "Honors"};

var timetablearray = [[ pp,   ml, project,  seminar, seminar, honors ],
                      [ cns,  cg,      ml,       pp,     lab,    lab ],
                      [ csa,  cns,     cg,  seminar, seminar,   lab  ],
                      [ dc,   csa,     cg,      ml,     cns,  honors ],
                      [ cg,   dc,     csa,      pp,     dc,   honors ]];

     
var weekday = ["Sunday",  "Monday",  "Tuesday",  "Wednesday", "Thursday",  "Friday",  "Saturday"];


  
//////////////////////////////////////////////////////////////////////////////////////FUNCTION TO CONVERT TO MINUTES

  function tominutes(h, m){
    return h*60 + m;
 }

//////////////////////////////////////////////////////////////////////////////////////FUNCTION RETURNING THE HELP COMMAND STRING

 function help(){
   var commandstring = "\n**go to lab** or **go to csa** - display the subject meetlink\n\n**current class** - display current class\n\n**timetable today** - display today's timetable\n\n**timetable help** - display the commands available\n\n**!attendance** - sends a tts attendance alert message\n\n**get me cns** - get the auth=2 URL for the meet link(for me:P)";
   return commandstring;
 }


//////////////////////////////////////////////////////////////////////////////////////CRON SCHEDULE FUNCTION

  cron.schedule("* * * * *", function() {

    /////////////////////////////////////////////CHANNELS TO SEND TIMETABLES AND TESTING CHANNEL AND DM

    const channel = client.channels.cache.get('756451422069063711');
    const channelgallery1 = client.channels.cache.get('769089172921122847');
    const channelgallery2 = client.channels.cache.get('769089200775233576');
    const channelgallery3 = client.channels.cache.get('769089227643682816');
    const qdotdash2accountchannel = client.channels.cache.get('769102652717924385');
    //const userqdotdash = client.users.cache.get('713837921261846560');
    //const testingchannel = client.channels.cache.get('756397267413368913');

    ////////////////////////////////////////////CONVERTING UST TO INDIAN TIME

    var currentTime = new Date();
    var ISTOffset = 330;   // IST offset UTC +5:30 
    var indiaTime = new Date(currentTime.getTime() + (ISTOffset)*60000);
    var n = indiaTime.getDay();
    var timestring = indiaTime.getHours()+":"+indiaTime.getMinutes();

    //Remember on local test, time will be different due to offset

    /////////////////////////////////////////FUNCTION TO SEND TIMETABLE MESSAGE TO CHANNEL AND TESTING CHANNEL

    function sendTimeTableMessage(m){
      channel.send(m);
      qdotdash2accountchannel.send(m);
      channelgallery1.send(m + "?pli=1&authuser=1");
      channelgallery2.send(m + "?pli=1&authuser=2");
      channelgallery3.send(m + "?pli=1&authuser=3");
      //testingchannel.send(m);
    }

     /////////////////////////////////////////FUNCTION TO SEND TIMETABLE MESSAGE TO DM

    // function sendTimeTableMessagedm(m){
    //   userqdotdash.send(m);
    // }


    ///////////////////////////TIMETABLE SEND TO CHANNEL AND DM
    
    if(n!=6&&n!=0){
      if(indiaTime.getDay()==5)
      {
        if(timestring=="8:0"){
          sendTimeTableMessage(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].message);
          sendTimeTableMessagedm(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].link);
        }
        else if(timestring=="8:55"){
          sendTimeTableMessage("Hour 2: " + timetablearray[n-1][1].message);
          sendTimeTableMessagedm("Hour 2: " + timetablearray[n-1][1].link);
        }
        else if(timestring=="9:50"){  
          sendTimeTableMessage("Hour 3: " + timetablearray[n-1][2].message);
          sendTimeTableMessagedm("Hour 3: " + timetablearray[n-1][2].link);
        }
        else if(timestring=="10:45"){
          sendTimeTableMessage("Hour 4: " + timetablearray[n-1][3].message);
          sendTimeTableMessagedm("Hour 4: " + timetablearray[n-1][3].link);
        }
        else if(timestring=="11:40"){
          sendTimeTableMessage("Hour 5: " + timetablearray[n-1][4].message);
          sendTimeTableMessagedm("Hour 5: " + timetablearray[n-1][4].link);
        }
        else if(timestring=="14:0"){
          sendTimeTableMessage("Hour 6: " + timetablearray[n-1][5].message);
          sendTimeTableMessagedm("Hour 6: " + timetablearray[n-1][5].link);
        }
      }
      else                        
      {
	      if(timestring=="8:30"){
          sendTimeTableMessage(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].message);
          sendTimeTableMessagedm(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].link);
	      }
	      else if(timestring=="9:30"){
          sendTimeTableMessage("Hour 2: " + timetablearray[n-1][1].message);
          sendTimeTableMessagedm("Hour 2: " + timetablearray[n-1][1].link);
	      }
	      else if(timestring=="10:30"){  
          sendTimeTableMessage("Hour 3: " + timetablearray[n-1][2].message); 
          sendTimeTableMessagedm("Hour 3: " + timetablearray[n-1][2].link);
	      }
	      else if(timestring=="11:30"){
          sendTimeTableMessage("Hour 4: " + timetablearray[n-1][3].message);
          sendTimeTableMessagedm("Hour 4: " + timetablearray[n-1][3].link);
	      }
	      else if(timestring=="12:30"){
          sendTimeTableMessage("Hour 5: " + timetablearray[n-1][4].message);
          sendTimeTableMessagedm("Hour 5: " + timetablearray[n-1][4].link);
	      }
	      else if(timestring=="14:0"){
          sendTimeTableMessage("Hour 6: " + timetablearray[n-1][5].message);
          sendTimeTableMessagedm("Hour 6: " + timetablearray[n-1][5].link);
	      }
      }
    }
  });

//////////////////////////////////////////////////////////////////////////////////////SENDING REPLIES TO MESSAGES
  client.on('message', msg => {
    var messagestring = msg.content.toLowerCase();
    if (messagestring === 'go to cns') {
      msg.reply(cns.message);
    }
    else if(messagestring === 'get me cns'){
      msg.reply(cns.link);
    }
    else if(messagestring === 'go to ml'){
        msg.reply(ml.message);
    }
    else if(messagestring === 'get me ml'){
      msg.reply(ml.link);
    }
    else if(messagestring === 'go to cg'){
        msg.reply(cg.message);
    }
    else if(messagestring === 'get me cg'){
      msg.reply(cg.link);
    }
    else if(messagestring === 'go to csa'){
        msg.reply(csa.message);
    }
    else if(messagestring === 'get me csa'){
      msg.reply(csa.link);
    }
    else if(messagestring === 'go to dc'){
        msg.reply(dc.message);
    } 
    else if(messagestring === 'get me dc'){
      msg.reply(dc.link);
    }
    else if(messagestring === 'go to dip'){
        msg.reply(dip.message);
    }
    else if(messagestring === 'go to lab'){
        msg.reply(lab.message);
    }
    else if(messagestring === 'get me lab'){
      msg.reply(lab.link);
    }
    else if(messagestring === 'go to pp'){
      msg.reply(pp.message);
    }
    else if(messagestring === 'get me pp'){
    msg.reply(pp.link);
    }
    else if(messagestring === '!attendance'){
      msg.reply("attendance alert, attendance alert, attendance alert", {tts: true});
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

//////////////////////////////////////////////////////////////////////////////////////AUTHENTICATION


client.login(process.env.TOKEN);
