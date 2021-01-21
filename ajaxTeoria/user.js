// CRUD
async function ajaxAsync(dataReceived){
  try {
    let {url, method, data, success} = dataReceived;
    let optionsFetch = {
      method: method || 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data !== undefined ? JSON.stringify(data) : null // body data type must match "Content-Type" header
    };
    let fetchResponse = await fetch(url, optionsFetch);
    if(!fetchResponse.ok) throw [fetchResponse.status, fetchResponse.statusText || 'Error Generico.', optionsFetch.method];
    switch(optionsFetch.method.toUpperCase()){
      case 'GET':
        let json = await fetchResponse.json();
        if(success !== undefined) success(json);
        break;
    };
  } catch (e) {
    let $tableContainer = document.querySelector('.table-container');
    let h3Element = `<h3>Error al cargar los datos\nMetodo: ${e[2]}</h3>`;
    $tableContainer.insertAdjacentHTML('afterend', h3Element);
    $tableContainer.remove();
    console.warn('ERROR_CODE: %s . ERROR_TEXT: %s', e[0], e[1]);
    console.error(e);
  };
};

function insertUserDOM(json){

};

// READ
const getUsers = () => ajaxAsync({ url: 'http://localhost:3000/users', success: json => {
  try {
    let $tableContainer = document.querySelector('.table-container');
    json.forEach(objUser => {
      let tr = `
      <tr class="table-container__row">
        <td class="table-container__itemxcol">${objUser.username || 'Sin Info'}</td>
        <td class="table-container__itemxcol">${objUser.name || 'Sin Info'}</td>
        <td class="table-container__itemxcol">${objUser.email || 'Sin Info'}</td>
        <td class="table-container__itemxcol">${objUser.hasOwnProperty('address') ? objUser.address.city : 'Sin Info'}</td>
        <td class="table-container__itemxcol">${objUser.website || 'Sin Info'}</td>
        <td class="table-container__itemxcol">
          <button class="table-container__btn" type="submit" data-id=${objUser.id}>Editar</button>
        </td>
        <td class="table-container__itemxcol">
          <button class="table-container__btn" type="submit" data-id=${objUser.id} data-del>Borrar</button>
        </td>
      </tr>
      `;
      $tableContainer.innerHTML += tr;
    });
  } catch (error) {
    console.info(error);
  };
}});
// READ
const getUser = id =>  ajaxAsync({ url: `http://localhost:3000/users/${id}`, success: user => {
  try {
    document.querySelector(".users-add__btn").textContent = 'Actualizar';
    document.querySelector(".users-add__btn").setAttribute('data-id', user.id);
    document.querySelector(".users-add__input[name='user']").value = user.hasOwnProperty('username') ? user.username : 'Sin Info';
    document.querySelector(".users-add__input[name='name']").value = user.hasOwnProperty('name') ? user.name : 'Sin Info';
    document.querySelector(".users-add__input[name='email']").value = user.hasOwnProperty('email') ? user.email : 'Sin Info';
    document.querySelector(".users-add__input[name='city']").value = user.hasOwnProperty('address') ? user.address.city : 'Sin Info';
    document.querySelector(".users-add__input[name='website']").value = user.hasOwnProperty('website') ? user.website : 'Sin Info';
  } catch (error) { 
    console.info(error);
  };
}});
// UPDATE
const updateUser = (id,data) => {
  try {
    let ajax = {
      url: `http://localhost:3000/users/${id}`,
      method: 'PUT',
      data: data,
      success: () => location.reload()
    };
    ajaxAsync(ajax);
  } catch (error) { 
    console.info(error);
  };
};
// CREATE
const createUser = data => {
    try {
      let ajax = {
        url: `http://localhost:3000/users`,
        method: 'POST',
        data: data,
        success: () => location.reload()
      };
      ajaxAsync(ajax);
  } catch (error) { 
    console.info(error);
  };
};
// DELETE
const deleteUser = id => {
    try {
      let ajax = {
        url: `http://localhost:3000/users/${id}`,
        method: 'DELETE',
        success: () => location.reload()
      };
      ajaxAsync(ajax);
  } catch (error) { 
    console.info(error);
  };
};

document.addEventListener('DOMContentLoaded', getUsers);

document.addEventListener('click', e => {
  (function(e){
    if(e.target.matches('.table-container__btn[data-id]')){
      let idUser = e.target.getAttribute('data-id');
      getUser(idUser);
    };
    if(e.target.matches('.table-container__btn[data-del]')){
      let idUser = e.target.getAttribute('data-id');
      deleteUser(idUser);
    };
  })(e);
});

document.addEventListener('submit', e => {
  e.preventDefault();
  let $form = document.querySelector('.users-add__form');
  if(e.target === $form){
    let idUser = e.submitter.getAttribute('data-id');
    let data = {
      username : e.target.user.value,
      name : e.target.name.value,
      email : e.target.email.value,
      address : {
        city : e.target.user.value
      },
      website : e.target.website.value
    };
    e.submitter.textContent === 'Agregar' ? createUser(data) : updateUser(idUser,data);
    $form.reset();
  };
});

