const bodyEl = document.querySelector("body");

const inputEl = document.querySelector(".input");

const circleEl = document.querySelector(".circle");

inputEl.checked = JSON.parse (localStorage.getItem("mode"));
 
console.log(inputEl.checked);

updateBody()

function updateBody(){

if (inputEl.checked){

    bodyEl.style.background = "black";
    
}else{
    bodyEl.style.background = "white";
}

updateCircle()

}
function updateCircle(){

    if (inputEl.checked){

        circleEl.style.background = "black";
        
    }else{
        circleEl.style.background = "white";
    }
}
inputEl.addEventListener(
    "input", ()=> {

        updateBody();
        
        updateLocalStorage();
    }
)
function updateLocalStorage(){

    localStorage.setItem("mode", JSON.stringify(inputEl.checked))

}