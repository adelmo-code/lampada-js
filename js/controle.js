function on(){
    document.getElementById("lamp").src ="./imagens/on.jpg";
}

function off(){
    document.getElementById("lamp").src ="./imagens/off.jpg";
}

function piscar(){
    var intervalo = 0;
    var contador = 0;
    while ( contador < 10){
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src = './imagens/on.jpg';",intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lamp').src = './imagens/off.jpg';",intervalo);
        contador++;

    }
}