const d = document;
let $hamburgerButton = d.querySelector('#hamburger-button');
let $menuLayer = d.querySelector('.menu-layer');

const hamburgerToggle = (even, classArr) => {
	if (classArr.includes('hamburger') ||
		classArr.includes('hamburger-box') ||
		classArr.includes('hamburger-inner')) {
		$hamburgerButton.classList.toggle('is-active');
		if ($menuLayer.style.animation === '') {
			$menuLayer.style.animation = 'swipe-lr .5s forwards';
		} else {
			$menuLayer.style.animation = '';
		};
	};
	if (even.target.matches('.link-container__text')) {
		$menuLayer.style.animation = '';
		$hamburgerButton.classList.toggle('is-active');
	};
};

export {hamburgerToggle};