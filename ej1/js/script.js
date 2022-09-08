
function ej1() {
    var dado1;
    var dado2;

    //array para las sumas obtenidas al tirar los dados
    var sumas = new Array((6 + 6) + 1);


    //damos valores(numero) a los elementos del array, para que no haya problema de indefinido
    for(i=0;i<sumas.length;i++){
        sumas[i]=0;
    }


    //tirar 36.000 los dados
    for (i = 0; i < 36000; i++) {//Math.floor -> para que solo coja los valores enteros
        dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

        //añadimos al array de sumas el resultado de las sumas de los valores de los dados
        sumas[dado1+dado2]++;

    }

    for(i=2;i<sumas.length;i++){//empezamos desde 2, ya que la suma mas pequeña que puede salir es 2
        console.log(i+" -> "+sumas[i]+" veces")
    }

}
