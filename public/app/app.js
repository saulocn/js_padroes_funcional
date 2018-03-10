import { log } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';





document
.querySelector('#myButton')
.onclick = () =>
    /*fetch('http://localhost:3000/notas')
    .then(handleStatus)
    service.listAll()
    .then(sumItems('2143'))*/
    service.sumItems('2143')
    .then(console.log)
    .catch(console.log);