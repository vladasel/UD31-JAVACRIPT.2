
function poner(valor) {//concatena el valor de los botones en el input(en formato string)
    document.getElementById("input").value += valor;
}

function del() {//setea el input a ''(vacio)
    document.getElementById("input").value = '';

}

function calc() {//usamos el math.evaluate para hacer los calculos
    try{
    var inp = document.getElementById("input").value;
    var resp = math.evaluate(inp);
    document.getElementById("input").value = resp;
    }catch(e){//si hay algo mal escrito se controla capturando al exeption y mostrando un mensaje en el input de la calculadora
        document.getElementById("input").value ="error" ;
    }
   
}