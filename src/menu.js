import burgerImg from '../src/images/burger.jpeg';
import galaxyPopsImg from '../src/images/galaxy pops.jpeg';
import cosmoSushiImg from '../src/images/cosmo sushi.jpeg';
import nebulaNoodlesImg from '../src/images/OIG.DwV5IjWuLUZ.jpeg';
import rubbleTeaImg from '../src/images/rubble tea.jpeg';
import pizzaImg from '../src/images/pizza.jpeg';

export function menuPage() {
    const content = document.querySelector('#content');

    const headbar = document.createElement('div');
    headbar.classList.add('headbar');

    const selections = document.createElement('div');
    selections.classList.add('selections');

    const selectionHome = document.createElement('div');
    selectionHome.classList.add('selection');
    selectionHome.textContent = 'Home';

    const selectionMenu = document.createElement('div');
    selectionMenu.classList.add('selection');
    selectionMenu.style.backgroundColor = 'cornflowerblue';
    selectionMenu.textContent = 'Menu';

    const selectionContact = document.createElement('div');
    selectionContact.classList.add('selection');
    selectionContact.textContent = 'Contact';

    const midArea = document.createElement('div');
    midArea.classList.add('midarea');
    midArea.style.border = 'none';

    const barBox = document.createElement('div');
    barBox.classList.add('barbox');

    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.textContent = 'Menu';

    const mid_section = document.createElement('div');
    mid_section.classList.add('mid-section');

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-section');

    const menuItems = [
        { name: 'Ring Burger', price: '36$', imgSrc: burgerImg, desc: 'Ring Burger: A savory cosmic delight, boasting unique flavors in every bite.' },
        { name: 'Galaxy Pops', price: '65$', imgSrc: galaxyPopsImg, desc: 'Galaxy Pops: Bursting with cosmic hues, a tangy-sweet celestial sensation awaits.' },
        { name: 'Space Odyssey Sushi', price: '58$', imgSrc: cosmoSushiImg, desc: 'Space Odyssey Sushi: A stellar fusion of flavors taking your palate on an intergalactic adventure.' },
        { name: 'Nebula Noodles', price: '76$', imgSrc: nebulaNoodlesImg, desc: 'Nebula Noodles: Handcrafted swirls of flavors that transport your taste buds on a cosmic journey.' },
        { name: 'Stardust Boba Brew', price: '35$', imgSrc: rubbleTeaImg, desc: 'Stardust Boba Brew: A celestial concoction swirling with cosmic flavors, a sip of stellar delight.' },
        { name: 'Nebula Delight Pizza', price: '100$', imgSrc: pizzaImg, desc: 'Nebula Delight Pizza: A cosmic culinary marvel boasting celestial flavors atop a heavenly crust delight.' }
    ];

    selection.appendChild(selectionHome);
    selection.appendChild(selectionMenu);
    selection.appendChild(selectionContact);
    headbar.appendChild(selections);
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
        img.alt = 'item image';

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
