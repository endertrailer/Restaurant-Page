export { menuPage };
function menuPage(){
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
const menuPage = document.createElement('div');



headbar.classList.add('headbar');
selection.classList.add('selections');
selectionHome.classList.add('selection');
selectionMenu.style.backgroundColor = 'cornflowerblue';
selectionMenu.classList.add('selection');
selectionContact.classList.add('selection');
selectionHome.textContent = 'Home';
selectionMenu.textContent = 'Menu';
selectionContact.textContent = 'Contact';
midArea.classList.add('midarea');
barBox.classList.add('barbox');
bar.classList.add('bar');
bar.textContent = 'Menu';
mid_section.classList.add('mid-section');
menuPage.classList.add('menu-section');
midArea.style.border = 'none';
const menuItems = [
  { name: 'ring burger', price: '36$', imgSrc: '../src/images/burger.jpeg ', desc:'Ring Burger: A savory cosmic delight, boasting unique flavors in every bite.'},
  { name: 'Galaxy pops', price: '65$', imgSrc: '../src/images/galaxy pops.jpeg', desc:'Galaxy Pops: Bursting with cosmic hues, a tangy-sweet celestial sensation awaits.' },
  { name: 'Space Odyssey Sushi', price: '58$', imgSrc: '../src/images/cosmo sushi.jpeg', desc:'Space Odyssey Sushi: A stellar fusion of flavors taking your palate on an intergalactic adventure.'},
  { name: 'nebula noodles', price: '76$', imgSrc: '../src/images/OIG.DwV5IjWuLUZ.jpeg', desc: 'Nebula Noodles: Handcrafted swirls of flavors that transport your taste buds on a cosmic journey.' },
  { name: 'Stardust Boba Brew', price: '35$', imgSrc: '../src/images/rubble tea.jpeg', desc: 'Stardust Boba Brew: A celestial concoction swirling with cosmic flavors, a sip of stellar delight.' },
  { name: 'Nebula Delight Pizza', price: '100$', imgSrc: '../src/images/pizza.jpeg', desc: 'Nebula Delight Pizza: A cosmic culinary marvel boasting celestial flavors atop a heavenly crust delight.' }
];


selection.appendChild(selectionHome);
selection.appendChild(selectionMenu);
selection.appendChild(selectionContact);
headbar.appendChild(selection);
content.appendChild(headbar);
content.appendChild(midArea);
midArea.appendChild(barBox);
barBox.appendChild(bar);
midArea.appendChild(mid_section);
midArea.appendChild(menuPage);
menuItems.forEach(item => {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  const itemName = document.createElement('div');
  itemName.classList.add('name');
  itemName.textContent = item.name;

  const pic = document.createElement('div');
  pic.classList.add('pic');

  const itemPrice = document.createElement('div');
  itemPrice.classList.add('price');
  itemPrice.textContent = item.price;

  const img = document.createElement('img');
  img.src = item.imgSrc;
  img.alt = 'burger';

  pic.appendChild(itemPrice);
  pic.appendChild(img);

  const itemDesc = document.createElement('div');
  itemDesc.classList.add('desc');
  itemDesc.textContent = item.desc;
  cell.appendChild(itemName);
  cell.appendChild(pic);
  cell.appendChild(itemDesc);

  menuPage.appendChild(cell);
});

}