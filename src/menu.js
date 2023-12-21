export { menuPage };
function menuPage(){
const content = document.querySelector('#content');
const headbar = document.createElement('div');
const selection = document.createElement('div');
const selectionHome = document.createElement('div');
const selectionMenu = document.createElement('div');
const selectionContact = document.createElement('div');




headbar.classList.add('headbar');
selection.classList.add('selections');
selectionHome.classList.add('selection');
selectionMenu.classList.add('selection');
selectionMenu.style.backgroundColor = 'cornflowerblue';
selectionContact.classList.add('selection');
selectionHome.textContent = 'Home';
selectionMenu.textContent = 'Menu';
selectionContact.textContent = 'Contact';



selection.appendChild(selectionHome);
selection.appendChild(selectionMenu);
selection.appendChild(selectionContact);
headbar.appendChild(selection);
content.appendChild(headbar);

  

}