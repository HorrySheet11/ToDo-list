import {toDos} from './toDo.js';

export const saveToDos = () => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

export const loadToDos = () => {
    const loadedToDos = localStorage.getItem('toDos');
    if (loadedToDos) {
        const parsedToDos = JSON.parse(loadedToDos);
        toDos.splice(0, toDos.length, ...parsedToDos);
    }
}

