const Discord = require("discord.js");
const Canvas = require("canvas");

// var TelegramBot = require('node-telegram-bot-api');
// var token = '1591437042:AAGvUjQdo4_pUCI0_KWJktfHXS4XyPlxQ2g'
// var bot = new TelegramBot(token, {polling:true});

const client = new Discord.Client();

//////////////////////////////////////////////////////////////////////////////////////TESTING WELCOME BANNER FUNCTIONALITY

client.on("message", (message) => {
  if (message.content === "!joinfake") {
    client.emit("guildMemberAdd", message.member);
  }
});

//////////////////////////////////////////////////////////////////////////////////////WELCOME BANNER FOR NEW MEMBERS

client.on("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "general"
  );
  if (!channel) return;

  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage("./welcomeeva.jpg");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.font = "28px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    "Welcome to the server,",
    canvas.width / 2.5,
    canvas.height / 3.5
  );

  ctx.font = ctx.fillText(canvas, `${member.displayName}`);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(
    `${member.displayName}`,
    canvas.width / 2.5,
    canvas.height / 1.8
  );

  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  const avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: "jpg" })
  );
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer());

  channel.send(attachment);
});

//////////////////////////////////////////////////////////////////////////////////////BASIC INITIALISATIONS

const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const { send } = require("process");

app = express();

//////////////////////////////////////////////////////////////////////////////////////CLIENT LOGIN

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//////////////////////////////////////////////////////////////////////////////////////TIMETABLE VARIABLE INITIALISATIONS

var nde = {
  message:
    "NDE\nEIA : https://meet.google.com/okq-nkfh-bxw\n\nEE : https://meet.google.com/lookup/gkbfzhmqg4?authuser=3&hs=179",
  subject: "NDE",
  link:
    "NDE\nEIA : https://meet.google.com/okq-nkfh-bxw\n\nEE : https://meet.google.com/lookup/gkbfzhmqg4?authuser=3&hs=179",
  code: "nde",
};
var es = {
  message: "ES : https://meet.google.com/jxz-gmkm-rqe",
  subject: "ES",
  link: "ES : https://meet.google.com/jxz-gmkm-rqe",
  code: "es",
};
var pis = {
  message: "PIS : https://meet.google.com/ejh-bdiy-yuy",
  subject: "PIS",
  link: "https://meet.google.com/ejh-bdiy-yuy",
  code: "pis",
};
var ai = {
  message: "AI : https://meet.google.com/tkc-kqpe-sww",
  subject: "AI",
  link: "https://meet.google.com/tkc-kqpe-sww",
  code: "ai",
};
var project = {
  message: "Project",
  subject: "Project",
  link: "Project",
  code: "project",
};
var dm = {
  message: "DM : https://meet.google.com/jia-uhxo-kto",
  subject: "DM",
  link: "DM : https://meet.google.com/jia-uhxo-kto",
  code: "dm",
};
// var lab = {message: "Compiler Design Lab(CDL) by Mumthas and Kala : http://meet.google.com/zvg-pobm-piz", subject: "CD Lab - Mumthas and Kala", link: "Lab : http://meet.google.com/zvg-pobm-piz?pli=1&authuser=2", code: "lab"};
// var pp = {message: "Programming Paradigms in hell(PP) by Salsaraj: https://meet.google.com/vdd-thdj-dxr", subject: "PP - Salsaraj", link: "PP : https://meet.google.com/jmd-dohm-zmn?pli=1&authuser=2", code: "pp"};
// var project = {message : "Project hour under Valsaraj: https://meet.google.com/nfq-tjro-xjc", subject: "Project - Valsaraj", link: "https://meet.google.com/nfq-tjro-xjc", code: "sap"};
// var seminar = {message : "Seminar hour under Ajay James: https://meet.google.com/nfq-tjro-xjc", subject: "Seminar - Ajay James", link: "https://meet.google.com/nfq-tjro-xjc", code: "sap"};
// var honors = {message : "Honors : Digital Image Processing(DIP) by Jayasree : https://meet.google.com/rcm-cdom-hwh", subject: "Honors(DIP) - Jayasree", link: "Honors", code: "hnrs"};

var timetablearray = [
  [project, nde, es, pis, ai, project],
  [project, es, nde, project, dm, project],
  [pis, dm, es, nde, ai, project],
  [project, dm, pis, project, ai, project],
];

var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//////////////////////////////////////////////////////////////////////////////////////FUNCTION TO CONVERT TO MINUTES

function tominutes(h, m) {
  return h * 60 + m;
}

//////////////////////////////////////////////////////////////////////////////////////FUNCTION RETURNING THE HELP COMMAND STRING

function help() {
  var commandstring =
    "\n**go to es** or **go to pis** - display the subject meetlink\n\n**current class** - display current class\n\n**timetable today** - display today's timetable\n\n**timetable help** - display the commands available\n\n**!attendance** - sends a tts attendance alert message\n\n**get me cns** - get the auth=2 URL for the meet link(for me:P)\n\n**go to viva** - get viva links\n\n**timetable all** - print complete timetable";
  return commandstring;
}

//////////////////////////////////////////////////////////////////////////////////////CRON SCHEDULE FUNCTION

cron.schedule("* * * * *", function () {
  /////////////////////////////////////////////CHANNELS TO SEND TIMETABLES AND TESTING CHANNEL AND DM

  const channel = client.channels.cache.get("756451422069063711");
  // const channel = client.channels.cache.get("836515441014210600"); //test channel
  // const channelgallery1 = client.channels.cache.get('769089172921122847');
  // const channelgallery2 = client.channels.cache.get('769089200775233576');
  // const channelgallery3 = client.channels.cache.get('769089227643682816');
  // const qdotdash2accountchannel = client.channels.cache.get('769102652717924385');
  //const userqdotdash = client.users.cache.get('713837921261846560');
  //const testingchannel = client.channels.cache.get('756397267413368913');

  ////////////////////////////////////////////CONVERTING UST TO INDIAN TIME

  var currentTime = new Date();
  var ISTOffset = 330; // IST offset UTC +5:30
  // var ISTOffset = 0; //test
  var indiaTime = new Date(currentTime.getTime() + ISTOffset * 60000);
  var n = indiaTime.getDay();
  var timestring = indiaTime.getHours() + ":" + indiaTime.getMinutes();

  //Remember on local test, time will be different due to offset

  /////////////////////////////////////////FUNCTION TO SEND TIMETABLE MESSAGE TO CHANNEL AND TESTING CHANNEL

  function sendTimeTableMessage(m) {
    channel.send(m);
    // qdotdash2accountchannel.send(m);
    // channelgallery1.send(m + "?pli=1&authuser=1");
    // channelgallery2.send(m + "?pli=1&authuser=2");
    // channelgallery3.send(m + "?pli=1&authuser=3");
    //testingchannel.send(m);
  }

  /////////////////////////////////////////FUNCTION TO SEND TIMETABLE MESSAGE TO DM

  function sendTimeTableMessagedm(m) {
    // userqdotdash.send(m);
  }

  ///////////////////////////TIMETABLE SEND TO CHANNEL AND DM

  if (n != 6 && n != 0 && n != 5) {
    // if(indiaTime.getDay()==5)
    // {
    //   if(timestring=="8:0"){
    //     sendTimeTableMessage(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].message);
    //     sendTimeTableMessagedm(weekday[indiaTime.getDay()] + ", Hour 1: " + timetablearray[n-1][0].link);
    //   }
    //   else if(timestring=="8:55"){
    //     sendTimeTableMessage("Hour 2: " + timetablearray[n-1][1].message);
    //     sendTimeTableMessagedm("Hour 2: " + timetablearray[n-1][1].link);
    //   }
    //   else if(timestring=="9:50"){
    //     sendTimeTableMessage("Hour 3: " + timetablearray[n-1][2].message);
    //     sendTimeTableMessagedm("Hour 3: " + timetablearray[n-1][2].link);
    //   }
    //   else if(timestring=="10:45"){
    //     sendTimeTableMessage("Hour 4: " + timetablearray[n-1][3].message);
    //     sendTimeTableMessagedm("Hour 4: " + timetablearray[n-1][3].link);
    //   }
    //   else if(timestring=="11:40"){
    //     sendTimeTableMessage("Hour 5: " + timetablearray[n-1][4].message);
    //     sendTimeTableMessagedm("Hour 5: " + timetablearray[n-1][4].link);
    //   }
    //   else if(timestring=="14:0"){
    //     sendTimeTableMessage("Hour 6: " + timetablearray[n-1][5].message);
    //     sendTimeTableMessagedm("Hour 6: " + timetablearray[n-1][5].link);
    //   }
    // }
    // else
    // {
    if (timestring == "8:30") {
      sendTimeTableMessage(
        weekday[indiaTime.getDay()] +
          ", Hour 1: " +
          timetablearray[n - 1][0].message
      );
      sendTimeTableMessagedm(
        weekday[indiaTime.getDay()] +
          ", Hour 1: " +
          timetablearray[n - 1][0].link
      );
    } else if (timestring == "9:30") {
      sendTimeTableMessage("Hour 2: " + timetablearray[n - 1][1].message);
      sendTimeTableMessagedm("Hour 2: " + timetablearray[n - 1][1].link);
    } else if (timestring == "10:30") {
      sendTimeTableMessage("Hour 3: " + timetablearray[n - 1][2].message);
      sendTimeTableMessagedm("Hour 3: " + timetablearray[n - 1][2].link);
    } else if (timestring == "11:30") {
      sendTimeTableMessage("Hour 4: " + timetablearray[n - 1][3].message);
      sendTimeTableMessagedm("Hour 4: " + timetablearray[n - 1][3].link);
    } else if (timestring == "12:30") {
      sendTimeTableMessage("Hour 5: " + timetablearray[n - 1][4].message);
      sendTimeTableMessagedm("Hour 5: " + timetablearray[n - 1][4].link);
    } else if (timestring == "14:0") {
      sendTimeTableMessage("Hour 6: " + timetablearray[n - 1][5].message);
      sendTimeTableMessagedm("Hour 6: " + timetablearray[n - 1][5].link);
      // }
    }
  }
});

//////////////////////////////////////////////////////////////////////////////////////SENDING REPLIES TO MESSAGES
client.on("message", (msg) => {
  var currentTime = new Date();
  var ISTOffset = 330; // IST offset UTC +5:30
  var indiaTime = new Date(currentTime.getTime() + ISTOffset * 60000);
  var n = indiaTime.getDay();
  var hours = indiaTime.getHours();
  var minutes = indiaTime.getMinutes();

  /////////////////////////////////////////FUNCTION TO PRINT COMPLETE TIMETABLE

  function printTimeTable() {
    var ttstring = "\n";
    for (let i = 0; i < 4; i++) {
      if (i + 1 == n) ttstring += "**" + weekday[i + 1] + "**" + ":\t";
      else ttstring += weekday[i + 1] + ":\t";

      for (let j = 0; j < 6; j++) {
        if (i + 1 == n) {
          ttstring += "**" + timetablearray[i][j].code.toUpperCase() + "**";
        } else {
          ttstring += timetablearray[i][j].code.toUpperCase();
        }
        if (j != 5) {
          ttstring += " --- ";
        }
      }
      if (i != 4) {
        ttstring += "\n\n";
      }
    }
    return ttstring;
  }

  var messagestring = msg.content.toLowerCase();
  if (messagestring === "go to nde") {
    msg.reply(nde.message);
  } else if (messagestring === "go to es") {
    msg.reply(es.link);
  } else if (messagestring === "go to pis") {
    msg.reply(pis.message);
  } else if (messagestring === "go to project") {
    msg.reply(project.link);
  } else if (messagestring === "go to dm") {
    msg.reply(dm.message);
  } else if (messagestring === "go to ai") {
    msg.reply(ai.link);
  }
  // else if(messagestring === 'go to csa'){
  //     msg.reply(csa.message);
  // }
  // else if(messagestring === 'get me csa'){
  //   msg.reply(csa.link);
  // }
  // else if(messagestring === 'go to dc'){
  //     msg.reply(dc.message);
  // }
  // else if(messagestring === 'get me dc'){
  //   msg.reply(dc.link);
  // }
  // else if(messagestring === 'go to dip'){
  //     msg.reply(dip.message);
  // }
  // else if(messagestring === 'go to lab'){
  //     msg.reply(lab.message);
  // }
  // else if(messagestring === 'get me lab'){
  //   msg.reply(lab.link);
  // }
  // else if(messagestring === 'go to pp'){
  //   msg.reply(pp.message);
  // }
  // else if(messagestring === 'get me pp'){
  // msg.reply(pp.link);
  // }
  // else if(messagestring === 'go to sap'){
  //   msg.reply(seminar.message);
  // }
  // else if(messagestring === 'go to viva'){
  //   msg.reply("\nBatch 1 (1-22) : http://meet.google.com/xhc-ddjc-tpx\nBatch 2 (23-47) : http://meet.google.com/rmk-imxy-jee\nBatch 2 (48-68) : http://meet.google.com/rmk-imxy-jee");
  // }
  // else if(messagestring === '!attendance'){
  //   msg.reply("attendance alert, attendance alert, attendance alert", {tts: true});
  // }
  else if (messagestring === "timetable all") {
    msg.reply(printTimeTable());
  } else if (messagestring === "current class") {
    if (n != 6 && n != 0 && n != 5) {
      if (
        tominutes(hours, minutes) > tominutes(8, 30) &&
        tominutes(hours, minutes) <= tominutes(9, 30)
      ) {
        msg.reply("Current class : " + timetablearray[n - 1][0].message);
      } else if (
        tominutes(hours, minutes) > tominutes(9, 30) &&
        tominutes(hours, minutes) <= tominutes(10, 30)
      ) {
        msg.reply("Current class : " + timetablearray[n - 1][1].message);
      } else if (
        tominutes(hours, minutes) > tominutes(10, 30) &&
        tominutes(hours, minutes) <= tominutes(11, 30)
      ) {
        msg.reply("Current class : " + timetablearray[n - 1][2].message);
      } else if (
        tominutes(hours, minutes) > tominutes(11, 30) &&
        tominutes(hours, minutes) <= tominutes(12, 30)
      ) {
        msg.reply("Current class : " + timetablearray[n - 1][3].message);
      } else if (
        tominutes(hours, minutes) > tominutes(12, 30) &&
        tominutes(hours, minutes) <= tominutes(13, 30)
      ) {
        msg.reply("Current class : " + timetablearray[n - 1][4].message);
      } else if (
        tominutes(hours, minutes) > tominutes(14, 0) &&
        tominutes(hours, minutes) <= tominutes(15, 0)
      ) {
        msg.reply("Current class : " + timetablearray[n - 1][5].message);
      } else {
        msg.reply("It's too late for you and your white horse, to come around");
      }
    } else {
      msg.reply("You call me up and break me like a promise");
    }
  } else if (messagestring === "timetable today") {
    var currentTime = new Date();
    var ISTOffset = 330; // IST offset UTC +5:30
    var indiaTime = new Date(currentTime.getTime() + ISTOffset * 60000);
    var n = indiaTime.getDay();
    if (n != 6 && n != 0 && n != 5) {
      var i;
      var timetabletoday = "\n";
      for (i = 0; i < 5; i++) {
        timetabletoday =
          timetabletoday +
          (i + 1) +
          ". " +
          timetablearray[n - 1][i].subject +
          "\n";
      }
      msg.reply(timetabletoday);
    } else {
      msg.reply("You call me up and break me like a promise");
    }
  } else if (messagestring === "timetable help") {
    msg.reply(help());
  }
});

//////////////////////////////////////////////////////////////////////////////////////AUTHENTICATION
client.login(process.env.TOKEN);
