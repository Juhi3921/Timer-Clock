let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let time = false;
function timer() {
  if (time == true) {
    ms = ms + 1;
    if (ms == 100) {
      ms = 0;
      sec += 1;
      if (sec == 60) {
        sec = 0;
        min += 1;
        if (min == 60) {
          min = 0;
          hr += 1;
          if (hr == 13) {
            hr = 0;
          }
        }
      }
    }
    setTimeout("timer()", 10);
  }

  let hrs = hr;
  let mins = min;
  let secs = sec;
  let mss = ms;

  if (mss < 10) {
    mss = "0" + mss;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  document.getElementById("h").innerText = hrs + " ";
  document.getElementById("m").innerText = mins + " ";
  document.getElementById("s").innerText = secs + " ";
  document.getElementById("ms").innerText = mss + " ";
}

function start() {
  time = true;
  timer();
  document.querySelector("#start").innerText = "runing";
  document.getElementById("reset").style.display = "none";
  document.getElementById("stop").style.display = "inline-block";
  document.getElementById("start").style.display = "none";
}
function stop() {
  time = false;
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("stop").style.display = "none";
  document.querySelector("#start").innerText = "Resume";
  document.querySelector(".stop-btn").innerText = "Stop";
  document.getElementById("reset").style.display = "inline-block";
}
function reset() {
  time = false;
  
  document.querySelector("#start").innerText = "Start";
  document.getElementById("stop").style.display = "none";
  document.getElementById("reset").style.display = "none";
 
  

    console.log("hi")
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;

    document.getElementById("h").innerText = "00";
    document.getElementById("m").innerText = "00";
    document.getElementById("s").innerText = "00";
    document.getElementById("ms").innerText = "00";

}
