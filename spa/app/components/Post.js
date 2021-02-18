export function post(props) {
  let {title, date, content} = props;
  return `
  <section class="post-page">
  <aside>
    <h2>${title.rendered}</h2>
    <time datetime="">${new Date(date).toLocaleString('es-cl')}</time>
  </aside>
  <hr>
  <article>${content.rendered}</article>
</section>
  `;
};