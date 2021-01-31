const fs = require('fs'); //importtacion libreria

const crearArchivo = async(base = 5, l, m) => {
    // Imprimir tabla del 5
    console.clear(); //  Para limpiar la consola de los mensajes anteriores, para que tengamos la consola limpia
    console.log('====================');
    console.log('   TABLA DEL ', base);
    console.log('====================');
    let salida = '';
    for (let index = 1; index < m+1; index++) {
        salida += `${base} * ${index} = ${base * index}\n`;
    }
    if(l==true){
        console.log(salida);
    }
    try{
        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log("Datos guardados en el archivo");
        });
        return `tabla-${base}.txt`;
    } catch( err ){
        throw err;
    }
}

module.exports = {
    crearArchivo
}