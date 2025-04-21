document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('treeCanvas');
    const ctx = canvas.getContext('2d');
    let angle = 0;
    let t = 0;

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;

        let width, height;
        if (window.innerWidth <= 768) {
            width = Math.min(window.innerWidth * 0.9, 300);
            height = Math.min(window.innerHeight * 0.3, 280);
        } else if (window.innerWidth <= 1439) {
            width = Math.min(window.innerWidth * 0.4, 320);
            height = Math.min(window.innerHeight * 0.4, 340);
        } else {
            width = Math.min(window.innerWidth * 0.35, 400);
            height = Math.min(window.innerHeight * 0.45, 400);
        }

        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    }

    function drawTree() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        angle = Math.sin(t) * Math.PI / 4;
        t += 0.01;

        const displayWidth = canvas.width / (window.devicePixelRatio || 1);
        const displayHeight = canvas.height / (window.devicePixelRatio || 1);

        ctx.save();
        ctx.translate(displayWidth / 2, displayHeight - 20);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 2;
        branch(displayHeight * 0.25);
        ctx.restore();

        requestAnimationFrame(drawTree);
    }

    function branch(len) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -len);
        ctx.stroke();
        ctx.translate(0, -len);

        if (len > 4) {
            ctx.save();
            ctx.rotate(angle);
            branch(len * 0.67);
            ctx.restore();

            ctx.save();
            ctx.rotate(-angle);
            branch(len * 0.67);
            ctx.restore();
        }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawTree();
});
