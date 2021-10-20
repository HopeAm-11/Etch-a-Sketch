
let divNum = 0;
let container = document.getElementById('container')

// 16x16
for(divNum = 0; divNum < 10000; ++divNum){
    let divSquares = document.createElement('div');
    divSquares.classList = 'div-squares';// added class 
    container.appendChild(divSquares);
    divSquares.textContent = "";    
    divSquares.addEventListener("mouseover",()=> divSquares.style.backgroundColor="green"); 

    let button = document.getElementById("btn")
    button.addEventListener("click",()=> divSquares.style.backgroundColor="transparent");

}


//    divSquares.addEventListener("mouseout",()=> divSquares.style.backgroundColor="transparent"); 

