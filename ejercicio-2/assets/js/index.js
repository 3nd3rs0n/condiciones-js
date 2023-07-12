
function sumar (){
    const cantidad1 = parseInt(document.getElementById('cantidad-1').value);
    const cantidad2 = parseInt(document.getElementById('cantidad-2').value);
    const cantidad3 = parseInt(document.getElementById('cantidad-3').value);
    const sumaTotal = cantidad1 + cantidad2 + cantidad3;
    const span = document.querySelector('#resultado');
    span.innerHTML = sumaTotal;

    if (sumaTotal > 10){
        span.innerHTML = " mas de 10, no puedes adoptar tantos"

    } else{
        span.innerHTML = cantidad1 + cantidad2 + cantidad3

    }
}