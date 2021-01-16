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
const contactForm = () => {
  $formGroups.forEach(div => {
    div.firstElementChild.addEventListener('blur', e => {
      let typeReg = e.target.getAttribute('data-type-reg');
      let inputVal = e.target.value;
      validValue(e.target.nextElementSibling, expReg[typeReg], inputVal);
    });
  });
};

export {contactForm};