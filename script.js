const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const FACE = document.querySelector("#face");


// get the time
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

const HOURCONST = 360/12;
const MINCONST = 360/60;
const SECCONST = 360/60;


let hrPos = (hr * HOURCONST)+ (min * MINCONST / 60);
let minPos = (min * MINCONST) + (sec * SECCONST /60);
let secPos = date.getSeconds() * SECCONST;

function runTheClock() {

    hrPos = hrPos+(3/360);
    minPos = minPos+(6/60);
    secPos = secPos+6;

    HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
}

var interval = setInterval(runTheClock, 1000);
