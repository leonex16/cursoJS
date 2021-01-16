let $countdown = d.querySelector('.countdown');
let finishDate = new Date('Jan 01, 2021 00:00:00');

const countdown = (finishDate) => {
	let restDateArr = msConvert(finishDate.getTime() - new Date().getTime());
	$countdown.textContent = `Restan
        ${Math.floor(restDateArr.y)} Años,
        ${Math.floor(restDateArr.m)} Meses,
        ${Math.floor(restDateArr.w)} Semanas,
        ${Math.floor(restDateArr.d)} Días,
        ${Math.floor(restDateArr.hh)} Horas,
        ${Math.floor(restDateArr.mm)} Minutos,
        ${Math.floor(restDateArr.ss)} Segundos
    `;
};
setInterval(() => countdown(finishDate), 1000);

const msConvert = ms => {
	let convertionFactor = {
		y: (1000 * 60 * 60 * 24 * 7 * 30 * 12),
		m: (1000 * 60 * 60 * 24 * 7 * 30),
		w: (1000 * 60 * 60 * 24 * 7),
		d: (1000 * 60 * 60 * 24),
		hh: (1000 * 60 * 60),
		mm: (1000 * 60),
		ss: (1000),
	};
	let obj = {};

	obj.y = ms / convertionFactor.y;
	obj.m = (ms % convertionFactor.y) / (convertionFactor.m);
	obj.w = (ms % convertionFactor.m) / (convertionFactor.w);
	obj.d = (ms % convertionFactor.w) / (convertionFactor.d);
	obj.hh = (ms % convertionFactor.d) / (convertionFactor.hh);
	obj.mm = (ms % convertionFactor.hh) / (convertionFactor.mm);
	obj.ss = (ms % convertionFactor.mm) / (convertionFactor.ss);

	return obj;
};