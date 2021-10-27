let container = document.getElementById("container");


// create 16x 16 grid 

for (let divNum = 0; divNum < 256; ++divNum) {
  let button = document.getElementById("btn")
  button.addEventListener("click", () => divSquares.style.backgroundColor = "transparent");  
  let divSquares = document.createElement('div');
  divSquares.classList = 'div-squares'; // added class 
  container.appendChild(divSquares);
  divSquares.textContent = "";
   divSquares.addEventListener("mouseover", () => divSquares.style.backgroundColor = "black");
  }



//create a grid

// hover effect changing color

// reset button and get a number 

function game(e) {

   e = prompt("number?");
  let i = 0;
  let total = e * e;
  if (e <=0 || e<=100) {
    for (i = 0; i < total; i++) {
      let button = document.getElementById("btn")
      button.addEventListener("click", () => divSquares.style.backgroundColor = "transparent");
      let divSquares = document.createElement('div');
      divSquares.classList = 'div-squares'; // added class 
      container.appendChild(divSquares);
      divSquares.textContent = "";
      divSquares.addEventListener("mouseover", () => divSquares.style.backgroundColor = "green");
    };



}else{
  console.log("sad");
}
}
let button = document.getElementById("btn")
button.addEventListener("click",()=> game());


//test();

//var value=50;  
//function a(){  
//alert(this.value);//accessing global variable   
//}  



//for (divNum = 0; divNum < 400; ++divNum) {
//  button.addEventListener("click", () => divSquares.style.backgroundColor = "transparent");
//  let divSquares = document.createElement('div');
// divSquares.classList = 'div-squares'; // added class 
//  container.appendChild(divSquares);
// divSquares.textContent = "";
//  divSquares.addEventListener("mouseover", () => divSquares.style.backgroundColor = "green");
//}



//    divSquares.addEventListener("mouseout",()=> divSquares.style.backgroundColor="transparent"); 

// 16 min and 100 max 