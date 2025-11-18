 window.addEventListener('load', () => {

    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    const circle = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 50,
        hue: 0
    };

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = `hsl(${circle.hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    function update() {
        circle.hue = (circle.hue + 1) % 360;
    }

    function animationLoop() {
        update();
        draw();
        requestAnimationFrame(animationLoop);
    }

    animationLoop();
 })
