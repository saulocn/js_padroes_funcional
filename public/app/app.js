import { log, timeoutPromise, retry } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';
import {takeUntil, debounceTime, partialize, pipe} from './utils/operators.js';

/*
const p1 = new Promise((resolve, reject)=> {
setTimeout(()=> resolve("Promise 1 terminou"), 3000);
});


const p2 = new Promise((resolve, reject)=> {
    setTimeout(()=> reject("Cancelado"), 1000);
});


Promise.race([p1, p2])
.then(console.log)
.catch(console.log);*/

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);


const action = operations(() => 
                    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
                    .then(console.log)
                    .catch(console.log)
                );
                

document
.querySelector('#myButton')
.onclick = action;