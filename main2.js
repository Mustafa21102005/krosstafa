const days = document.getElementById('days');

const targetDate = new Date("December 31 2026 00:00:00 ").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(distance / 1000 / 60 ) % 60;
    const seconds = Math.floor(distance / 1000 ) % 60;

    console.log(days + ":" + hours + ":" + minutes +  ":" + seconds);

}
 
setInterval(timer, 1000);

console.log("main.js is running");