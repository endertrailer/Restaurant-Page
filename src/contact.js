import managerImg from '../src/images/manager.jpeg';
import rickImg from '../src/images/rick.jpeg';
import chefImg from '../src/images/chef.jpeg';

export function contactPage() {
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
    selectionMenu.textContent = 'Menu';

    const selectionContact = document.createElement('div');
    selectionContact.classList.add('selection');
    selectionContact.textContent = 'Contact';
    selectionContact.style.backgroundColor = 'cornflowerblue';

    const midarea = document.createElement('div');
    midarea.classList.add('midarea');

    const barbox = document.createElement('div');
    barbox.classList.add('barbox');

    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.textContent = 'Contact us';

    const contacts = document.createElement('div');
    contacts.classList.add('contacts');

    const contactDetails = [
        {
            name: 'Manager Rob Banks',
            email: 'RobBanks1100998@Astro.com',
            phone: '111-999-222',
            address: 'GalactiCom: ST-ALPH-TH9',
            imageSrc: managerImg
        },
        {
            name: 'Reception Rick Sanchez',
            email: 'Ricksanchez57811@Astro.com',
            phone: '555-222-777',
            address: 'GalactiCom: NB-NX-3G6T1D',
            imageSrc: rickImg
        },
        {
            name: 'Chef Luna Ling',
            email: 'Lunaling55466288@Astro.com',
            phone: '111-999-222',
            address: 'GalactiCom: ST-ALPH-TH9',
            imageSrc: chefImg
        }
    ];

// Create contact boxes using contact details
contactDetails.forEach(contact => {
    const contactbox = document.createElement('div');
    contactbox.classList.add('contactbox');

    const contact_text = document.createElement('div');
    contact_text.classList.add('contact_text');

    const contact_name = document.createElement('div');
    contact_name.classList.add('contact_name');
    contact_name.textContent = contact.name;

    const contact_id = document.createElement('div');
    contact_id.classList.add('contact_id');

    const email = document.createElement('div');
    email.classList.add('email');
    email.textContent = contact.email;

    const phone = document.createElement('div');
    phone.classList.add('phone');
    phone.textContent = contact.phone;

    const contact_address = document.createElement('div');
    contact_address.classList.add('contact_address');
    contact_address.textContent = contact.address;

    const contact_img = document.createElement('img');
    contact_img.classList.add('contact_img');
    contact_img.alt = 'some';
    contact_img.src = contact.imageSrc;

    contact_id.appendChild(email);
    contact_id.appendChild(phone);
    contact_text.appendChild(contact_name);
    contact_text.appendChild(contact_id);
    contact_text.appendChild(contact_address);
    contactbox.appendChild(contact_text);
    contactbox.appendChild(contact_img);
    contacts.appendChild(contactbox);
});

// Append the created elements to their respective parent elements
selections.appendChild(selectionHome);
selections.appendChild(selectionMenu);
selections.appendChild(selectionContact);
headbar.appendChild(selections);
content.appendChild(headbar);
barbox.appendChild(bar);
midarea.appendChild(barbox);
midarea.appendChild(contacts);
content.appendChild(midarea);

  
  

}