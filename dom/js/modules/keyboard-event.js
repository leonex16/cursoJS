const d = document;
let $circle = d.querySelector('.block-container__circle');
let topProperty = 0;
let leftProperty = 0;

const shortcuts = even => {
	let containerLimit = d.querySelector('.block-container').getBoundingClientRect();
	let circleLimit = $circle.getBoundingClientRect();

	switch (true) {
		case even.key === 'ArrowUp':
			// even.preventDefault();
			if ($circle.style.top !== '') topProperty = $circle.style.top.split('%')[0];
			if (circleLimit.top > containerLimit.top) $circle.style.top = `${parseInt(topProperty) - 5}%`;
			break;
		case even.key === 'ArrowLeft':
			// even.preventDefault();
			if ($circle.style.left !== '') leftProperty = $circle.style.left.split('%')[0];
			if (circleLimit.left > containerLimit.left) $circle.style.left = `${parseInt(leftProperty) - 5}%`;
			break;
		case even.key === 'ArrowDown':
			// even.preventDefault();
			if ($circle.style.top !== '') topProperty = $circle.style.top.split('%')[0];
			if (circleLimit.bottom < containerLimit.bottom) $circle.style.top = `${parseInt(topProperty) + 5}%`;
			break;
		case even.key === 'ArrowRight':
			// even.preventDefault();
			if ($circle.style.left !== '') leftProperty = $circle.style.left.split('%')[0];
			if (circleLimit.right < containerLimit.right) $circle.style.left = `${parseInt(leftProperty) + 5}%`;
			break;
		case even.ctrlKey && even.key === 'a':
			// even.preventDefault();
			window.alert('Esto es una alerta');
			break;
		case even.altKey && even.key === 'c':
			// even.preventDefault();
			window.confirm('Esto es una confirmación');
			break;
		case even.ctrlKey && even.altKey && even.key === 'p':
			// even.preventDefault();
			window.prompt('Esto es un rápido');
			break;
	};
};

export {shortcuts};