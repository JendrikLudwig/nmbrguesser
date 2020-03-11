let c=10
let x = 0;

function canvasAni() {
    
    if (c%10==0){
        x = Math.floor(Math.random() * 100); 
    }
    let canvas = document.getElementById("canvasFrame");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Montserrat";
    ctx.fillStyle = "white";
    ctx.fillText(x,10,50);
    c++;
    window.requestAnimationFrame(canvasAni);
}
