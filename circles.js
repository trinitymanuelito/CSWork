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

drawCircle(100, 100, 20, 8, "green");
drawCircle(100, 100, 24, 8, "yellow");
drawCircle(100, 100, 15, 8, "red");
drawCircle(100, 100, 18, 8, "blue");
drawCircle(100, 100, 26, 8, "red");
drawCircle(100, 100, 28, 8, "blue");
drawCircle(100, 100, 30, 8, "pink");
drawCircle(100, 100, 33, 8, "black");
drawCircle(100, 100, 36, 8, "purple");
drawCircle(100, 100, 100, 8, "blue");
drawCircle(100, 100, 90, 8, "yellow");
drawCircle(100, 100, 80, 8, "brown");
drawCircle(100, 100, 70, 8, "pink");