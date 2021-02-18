import {header} from './components/Header.js';
import {main} from './components/Main.js';
import {loader} from './components/Loader.js';
import {router} from './components/Router.js';
import { infiniteScroll } from './helpers/infiniteScroll.js';

export function App(){
  let $root = document.querySelector('#root');

  $root.innerHTML = null;
  $root.appendChild(loader());
  $root.appendChild(header());
  $root.appendChild(main());
  router();
  infiniteScroll();
};