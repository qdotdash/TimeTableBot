const Discord = require('discord.js');

const client = new Discord.Client();

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


    var cns = {message: "Cryptography and Network Security(CNS) by George Mathew : https://meet.google.com/iyc-stko-ycn"};
    var ml = {message: "Machine Learning(ML) by Ezu : https://meet.google.com/dni-bzrr-war"};
    var cg = {message: "Computer Graphics(CG) by Jayasree : https://meet.google.com/odp-ayya-trc"};
    var csa = {message: "Computer System Architecture(CSA) by Mumthas : http://meet.google.com/aan-gzyr-xin"};
    var dc = {message: "Distributed Computing(DC) by Bisna : http://meet.google.com/shm-xotx-ydd"};
    var dip = {message: "Digital Image Processing(DIP) by Jayasree : https://meet.google.com/rcm-cdom-hwh"};
    var lab = {message: "Compiler Design Lab(CDL) by Mumthas and Kala : http://meet.google.com/zvg-pobm-piz"};
    var pp = {message: "Programming Paradigms(PP) : What the hell is this"};
    var project = {message : "Project hour under Valsaraj"};
    var seminar = {message : "Seminar hour under Ajay James"};
    var honors = {message : "Honors : Digital Image Processing(DIP) by Jayasree : https://meet.google.com/rcm-cdom-hwh"};

    var monday = {p1:pp, p2:ml, p3:project, p4:seminar, p5:seminar, p6:honors};
    var tuesday = {p1:cns, p2:cg, p3:ml, p4:pp, p5:lab, p6:lab};
    var wednesday = {p1:csa, p2:cns, p3:cg, p4:seminar, p5:seminar, p6:lab};
    var thursday = {p1:dc, p2:csa, p3:cg, p4:ml, p5:cns, p6:honors};
    var friday = {p1:cg, p2:dc, p3:csa, p4:pp, p5:dc, p6:honors};

    var timetablearray = new Array(5);
    for(var i=0; i<5; i++){
      timetablearray[i] = new Array(6)
    }

    timetablearray[0][0] = pp;timetablearray[0][1] = ml;timetablearray[0][2] = project;timetablearray[0][3] = seminar;timetablearray[0][4] = seminar;timetablearray[0][5] = honors;
    timetablearray[1][0] = cns;timetablearray[1][1] = cg;timetablearray[1][2] = ml;timetablearray[1][3] = pp;timetablearray[1][4] = lab;timetablearray[1][5] = lab;
    timetablearray[2][0] = csa;timetablearray[2][1] = cns;timetablearray[2][2] = cg;timetablearray[2][3] = seminar;timetablearray[2][4] = seminar;timetablearray[2][5] = lab;
    timetablearray[3][0] = dc;timetablearray[3][1] = csa;timetablearray[3][2] = cg;timetablearray[3][3] = ml;timetablearray[3][4] = cns;timetablearray[3][5] = honors;
    timetablearray[4][0] = cg;timetablearray[4][1] = dc;timetablearray[4][2] = csa;timetablearray[4][3] = pp;timetablearray[4][4] = dc;timetablearray[4][5] = honors;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


  cron.schedule("* * * * *", function() {
    const channel = client.channels.cache.get('756397267413368913');
    var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    var n = indiaTime.getDay()
    var timestring = indiaTime.getHours()+":"+indiaTime.getMinutes();
    channel.send(timestring)
    // if(timestring=="12:00"){
    //   channel.send(timetablearray[n-1][0].message);
    // }
    // else if(timestring=="12:01"){
    //   channel.send(timetablearray[n-1][1].message);
    // }
    // else if(timestring=="12:02"){  
    //   channel.send(timetablearray[n-1][2].message);
    // }
    // else if(timestring=="12:03"){
    //   channel.send(timetablearray[n-1][3].message);
    // }
    // else if(timestring=="12:04"){
    //   channel.send(timetablearray[n-1][4].message);
    // }
    // else if(timestring=="12:05"){
    //   channel.send(timetablearray[n-1][5].message);
    // }
//     const user = <client>.users.cache.get('<id>');
// user.send('<content>'); send dm 752835857081303052
  });


  //lower case this case insensitive
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
    else if(msg.content === 'go to dip'){
        msg.reply('https://meet.google.com/rcm-cdom-hwh');
    }
    else if(msg.content === 'go to lab'){
        msg.reply('http://meet.google.com/zvg-pobm-piz');
    }
  });



client.login(process.env.TOKEN);
