const container = document.querySelector(".container");

function createDiv(size){
    const div = document.createElement("div");
    div.classList.add("div");
    div.setAttribute("style",`border: 2px solid black; box-sizing: border-box; width:${size}px;`);
    container.appendChild(div);

    div.addEventListener("mouseleave",clearDiv);
    div.addEventListener("mouseenter",fillDiv);
}

function createGrid(res){
    console.log(container.offsetWidth);
    
    for (let i=0;i<res*res;i++){
        const size = container.offsetWidth/res;
        createDiv(size)
    }
}

function fillDiv(e){
    const target = e.target;
    target.style.backgroundColor = "black";
}

function clearDiv(e){
    const target = e.target;
    target.style.backgroundColor = "white";
}
createGrid(16);
