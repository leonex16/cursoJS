const openWindow = (tryBtn, closeBtn, link, w, h) => {
	let windowConf = `menubar=no,navegationtoolbar=no,bookmarktoolbar=no,width=${w},height=${h},statusbar=no,centerscreen=yes`;
	closeBtn.disabled = false;
	closeBtn.classList.remove('no-hover');
	tryBtn.disabled = true;
	tryBtn.classList.add('no-hover');
	return window.open(link, 'Window name', windowConf);
};

const closeWindow = (tryBtn, closeBtn, window) => {
	closeBtn.disabled = true;
	closeBtn.classList.add('no-hover');
	tryBtn.disabled = false;
	tryBtn.classList.remove('no-hover');
	window.close();
};

let win;
const responsiveTester = e => {
	if (e.target.matches('.tester-container__button')) {
		const $tryBtn = d.querySelectorAll('.tester-container__button')[0];
		const $closeBtn = d.querySelectorAll('.tester-container__button')[1];
		const url = d.querySelectorAll('.tester-container__input')[0].value;
		const width = d.querySelectorAll('.tester-container__input')[1].value;
		const height = d.querySelectorAll('.tester-container__input')[2].value;

		if (url.length > 10 && width.length > 1 && height.length > 1) {
			if (e.target.textContent === 'Probar') {
				win = openWindow($tryBtn, $closeBtn, url, width, height);
			} else {
				closeWindow($tryBtn, $closeBtn, win);
			};
		};
	};
};

export {responsiveTester};