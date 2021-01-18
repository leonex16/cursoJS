const d = document;
const sliderResposive = e => {
	if(e.target.matches('.slider-containet__arrow')){
		const $elements = d.querySelectorAll('.slider-element');
		let positionX = parseInt($elements[0].style.transform.slice(11,-2));
		let positionMax = (($elements.length - 1) * 100);
		
		positionX = isNaN(positionX) ? 0 : positionX;
		if(e.target.getAttribute('role') === 'left'){
			if(positionX < 0) $elements.forEach(elem => elem.style.transform = `translateX(${positionX + 100}%)`)
		}else{
			console.log(Math.abs(positionX), positionMax)
			if(Math.abs(positionX) < positionMax) $elements.forEach(elem => elem.style.transform = `translateX(${positionX - 100}%)`)
		};
	};
};

export {sliderResposive};