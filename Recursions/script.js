
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")

let dim = 900
let minSize = 30

function drawSqaure(x, y, dim){
    if(dim > 1){ // checks if 
        drawSqaure(x, y, dim / 2)
        drawSqaure(x + dim / 2, y, dim / 2)
        drawSqaure(x + dim / 2, y + dim / 2, dim / 2)
    }else{ 
        ctx.stroke()
        ctx.strokeStyle = "black"
        ctx.rect(x,y,dim,dim)
    }
}
ctx.fillStyle = "violet"
ctx.fillRect(0,0,dim,dim)
ctx.fillcolor
drawSqaure(0,0, dim)
        
