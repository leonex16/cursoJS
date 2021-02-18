export function searchForm(){
  let $form = document.createElement('form');
  let $input = document.createElement('input');
  
  $input.type = 'search';
  $input.name = 'search';
  $input.placeholder = 'Buscar...';
  $form.classList.add('form-search');
  $form.appendChild($input);

  if(location.hash.includes('#/search')) $input.value = localStorage.getItem('wpSearch');

  return $form;
};

document.addEventListener('submit', e => {
  if(!e.target.matches('.form-search')) return false;

  e.preventDefault();
  localStorage.setItem('wpSearch', e.target.search.value);
  location.hash = `#/search?search=${e.target.search.value}`;
});