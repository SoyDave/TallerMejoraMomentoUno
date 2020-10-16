function calcularBiotipo (estatura){

    let estaturaFutbolista = (estatura);

    if (estaturaFutbolista < 170){
        console.log("Biotipo Bajo")
    }else if(estaturaFutbolista >= 170 && estaturaFutbolista < 180){
        console.log("Biotipo Promedio")
    }else{
        console.log("Biotipo Superior")
    }
    
    return (estaturaFutbolista);

}

console.log (calcularBiotipo(182));