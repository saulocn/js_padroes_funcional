import { log } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';
import {takeUntil, debounceTime} from './utils/operators.js';

const action = debounceTime(500, 
                    takeUntil(3, () => 
                        service.sumItems('2143')
                        .then(console.log)
                        .catch(console.log)
                    )
                );

/*
const operation1 = takeUntil(3, () => 
                    service.sumItems('2143')
                    .then(console.log)
                    .catch(console.log)
                );

const operation2 = debounceTime(500, operation1);



const showMessage = () => console.log('Opa!');
const operation2 = debounceTime(500, showMessage);
operation2();
operation2();
operation2();

const showMessage = () => console.log("oi");
const operation = takeUntil(3, showMessage);


let counter = 10;

while(counter--) operation();
*/

document
.querySelector('#myButton')
.onclick = action;