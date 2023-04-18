var strTime = "00:00:00";
var sec = 0;
var min = 0;
var hrs = 0;
var t;

if (sessionStorage.getItem("sec") !== null) {
  sec = parseInt(sessionStorage.getItem("sec"))
} 

if (sessionStorage.getItem("min") !== null) {
  min = parseInt(sessionStorage.getItem("min"))
}

if (sessionStorage.getItem("hrs") !== null) {
  hrs = parseInt(sessionStorage.getItem("hrs"))
}

if (sessionStorage.getItem("showChronometer") == "true") {
  document.querySelector(".chronometer").classList.add("chronometer-show");
}

function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }

  sessionStorage.setItem("sec", String(sec))
  sessionStorage.setItem("min", String(min))
  sessionStorage.setItem("hrs", String(hrs))
}

function add() {      
  tick();
  strTime = (hrs > 9 ? hrs : "0" + hrs)
  + ":" + (min > 9 ? min : "0" + min)
  + ":" + (sec > 9 ? sec : "0" + sec);
  
  document.getElementById("timerTmp").innerHTML = strTime;
  startChronometer();
}


function startChronometer() {
  document.querySelector(".chronometer").classList.add("chronometer-show");
  t = setTimeout(add, 1000);
}

function initChronometer(){
  sessionStorage.setItem("showChronometer", "true");
  stopChronometer()
  startChronometer()
}

function stopChronometer() {
  let timeTmp = strTime;
  clearTimeout(t);
  resetChronometer();
  sessionStorage.removeItem("sec");
  sessionStorage.removeItem("hrs");
  sessionStorage.removeItem("min");

  document.querySelector(".chronometer").classList.remove("chronometer-show");
  sessionStorage.removeItem("showChronometer");
  return timeTmp;
}

function pauseChronometer() {
  clearTimeout(t);
  return strTime;
}

function resetChronometer() {
  strTime = "00:00:00";
  sec = 0; min = 0; hrs = 0;
}

