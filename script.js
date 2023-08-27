
const [mario, pipe, restart] = [".mario", ".pipe", ".restart"].map((item)=>{
    return document.querySelector(item)
})

const jump = () => {
   mario.classList.add("jump")
   setTimeout(() => {
    mario.classList.remove("jump")
    
   }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    // colocando o mais na frente, ele tenta coverter a string em numero
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")


    if(pipePosition <= 100  && pipePosition > 0 && marioPosition < 80){
        pipe.style.animaton = "none";
        pipe.style.left = `${pipePosition}px`


        mario.style.animaton = "none";
        mario.style.bottom = `${pipePosition}px`

        mario.src = "./assets/game-over.png"
        mario.style.width = "100px"
        mario.style.marginleft = "30px"
        mario.style.bottom = "100px "

        clearInterval(loop)
    }       
},10);
restart.addEventListener("click", () =>{
    location.reload(true)
})

document.addEventListener("keydown", jump)

