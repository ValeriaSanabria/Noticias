    let contador = 0;
    
    function contarClicks() {
    contador++;
    //console.log("Se realizaron " + contador + " clicks");
    document.getElementById("cuenta").innerHTML = "Se realizaron " + contador + " clicks"
}

//con document.getElementById mas el innerHTML altero el texto de "cuenta" en html desde javascript
let imagen = document.querySelector("img");
Imagen.src = "https://i.pinimg.com/originals/c9/69/a9/c969a9189474895041b5133f49574329.jpg"