const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

/*const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');*/

/*console.log(base);*/


//const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => {
        console.log('Archivo creado correctamente!!!'.green)
        console.log(nombreArchivo)
    })
    .catch(err => {
        console.log('Archivo no se pudo crear!!!'.red)
        console.log(err)
    });





