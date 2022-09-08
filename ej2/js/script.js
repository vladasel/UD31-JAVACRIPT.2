
function fecha() {
    var fecha = "";
    fecha = window.prompt("introduce una fecha:", fecha);//recogemos la info desde la ventana

    //miramos si en el string obtenido están todos los numeros y carácteres que consideramos válidos
    var consulta = fecha.search(/0[1-9]|3[0-1]{2}\/0[1-9]|1[0-2]{2}\/[0-9]{4}/);

    //comprobamos
    if (consulta != -1) {
        alert("fecha correcta");
    } else {
        alert("fecha formato incorrecto")
    }

}

function email() {

    var email = "";
    email = window.prompt("introduce un email", email);
    var consulta = email.search(/[a-zA-Z1-9.-]*@{1}[a-z]*\.([a-z]{2,3})/);
    //comprobamos
    if (consulta != -1) {
        alert("femail correcto");
    } else {
        alert("email formato incorrecto")
    }
}

function reemplazar() {

    var texto = "";
    texto = window.prompt("introduce carácter que quieras reemplazar:")
    var reemplazo = [[/&/, "&amp;"], [/"/, "&quot;"], [/</, "&lt;"], [/>/, "&gt;"]];
    reemplazo.forEach(function (rem) {
        texto = texto.replace(rem[0], rem[1]);
    });

    alert("el reemplazo es :\n" + texto);
}

function invertir() {
    var nombre = "";
    nombre = window.prompt("introduce nombre y apellido:", nombre);
    var separado = nombre.split(" ");
    var nombre = separado[1] + " , " + separado[0];

    alert("tu nombre( al revés) es: " + nombre);
}

function eliminarEtiquetas() { 
    texto="";
    texto=window.prompt("introduce código html:",texto);
    texto=texto.replace(/<script>.*<\/script>/, "");

    alert("tu código a sido limpiado :\n"+texto);
}



