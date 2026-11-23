import './styles/main.scss';
import { Navigation } from './js/navigation.js';

const header = document.querySelector('[data-header]');

if (header) {
  new Navigation(header).init();
}
