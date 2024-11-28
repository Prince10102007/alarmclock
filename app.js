function updatetime(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById("hour").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
}

setInterval(updatetime, 1000);
updatetime();

document.getElementById("selecthour").addEventListener("change", updateSelectedTime);
document.getElementById("sminute").addEventListener("change", updateSelectedTime);

function updateSelectedTime() {
    let selectedHour = document.getElementById("selecthour").value;
    let selectedMinute = document.getElementById("sminute").value;
    let selectedsecond=document.getElementById("secondsd").value;
    
    document.getElementById("aa").innerHTML = selectedHour + ":" + selectedMinute+":"+selectedsecond;
}

document.getElementById("setalarm").addEventListener("click", () => {
    updateSelectedTime();
    document.getElementById("aa").style.display = "block";
    checkalarm();
});

const alarmaudio = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3");
let alarmInterval;

function checkalarm() {
    if (alarmInterval) {
        clearInterval(alarmInterval);
    }
    alarmInterval = setInterval(() => {
        const alarmTime = document.getElementById("aa").innerHTML;

        
        const currenttime = 
            document.getElementById("hour").innerHTML + ":" + 
            document.getElementById("min").innerHTML + ":" + 
            document.getElementById("sec").innerHTML;
        

        if (currenttime === alarmTime) {
            console.log("Alarm triggered!");
            alarmaudio.play();
        }
    }, 1000);
}
document.getElementById("clearalarm").addEventListener("click",()=>{
    document.getElementById("aa").innerHTML="";
    alarmaudio.pause();
    alarmaudio.currentTime=0;
})
