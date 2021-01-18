const d = document;
const objImg = {
	one_animals: 'https://placeimg.com/640/480/animals',
	one_architecture: 'https://placeimg.com/640/480/architecture',
	one_nature: 'https://placeimg.com/640/480/nature',
	one_people: 'https://placeimg.com/640/480/people',
	one_tech: 'https://placeimg.com/640/480/tech',
	one_any: 'https://placeimg.com/640/480/any',
	two_animals: 'https://placeimg.com/640/500/animals',
	two_architecture: 'https://placeimg.com/640/500/architecture',
	two_nature: 'https://placeimg.com/640/500/nature',
	two_people: 'https://placeimg.com/640/500/people',
	two_tech: 'https://placeimg.com/640/500/tech',
	two_any: 'https://placeimg.com/640/500/any'
};
const createCard = dataObj => {
	const $templateCard = d.querySelector('#template-card');
	const $fragment = d.createDocumentFragment();
	let tempCard;
	for (const key in dataObj) {
		tempCard = $templateCard.cloneNode(true);
		tempCard.content.firstElementChild.style.background = `url('${dataObj[key]}')`;
		tempCard.content.firstElementChild.firstElementChild.textContent = key;
		$fragment.appendChild(tempCard.content);
	};
	d.querySelector('.section-body__grid-card').appendChild($fragment);
};
const filterSearch = e => {
	if(e.target.matches('.section-body__search')){
		const $descriptionImg = d.querySelectorAll('.img-container__description');
		let str = d.querySelector('.section-body__search').value;
		let regex = new RegExp(str, 'i')
		for (const elemDescription of $descriptionImg) {
			if(!regex.test(elemDescription.textContent)){
				elemDescription.parentElement.classList.add('img-container--none');
				elemDescription.parentElement.classList.add('img-container--opacity');
			}else{
				elemDescription.parentElement.classList.remove('img-container--none');
				elemDescription.parentElement.classList.remove('img-container--opacity');
			};
		}
	}
};

export {createCard, objImg,filterSearch};