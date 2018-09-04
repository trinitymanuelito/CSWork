function drawCircle(x, y, radius, width, color)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.linewidth = width;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.stroke();
}

drawCircle(50, 50, 20, 5, "blue");
drawCircle(100, 100, 24, 8, "green");
