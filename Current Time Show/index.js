
const options = { weekday: 'long', year:'numeric', month:'long',day:'numeric'};
setInterval(()=>{
let a = new Date();
let hour = a.getHours();
let minute = a.getMinutes();
let second = a.getSeconds();
minute = (minute < 10 ? "0": "") + minute;
second = (second < 10 ? "0": "") + second;
hour = (hour > 12 ? hour-12 : hour);
hour = (hour == 0 ? 12 : hour);
hour = (hour < 10 ? "0": "") + hour;
let timeofDay = (hour > 12) ? " AM" : " PM";
let time = hour + ':' + minute + ':' + second + timeofDay;
date = a.toLocaleDateString(undefined,options);
document.getElementById('time').innerHTML = time;
document.getElementById('date').innerHTML = date;
}, 1000);