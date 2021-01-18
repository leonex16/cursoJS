const d = document;
const desktopDisplay = link => {
	const $iframe = d.createElement('iframe');
	$iframe.setAttribute('class', 'section-body__desktop-element');
	$iframe.setAttribute('src', link);
	return $iframe;
};

const mobileDisplay = (n, link) => {
	const $a = d.createElement('a');
	$a.setAttribute('class', 'section-body__mobile-element');
	$a.setAttribute('href', link);
	$a.textContent = `Enlace ${n}`;
	return $a;
};

const responsive = () => {
	const $template = d.querySelector('#element-to-load');
	const $parentElement = $template.parentElement;
	const $fragment = d.createDocumentFragment();
	const breakpoint = window.matchMedia('(min-width: 768px)');
	const elementToLoad = [
		// 'https://www.youtube.com/embed/6IwUl-4pAzc',
		// 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.256167273655!2d-70.70786538425537!3d-33.59865728073181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d94f6eef1f51%3A0x48e82f1d2eb65ea9!2sDuoc!5e0!3m2!1ses-419!2scl!4v1609816528155!5m2!1ses-419!2scl'
	];
	let counter = 0;

	elementToLoad.forEach(link => {
		if (breakpoint.matches) {
			$fragment.appendChild(desktopDisplay(link))
		} else {
			counter++;
			$fragment.appendChild(mobileDisplay(counter, link));
		};
	});

	$parentElement.appendChild($fragment);
};

export {responsive};