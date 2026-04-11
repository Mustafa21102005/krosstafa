const canvas = document.getElementById("effect");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

function initStars() {
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    star.x += star.speed;

    if (star.x > canvas.width) {
      star.x = 0;
    }
  }

  requestAnimationFrame(drawStars);
}

initStars();
drawStars();

const Day = document.getElementById('days');
const Hour = document.getElementById('hour');

const targetDate = new Date("June 1 2026 00:00:00 ").getTime();

function timer() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  const days = Math.floor(distance / 1000 / 60 / 60 / 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  // console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

  Day.innerHTML = days;
  Hour.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; //idk how this line work, i just use tab* and it works
}

setInterval(timer, 1000);

// console.log("main.js is running");
