let contador = 0;
function sumar(){
        contador = contador + 1;
        document.getElementById("valor").innerHTML = contador;
        console.log(contador);
}

function restar(){
    if (document.getElementById("valor").innerHTML > 0) {
        document.getElementById("valor").innerHTML = --contador;
        console.log(contador);
    }
}
