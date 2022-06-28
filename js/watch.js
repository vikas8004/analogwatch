let hourHand = document.getElementById("hour");
let minHand = document.getElementById("min");
let secHand = document.getElementById("sec");

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hRotate = ((30 * hour) + min / 2);
    let mRotate = (6 * min) + (sec / 10);
    let sRotate = 6 * sec;
    hourHand.style.transform = `rotate(${hRotate}deg)`;
    minHand.style.transform = `rotate(${mRotate}deg)`;
    secHand.style.transform = `rotate(${sRotate}deg)`;
}
setInterval(showTime,1000)