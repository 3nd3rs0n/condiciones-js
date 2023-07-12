let boton = document.getElementById('boton');
boton.addEventListener('click',verificar)

function verificar (){
    const select1 = document.getElementById('option1').value;
    const select2 = document.getElementById('option2').value;
    const select3 = document.getElementById('option3').value;

    let clave = select1 + select2 + select3

    switch (clave){
        case "911":
            document.getElementById("mensaje").textContent = "password 1 correcto";
            break;
        case "714":
            document.getElementById("mensaje").textContent = "password 2 correcto";
            break;
        default:
            document.getElementById("mensaje").textContent = "password incorrecto";
    }
}