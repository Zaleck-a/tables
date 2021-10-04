const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

 
let base = argv.b;
let listar = argv.l;
let hasta = argv.h;

crearArchivo(base, listar, hasta)

    .then( nombreDelArchivCreado => {

     console.log(nombreDelArchivCreado, 'creada'.rainbow);

    }).catch( err => {

        console.log(err);

    });
