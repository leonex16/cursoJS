export function postCard(props){
  let {_embedded, date, id, slug, title} = props;
  let urlPoster = _embedded.hasOwnProperty('wp:featuredmedia') ? _embedded['wp:featuredmedia'][0].source_url : 'app/assets/favicon.ico';
  let altPoster = _embedded.hasOwnProperty('wp:featuredmedia') ? _embedded['wp:featuredmedia'][0].alt_text || title.rendered : false;
  return `
  <article class="post-card">
    <img src="${urlPoster}" alt="${altPoster}">
    <h2>${title.rendered}</h2>
    <p>
      <time datatime="${new Date(date).toLocaleDateString('es-cl')}">${new Date(date).toLocaleDateString('es-cl')}</time>
      <a href="#/${slug}" data-id=${id}>Ver Publicación</a>
    </p>
  </article>
  `;
};

document.addEventListener('click', e => {
  if(!e.target.matches('.post-card a')) return false;
  localStorage.setItem('wpLinkId', e.target.dataset.id);
});