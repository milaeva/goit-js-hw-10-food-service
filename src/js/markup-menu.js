import refs from './refs';
import menu from './menu.json';
import menuItemsTemplate from '../templates/menu-items.hbs';

const markupMenu = menuItemsTemplate(menu);
refs.menuRef.insertAdjacentHTML('beforeend', markupMenu);
