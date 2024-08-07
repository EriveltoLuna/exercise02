//1- crie um circulo com uma div de w: 16px, h: 16px e background #999
//2- adicione ao window uma função que ocorre ao "mousemove"
//3- na função muda as propriedades top e left do circulo de acordo com o mouse
//4- você pode usar elemento.style.propriedade para mudar o CSS diretamente

function followCursor(event) {
  const x = event.x;
  const y = event.y;
  const circle = document.querySelector(".circle");
  circle.style.top = y + "px";
  circle.style.left = x + "px";
}

window.addEventListener("mousemove", followCursor);
