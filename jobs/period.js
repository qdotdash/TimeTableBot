const cron = require('node-cron');

// Monday to Thursday timings "Minute Hour" format
let time_M_T = ["30 8", "30 9", "30 10", "30 11", "30 12", "0 14"];  
// Friday Timings
let time_F = ["0 8", "55 8", "50 9", "45 10", "40 11", "30 12"];

exports.ClassReminder = (Client, timetable)=>{
    const channel = Client.channels.cache.get('756451422069063711');
    const channelgallery = Client.channels.cache.get('752834723973300247');
    for (let i = 0; i < time_M_T.length; i++) {
        cron.schedule(time_M_T[i]+" * * 1-4",()=>{
            let currentTime = new Date(), ISTOffset = 330;

            let indiaTime = new Date(currentTime.getTime() + (ISTOffset)*60000);
            let day = indiaTime.getDay();
            channel.send(`Hour ${i+1}: ` + timetable[day-1][i].message);
            channelgallery.send(`Hour ${i+1}: ` + timetable[day-1][i].message);
            console.log(`Day ${day} Hour ${i+1} Notification Sent`);
        });
    }
    for (let i = 0; i < time_F.length; i++) {
        cron.schedule(time_F[i]+" * * 5",()=>{
            let currentTime = new Date(), ISTOffset = 330;

            let indiaTime = new Date(currentTime.getTime() + (ISTOffset)*60000);
            let day = indiaTime.getDay();
            
            channel.send(`Hour ${i+1}: ` + timetable[day-1][i].message);
            channelgallery.send(`Hour ${i+1}: ` + timetable[day-1][i].message);
        });
    }
}

