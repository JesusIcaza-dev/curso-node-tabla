const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.log(argv);

crearArchivo(argv.b, argv.l, argv.m)
    .then(document => console.log(document.blue))
    .catch(err => console.log(err));

/*console.log(process.argv);
console.log(argv.base); Cuando le pasamos por la consola un parametro de la siguiente forma --base=5, por ejemplo*/
