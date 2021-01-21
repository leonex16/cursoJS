let $main = document.querySelector('.main-container');
let $linkContainer = document.querySelector('.links-container');
export default function getHTML(path){
  let xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', e => {
    if(xhr.readyState !== 4) return;
    if(xhr.status >= 200 && xhr.status < 300){
      let html = xhr.responseText;
      $main.innerHTML = html;
    }else{
      let message = xhr.statusText || 'Ocurrió un error';
      console.error('Error %s: %s', xhr.status, message);
    };
  });

  xhr.open('GET', path);
  xhr.setRequestHeader('Content-Type', 'text/html; charset=utf-8');

  xhr.send();
};

$linkContainer.addEventListener('click', e =>{
  if(e.target.matches('.links-container__link')){
    e.preventDefault();
    getHTML(e.target.href);
  }
});