const d = document;
const findBrowserVersion = (elem, browser) => {
	let exp = new RegExp(`${browser}\/`, 'i');
	return exp.test(elem);
};
const fillUserInformationContent = (k, v) => {
	const p = d.createElement('p');
	const dfn = d.createElement('dfn');

	p.classList.add('section-body__definition');
	dfn.classList.add('section-body__word');
	dfn.textContent = `${k}: `;
	p.textContent += v;
	p.insertAdjacentElement('afterbegin', dfn);

	return p;
};
const userInformation = () => {
	const n = window.navigator;
	const $userInformation = d.querySelector('#user-information');
	const isMobile = {
		'android' : () => n.userAgent.match(/android/i),
		'ios' : () => n.userAgent.match(/iphone|ipad|ipod/i),
		'any' : function(){
			return this.android() || this.ios();
		}
	};
	const isDesktop = {
		'windows' : () => n.userAgent.match(/windows/i),
		'mac' : () => n.userAgent.match(/mac os/i),
		'linux' : () => n.userAgent.match(/linux/i),
		'any' : function(){
			return this.windows() || this.mac() || this.linux();
		}
	};
	const isBrowser = {
		'chrome' : () => n.userAgent.match(/chrome/i),
		'firefox' : () => n.userAgent.match(/firefox/i),
		'edge' : () => n.userAgent.match(/edge/i),
		'opera' : () => n.userAgent.match(/opera|opera mini/i),
		'safari' : () => n.userAgent.match(/safari/i),
		'ie' : () => n.userAgent.match(/ie/i),
		'any' : function(){
			return (
				this.chrome() ||
				this.firefox() ||
				this.edge() ||
				this.opera() ||
				this.safari() ||
				this.ie()
			)
		}
	};
	const data = {
		'user-agent' : n.userAgent,
		'dispositivo' : isMobile.any() ? 'Mobile' : 'Desktop',
		'plataforma' : isMobile.any() ? isMobile.any() : isDesktop.any(),
		'navegador' : isBrowser.any(),
		'version-navegador' : n.userAgent.split(' ').find(elem => findBrowserVersion(elem, isBrowser.any())).split('/')[1],
	};

	for (const key in data) {
		$userInformation.appendChild(fillUserInformationContent(key, data[key]));
	};
};

export {userInformation};