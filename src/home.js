export function loadPage() {
  const content = document.querySelector('#content');
  
  // Creating elements for header, selections, and midarea
  const headbar = document.createElement('div');
  headbar.classList.add('headbar');
  
  const selections = document.createElement('div');
  selections.classList.add('selections');
  
  const home = document.createElement('div');
  home.classList.add('selection');
  home.textContent = 'Home';
  home.style.backgroundColor = 'cornflowerblue';
  
  const menu = document.createElement('div');
  menu.classList.add('selection');
  menu.textContent = 'Menu';
  
  const contact = document.createElement('div');
  contact.classList.add('selection');
  contact.textContent = 'Contact';
  
  const midArea = document.createElement('div');
  midArea.classList.add('midarea');
  
  // Appending selections to header and header to content
  selections.appendChild(home);
  selections.appendChild(menu);
  selections.appendChild(contact);
  headbar.appendChild(selections);
  content.appendChild(headbar);
  
  // Creating elements for barbox, bar, mid-section, and description
  const barBox = document.createElement('div');
  barBox.classList.add('barbox');
  
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.textContent = 'Welcome to AstroBite restaurant';
  
  const midSection = document.createElement('div');
  midSection.classList.add('mid-section');
  
  const description = document.createElement('div');
  description.classList.add('mid-desc');
  description.innerHTML = `
    <img src="https://th.bing.com/th/id/OIG.ZVIEi.aopPbet7YzuPG_?pid=ImgGn" alt="restaurant" class="view">
    <div class="description">
      Indulge in the extraordinary at AstroBite, where we bring the universe to your plate. Taste the cosmos with celestial cuisine that is truly out of this world. Join us for a stellar dining experience that is simply cosmic!
    </div>
  `;
  
  const timings = document.createElement('div');
  timings.classList.add('mid-box');
  timings.innerHTML = `
    <div class="mid-text">
      Timings:
      <br>
      Celestial Day: 8:00 AM - 8:00 PM<br>
      Astronomy Day: 6:00 AM - 6:00 PM<br>
      Cosmic Day: 6:00 AM - 6:00 PM<br>
      Nebula Day: 6:00 AM - 6:00 PM<br>
      Stardust Day: 6:00 AM - 10:00 PM<br>
      Galaxy Day: 6:00 AM - 10:00 PM<br>
      Starlight Day: 8:00 AM - 10:00 PM
    </div>
  `;
  
  const location = document.createElement('div');
  location.classList.add('mid-box');
  location.innerHTML = `
    <div class="mid-text">Restaurant Location: Orion's Nebula, Deep Space Sector 7</div>
  `;
  
  // Appending elements to their respective parents
  barBox.appendChild(bar);
  midSection.appendChild(description);
  midSection.appendChild(timings);
  midSection.appendChild(location);
  
  midArea.appendChild(barBox);
  midArea.appendChild(midSection);
  
  content.appendChild(midArea);
}
