const argv = require('yargs')
                        .option('b', {
                           alias: 'base',
                           type: 'number',
                           demandOption: true,
                           describe: 'Indica la base sobre la que se construira la tabla de multiplicar', 
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            default: 'false',
                            describe: 'Indica si quiere que se liste la tabla de multiplicar en la consola',
                        })
                        .option('m', {
                            alias: 'maximo',
                            type: 'number',
                            default: 10,
                            describe: 'Indica cuantas multiplicaciones se hara en la tabla de multiplicar',
                        })
                        .check((argv, options) => {
                            if(isNaN(argv.b) || isNaN(argv.m)){
                                console.log('La base/maximo tiene que ser un numero');
                            }
                            return true;
                        })
                        .argv;
module.exports = argv;