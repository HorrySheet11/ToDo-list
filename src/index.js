import './style.css';
import { ToDo } from './toDo.js'

try {
    console.log('script loaded');
    ToDo;
} catch (error) {
    console.log(error);
}