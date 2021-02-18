import { postCard } from "../components/PostCard.js";
import { searchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import wpApi from "./wpApi.js";

export async function infiniteScroll(){
  let query = localStorage.getItem('wpSearch');
  let apiUrl = '';
  let component = '';
  
  window.addEventListener('scroll', async e => {
    let {scrollTop, clientHeight, scrollHeight} = document.documentElement;
    let {hash} = location;

    if(scrollTop + clientHeight + 10 > scrollHeight){
      wpApi.pager++;

      if(!hash || hash === '#/'){
        apiUrl = `${wpApi.posts}&page=${wpApi.pager}`;
        component = postCard;
      }else if(hash.includes('#/search')){
        apiUrl = `${wpApi.search}${query}&page=${wpApi.pager}`
        component = searchCard;
      }else{ return false };

      await ajax({
        url: apiUrl,
        cbSuccess: posts => {
          let html = '';
          posts.forEach(post => html += component(post));
          document.getElementById('main').insertAdjacentHTML('beforeend', html);
        }
      });
    };
  });
};