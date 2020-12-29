function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}
let count = 1;

function startTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    if (count == 1) {
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("h").style.visibility = "visible";
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("m").style.visibility = "visible";
        document.getElementById("seconds").innerHTML = seconds;
        count++;
    } else {
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("h").style.visibility = "hidden";

        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("m").style.visibility = "hidden";

        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("ampm").innerHTML = ampm;

        count = 1;
    }

    let stop = setTimeout(startTime, 1000);
}

// Handler for newAlarm:
function newAlarm() {
    let alarm = document.getElementById("setAlarm");
    alarm.classList.add("appear");
}
// When user clicks on new Alarm
document.querySelector("#newAlarm").addEventListener("click", newAlarm);

document.querySelector("#cancel").addEventListener("click", () => {
    let alarm = document.getElementById("setAlarm");
    alarm.className = "disappear";
});

// Set Alarm  Handler-->
let yes = 1;

function set() {
    let alarm = document.getElementById("setAlarm");

    // Fetching Values
    let d = document.getElementById("setDate").value;
    let t = document.getElementById("setTime").value;
    let s = document.getElementById("tone").value;
    let l = document.getElementById("lbl").value;

    let newT = new Date();
    if (d != "" || t != "") {
        let hrs = t.split(":")[0];
        let mins = t.split(":")[1];

        if (hrs == newT.getHours() && mins == newT.getMinutes()) {
            console.log("wake-up");
            switch (s) {
                case "tone1":
                    tone = "tone1.mp3";
                    break;
                case "tone2":
                    tone = "tone2.mp3";
                    break;
                case "tone3":
                    tone = "tone3.mp3";
                    break;
                case "tone4":
                    tone = "tone4.mp3";
                    break;
                case "tone5":
                    tone = "tone5.mp3";
                    break;

                default:
                    break;
            }
            var audio = new Audio(tone);
            audio.play();
            clearTimeout(stop);
        }
        if (yes == 1) {
            alert("Alarm set Successfully:");
            alarm.className = "disappear";
            document.getElementById("setted").classList.add("settedAppear");
            // Showing value-->
            document.getElementById("tm").innerHTML = t;
            document.getElementById("settedDate").innerHTML = d;
            document.getElementById("alarmName").innerHTML = l;
            yes = 0;
        }
    } else {
        alert("Please Fill up;");
    }
    let stop = setTimeout(set, 1000);
}
document.querySelector("#set").addEventListener("click", set);