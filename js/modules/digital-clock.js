const d = document;
let $digitalClock = d.querySelector('.section-body__clock');
let $alarm = d.querySelector('.section-body__alarm');

const clockAct = (digitalClock, elem) => {
	let clock = new Date().toTimeString().split(' ')[0];
	digitalClock.textContent = clock;
	elem.target.disabled = true;
};

const clockDis = (digitalClock, elem) => {
	digitalClock.textContent = '';
	elem.target.previousElementSibling.disabled = false;
	clearInterval(3);
};

const alarmAct = alarm => alarm.play();

const alarmDis = alarm => alarm.pause();


const sectionOne = (even) => {
	switch (even.target.id) {
		case 'btn-clock-act':
			let actInterval = setInterval(() => clockAct($digitalClock, even), 1000);
			break;
		case 'btn-clock-dis':
			clockDis($digitalClock, even);
			break;
		case 'btn-alarm-act':
			alarmAct($alarm);
			break;
		case 'btn-alarm-dis':
			alarmDis($alarm);
			break;

		default:
			break;
	}
};

export {sectionOne};