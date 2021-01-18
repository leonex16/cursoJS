const d = document;
const dataArr = [
	'javascript',
	'python',
	'c#',
	'java',
	'go',
	'dart'
];
const createRaffleDOM = (dataArr) => {
	const $raffleContainer = d.querySelector('.section-body__select-winner');
	
	dataArr.forEach(elem => {
		const p = d.createElement('p');
		p.classList.add('section-body__data-raffle');
		p.textContent = elem;
		$raffleContainer.insertAdjacentElement('beforebegin', p);
	});
};
const digitalRaffle = (e, dataArr) => {
	if(e.target.matches('.section-body__select-winner')){
		let numberWinner = Math.round(Math.random()*(dataArr.length -1));
		let winnerFormated = dataArr[numberWinner].charAt(0).toUpperCase() + dataArr[numberWinner].substring(1);
		window.alert(`El ganador es ${winnerFormated}`);
	};
};

export {createRaffleDOM,dataArr, digitalRaffle};