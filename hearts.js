const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = Array.from({ length: 30 }).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 20 + 10,
  speed: Math.random() * 1 + 0.5
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let h of hearts) {
    ctx.fillStyle = 'rgba(255,105,180,0.8)';
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.bezierCurveTo(h.x + h.size / 2, h.y - h.size, h.x + h.size * 1.5, h.y + h.size / 2, h.x, h.y + h.size);
    ctx.bezierCurveTo(h.x - h.size * 1.5, h.y + h.size / 2, h.x - h.size / 2, h.y - h.size, h.x, h.y);
    ctx.fill();

    h.y -= h.speed;
    if (h.y < -50) {
      h.y = canvas.height + 10;
      h.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(draw);
}

draw();
