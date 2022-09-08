function reloj() {
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    document.getElementById('h').innerHTML=hora;
    document.getElementById('m').innerHTML=min;
    document.getElementById('s').innerHTML=seg;
    setTimeout("reloj()",1000);//temporizador cada segundo, utilizando el metodo incorporado setTimeout

}