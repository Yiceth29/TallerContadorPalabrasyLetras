const contadorPalabra = (event) => {
    let contador = 0;
    let palabra = event.target.value;
    let arrayPalabra = Array.from(palabra);


    for(let i = 1; i <= arrayPalabra.length; i++){
        contador++;
    }

    document.getElementById("resultContadorPalabra").innerHTML = `El número de letras que tiene la palabra "${palabra}" son ${contador}.`;
}

const contadorTexto = (event) => {
    let contador = 0;
    let texto = event.target.value;
    let reempleazo = texto.replace(/ /g, ',');
    let arrayTexto = reempleazo.split(',');

    for(let i = 1; i <= arrayTexto.length; i++){
        contador++;
    }

    document.getElementById("resultContadorTexto").innerHTML = `El número de palabras que contiene el texto "${texto}" son ${contador}.`;
}