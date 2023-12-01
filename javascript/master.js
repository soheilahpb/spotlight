let light = document.getElementsByClassName("circle")[0]
let _main = document.getElementById("main")


_main.addEventListener("mousemove" , (e)=>{
    let x = e.clientX
    let y = e.clientY
    light.style.top = y +'px'
    light.style.left = x +'px'
    
})