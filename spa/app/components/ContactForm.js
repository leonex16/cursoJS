export function contactForm(){
  let $form = document.createElement('form');
  let $style = document.getElementById('dynamic-style');

  $form.classList.add('contact-form');

  $form.innerHTML = `
  <div class="contact-form__group">
    <input type="text" class="contact-form__input" pattern="^([a-zA-Z]+\\s?){10,255}" name="nombre" placeholder="Nombre" data-type-reg="name" required>
    <p class="contact-form__alert">Nombre ingresado no valido.</p>
  </div>
  <div class="contact-form__group">
    <input type="email" class="contact-form__input" pattern="(^[a-zA-Z]+\\w?(\\.|-|_)?\\w+)@([a-zA-Z]+\\.?){1,}" name="email" placeholder="Email" data-type-reg="email" required>
    <p class="contact-form__alert">Email ingresado no valido.</p>
  </div>
  <div class="contact-form__group">
    <input type="text" class="contact-form__input" pattern="^([a-zA-Z(:|,|.)?]+\\s?){10,255}" name="asunto" placeholder="Asunto a tratar" data-type-reg="text" required>
    <p class="contact-form__alert">Asunto ingresado no valido.</p>
  </div>
  <div class="contact-form__group">
    <textarea class="contact-form__input" rows="4" pattern="^([a-zA-Z(:|,|.)?]+\\s?)*{10,255}" name="comentario" placeholder="Escribe tus comentarios" data-type-reg="text" required></textarea>
    <p class="contact-form__alert" data-textarea-sibling>Mensaje ingresado no valido.</p>
  </div>
  <button class="contact-form__submit" data-dark type="submit">Enviar</button>
  `;

  $style.innerHTML = `
    .form-container{
      width: 100%;
      max-width: 500px;
      margin: auto;
    }
    
    .form-container__title{
      text-align: center;
    }
    
    .contact-form{
      display: flex;
      flex-direction: column;
    }
    
    .contact-form__group{
      position: relative;
      height: auto;
    }
    
    .contact-form__input{
      position: relative;
      border: 1px solid #2225;
      margin-top: 1rem;
      padding: 1rem .5rem;
      width: 100%;
      z-index: 1;
    }
    
    .contact-form__input:focus{
      border: 1.5px solid #222;
      outline: none;
    }
    
    .contact-form__input:valid{
      border: 2px solid var(--valid);
    }
    
    /* .contact-form__input:invalid{
      border: 2px solid var(--invalid);
    } */
    
    .contact-form__alert{
      position: absolute;
      top: 30%;
      z-index: 0;
      background-color: var(--invalid);
      font-size: 1.2rem;
      color: #fff;
      width: 100%;
      padding: .5rem;
      transition: all .1s linear;
    }
    
    .contact-form__alert--error{
      top: 60%;
      border: 1px solid var(--invalid);
    }
    
    .contact-form__submit{
      background-color: #222;
      border: none;
      color: #FBD720;
      font-size: 1.2rem;
      font-weight: bold;
      width: 80%;
      margin: 1rem auto 0 auto;
      padding: 1rem;
    }
    
    .contact-form__submit:hover{
      background-color: #FBD720;
      color: #222;
    }
  `;



  return $form;
};

const $formGroups = document.querySelectorAll('.contact-form__group');
const expReg = {
  name: new RegExp('^([a-zA-Z]+\s?){10,255}'),
  email: new RegExp('(^[a-zA-Z]+\w?(\.|-|_)?\w+)@([a-zA-Z]+\.?){1,}'),
  text: new RegExp('^([a-zA-Z(:|,|.)?]+\s?){10,255}')
};
const validValue = ($p,reg, val) => {
  const height = $p.getAttribute('data-textarea-sibling') === ''
    ? '230px'
    : '110px';
  if(!reg.test(val) || val.length < 10){
    $p.classList.add('contact-form__alert--error');
    $p.parentElement.style.height = height;
  }else{
    $p.classList.remove('contact-form__alert--error');
    $p.parentElement.style.height = 'auto';
  };
};
const contactFormVal = () => {
  $formGroups.forEach(div => {
    div.firstElementChild.addEventListener('blur', e => {
      let typeReg = e.target.getAttribute('data-type-reg');
      let inputVal = e.target.value;
      validValue(e.target.nextElementSibling, expReg[typeReg], inputVal);
    });
  });
};

setTimeout(() => contactFormVal(), 1000);