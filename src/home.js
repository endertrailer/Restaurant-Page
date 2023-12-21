export { loadPage };
function loadPage(){
const content = document.querySelector('#content');
const headbar = document.createElement('div');
const selection = document.createElement('div');
const selectionHome = document.createElement('div');
const selectionMenu = document.createElement('div');
const selectionContact = document.createElement('div');
const midArea = document.createElement('div');
const barBox = document.createElement('div');
const bar = document.createElement('div');
const mid_section = document.createElement('div');




headbar.classList.add('headbar');
selection.classList.add('selections');
selectionHome.classList.add('selection');
selectionHome.style.backgroundColor = 'cornflowerblue';
selectionMenu.classList.add('selection');
selectionContact.classList.add('selection');
selectionHome.textContent = 'Home';
selectionMenu.textContent = 'Menu';
selectionContact.textContent = 'Contact';
midArea.classList.add('midarea');
barBox.classList.add('barbox');
bar.classList.add('bar');
bar.textContent = 'Welcome to AstroBite restrauant';
mid_section.classList.add('mid-section');


selection.appendChild(selectionHome);
selection.appendChild(selectionMenu);
selection.appendChild(selectionContact);
headbar.appendChild(selection);
content.appendChild(headbar);
content.appendChild(midArea);
midArea.appendChild(barBox);
barBox.appendChild(bar);
midArea.appendChild(mid_section);

const texts = [
    'Indulge in the extraordinary at AstroBite, where we bring the universe to your plate. Taste the cosmos with celestial cuisine that is truly out of this world. Join us for a stellar dining experience that is simply cosmic!',
    ` 
    Celestial Day: 8:00 AM - 8:00 PM
    Astronomy Day: 6:00 AM - 6:00 PM
    Cosmic Day: 6:00 AM - 6:00 PM
    Nebula Day: 6:00 AM - 6:00 PM
    Stardust Day: 6:00 AM - 10:00 PM
    Galaxy Day: 6:00 AM - 10:00 PM
    Starlight Day: 8:00 AM - 10:00 PM
    `,
    'Restaurant Location: Orion\'s Nebula, Deep Space Sector 7'
  ];

  for (const text of texts) {
    const midBox = document.createElement('div');
    midBox.className = 'mid-box';
    
    const midText = document.createElement('div');
    midText.className = 'mid-text';
    midText.textContent = text;
    
    midBox.appendChild(midText);
    mid_section.appendChild(midBox);
  }
  

}