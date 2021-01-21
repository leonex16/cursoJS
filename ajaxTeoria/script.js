let $empleyeesContainerFetch = document.querySelector('#fetch');
let $empleyeesContainerAsync = document.querySelector('#async');

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => {
  if (!data.ok){
    throw [data.status, data.statusText]
  }else{
    return data.json();
  };
})
.then(json => {
  json.forEach(userObj => {
    $empleyeesContainerFetch.innerHTML += `<li class="list-container__item">${userObj.name} --- ${userObj.email} --- ${userObj.address.city}</li>`;
  });
})
.catch(err => console.error('Error desde el catch. Estado %s, Mensaje: %s', err[0], err[1]))
// .finally(() => console.info('Se finaliza el ejercicio.'));

async function getData(link){
  try {
    let apiFetch = await fetch(link);
    if(!apiFetch.ok){
      throw 'Error Gigante';
    }else{
      let json = await apiFetch.json();
      json.forEach(userObj => {
        $empleyeesContainerAsync.innerHTML += `<li class="list-container__item">${userObj.name} --- ${userObj.email} --- ${userObj.address.city}</li>`;
      });
    };
  } catch (error) {
    console.error(error);
  } finally{
    // console.info('Se finaliza el ejercicio.');
  };
}; 

getData('https://jsonplaceholder.typicode.com/users');