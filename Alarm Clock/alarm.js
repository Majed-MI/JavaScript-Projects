console.log("HI");

//grabbing the submit button
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click',setAlarm);
//audio source
var audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
// ringbell function work
function ringBell(){
    audio.play();
}
//setting alarm function
function setAlarm(e){
    e.preventDefault();
    // console.log("Setting Alarm....");
    const alarm = document.getElementById('alarm'); //grabbing the input of the alarm
    const alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}..`);
    const now = new Date(); //date for now exact
    let timeToAlarm = alarmDate - now
    console.log(timeToAlarm);
    if(timeToAlarm >= 0 ){
        setTimeout(()=>{
            console.log("Ringing now");
            ringBell(); //calling back the ringbell function here for the work to be done in that func().
        }, timeToAlarm); //which time I have set would be played audio when it would be same as alarmtime.
    }
}