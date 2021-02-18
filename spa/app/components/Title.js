import wpApi from '../helpers/wpApi.js';

export function title(){
  let $h1 = document.createElement('h1');
  let $a = document.createElement('a');
  
  $a.target = '_blank';
  $a.rel = 'noopener';
  $a.href = wpApi.domain;
  $a.textContent = wpApi.name.toUpperCase();
  $h1.appendChild($a);

  return $h1;
};