import wpApi from '../helpers/wpApi.js';
import { ajax } from '../helpers/ajax.js';
import { postCard } from './PostCard.js';
import { post } from './Post.js';
import { searchCard } from './SearchCard.js';
import { contactForm } from './ContactForm.js';

export async function router(){
  let {hash} = location;
  let $main = document.querySelector('#main');
  
  $main.innerHTML = null;

  switch(true){
    case !hash || hash === '#/':
      await ajax({
        url: wpApi.posts,
        cbSuccess: posts => {
          let html = '';
          posts.forEach(post => html += postCard(post));
          $main.innerHTML = html;
        }
      });
      break;
    case hash.includes('#/search'):
      let query = localStorage.getItem('wpSearch');

      if(!query) return false;

      await ajax({
        url: `${wpApi.search}${query}`,
        cbSuccess: dataSearch => {
          let html = '';
          if(dataSearch.length === 0){
            html = `<p class="error">No existen resultado de búsqueda para el termino '${query}'</p>`;
          }else{
            dataSearch.forEach(data => html += searchCard(data));
          };
          $main.innerHTML = html;
        }
      });
      break;
    case hash === '#/contacto':
      $main.appendChild(contactForm());
      break;
    default:
      console.log(`${wpApi.post}/${localStorage.getItem('wpLinkId')}`)
      await ajax({
        url: `${wpApi.post}/${localStorage.getItem('wpLinkId')}`,
        cbSuccess: data => {
          $main.innerHTML =  post(data);
        }
      });
      break;
  };
  document.querySelector('.loader').remove();
  // document.querySelector('.loader') ? document.querySelector('.loader').remove() : false;
};