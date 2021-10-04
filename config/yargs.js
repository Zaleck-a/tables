const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla'
            })
            .option('l', {
                alias: 'list',
                type: 'boolean',
                default: false,
                describe: 'Lista la tabla'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Limite de la multiplicación'
            })
            .check( (argv, options) => {

                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            } )            
            .argv;

module.exports = argv;