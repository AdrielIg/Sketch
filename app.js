const container = document.querySelector(".container");
const btnClear = document.querySelector(".clear");
const btnReset = document.querySelector(".reset");
let x = 16

//ROWS AND COLUMNS FUNCTION
function makeRows (rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "item";
        //Movemos la asignacion del evento dentro de la creacion del div para ahorrar iteraciones
        //Hover color
        cell.addEventListener("mouseover", () => {
            cell.classList.add("permahover")});
    }

    
};

/* Tambien puedes añadir el evento al contenedor y mirar si el target es un div con la clase item
container.addEventListener("mouseover", ({ target }) => {

  if (target.classList.contains("item")) target.classList.add("permahover")

})
*/

//Page starts with a 16x16 grid
makeRows(x,x);


//Delete grid
function deleteGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
};


//
//RESET BOTON
btnReset.addEventListener("click", function() {
    for(let div of container.childNodes){ div.classList.remove("permahover")};
    deleteGrid();
    x = prompt("How many rows and columns you want?");
    makeRows(x,x);
});

 
/* const divs = Array.from(document.querySelectorAll(".item"));

divs.forEach((div) =>
    div.addEventListener("mouseover", () => {
        div.classList.add("permahover");
}));  */

// No es necesario poner un evento por cada div, con tener un solo evento y recorrer los divs es suficiente
//CLEAR BTN
// Mal hecho:
/* divs.forEach((div) =>
    btnClear.addEventListener("click" , () =>{
        div.classList.remove("permahover");
})); */
//Coomo de deberia para no iterar sobre cada objeto
btnClear.addEventListener("click", () =>{
    for(let div of container.childNodes){
        div.classList.remove("permahover")
    }
});
 
 