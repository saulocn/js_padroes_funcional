import { handleStatus, log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';

document
.querySelector('#myButton')
.onclick = () =>
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    //.then(notas => notas.map(nota=> nota.itens))
    //.then(notas => notas.reduce((array, nota) => array.concat(nota.itens), []))
    .then(notas=> notas
        .$flatMap(nota=> nota.itens)
        .filter(item => item.codigo == '2143')
        .reduce((total, item) => total+item.valor, 0)
    )
    /*.then(itens=> {
        console.log(itens);
        return itens;
    })
    .then(log)
    .then(itens => itens.filter(item => item.codigo == '2143'))
    .then(log)
    .then(itens => itens.reduce((total, item) => total+item.valor, 0))*/
    .then(console.log)
    .catch(console.log);