const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    
    try {
         
        let salida = '';
        let consola = '';

        for (let i = 1; i <=hasta; i++) {
            consola += `${ colors.yellow(base) } ${ 'x'.green } ${ colors.yellow(i) } ${ '='.green } ${ base * i }\n`;
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if ( listar ) {
            console.log('===================='.yellow);
            console.log('    Tabla del:'.yellow, colors.yellow(base));
            console.log('===================='.yellow);

            console.log(colors.yellow(consola));
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
           
        return `Archivo de la tabla del ${ colors.yellow(base) } creado correctamente`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}