import './style.css';
import {loadPage} from './home.js';
import {menuPage} from './menu.js';
import { contactPage } from './contact';
const content = document.getElementById('content');
function remove(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}
loadPage();
function click() {let selections = document.querySelectorAll('.selection');
selections[0].addEventListener('click', () => {
    remove();
    loadPage();
    click();
});

selections[1].addEventListener('click', () => {
    remove();
    menuPage();
    click();
});

selections[2].addEventListener('click', () => {
    remove();
    contactPage();
    click();
})}
click();
