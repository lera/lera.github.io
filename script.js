var cube = document.getElementsByClassName('cube')[0];

var rotateY = 0;
var rotateX = 0;

var startX = 0;
var startY = 0;

var moveX = 0;
var moveY = 0;

document.body.addEventListener('mousemove', function (event){
    moveX = event.clientX;
    moveY = event.clientY;
    
    if(moveY > startY){
        rotateX++;
    } else if (moveY < startY){
        rotateX--;
    }
    
    if (moveX > startX){
        rotateY--;
    } else if (moveX < startX){
        rotateY++;
    }
    
    cube.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    
    startY = moveY;
    startX = moveX;
})


