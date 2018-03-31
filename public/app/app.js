import { log } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';

/*
const ehDivisivel = (divisor, numero) => !(numero%divisor);
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

console.log(ehDivisivelPorDois(10));
console.log(ehDivisivel(5, 2));
console.log(ehDivisivelPorDois(2, 12));
*/


document
.querySelector('#myButton')
.onclick = () =>
    service.sumItems('2143')
    .then(console.log)
    .catch(console.log);