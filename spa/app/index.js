import {App} from './App.js';
import wpApi from './helpers/wpApi.js';


document.addEventListener('DOMContentLoaded', App);
window.addEventListener('hashchange', () => {
  wpApi.pager = 1;
  App();
});