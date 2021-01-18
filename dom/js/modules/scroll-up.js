const d = document;
let $circleUp = d.querySelector('.circle-up');

const scrolllUp = () => {
	window.pageYOffset >= 500 ? $circleUp.classList.remove('circle-up--hidden') : $circleUp.classList.add('circle-up--hidden');
};

const scrolllUpClick = e => {
	if (e.target.matches('.circle-up')) {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
			left: 0
		});
	};
};

export {scrolllUp, scrolllUpClick};