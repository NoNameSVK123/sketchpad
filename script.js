const container = document.querySelector(".container");
const button = document.querySelector(".button");

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
    const target = e.target;``
    target.style.backgroundColor = "black";
}

function clearDiv(e){
    const target = e.target;
    target.style.backgroundColor = "white";
}

function cleanGrid(size) {
    container.innerHTML = ``;
    createGrid(size);
}

function changeSize(){
    const size = Number(prompt("Number of squares:")?console.log("yes"):console.log("no"));
    
    if (size<=100 && size>=0){
        console.log(size);
        cleanGrid(size);
    }
}

button.addEventListener("click",() => {
    let clean = true;
    const size = prompt("Number of squares:");
    size=="" || size==null?clean=false:Number(size);

    if (clean && size<=100 && size>=0) {
        cleanGrid(size);
    }
});

createGrid(16);
