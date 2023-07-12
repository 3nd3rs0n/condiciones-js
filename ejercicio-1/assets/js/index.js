// declaramos las variables 

const imagen = document.querySelector(".perro-negro")

// creamos el evento

imagen.addEventListener("click", cambiarBorde);

// declaramos la funcion

function cambiarBorde(){
    imagen.classList.toggle("perro-negro-borde");

}

