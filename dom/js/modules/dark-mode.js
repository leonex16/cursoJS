const d = document;
let $darkMode = d.querySelector('.dark-mode');
let counter = 0;
let moon = '🌙';
let sun = '☀️';

$darkMode.textContent = moon;

const darkModeToggle = () => {
	let $elementWithDataDark = d.querySelectorAll('[data-dark]');
	$elementWithDataDark.forEach(elem => elem.classList.toggle('dark-mode--active'));
	$darkMode.textContent === moon ? $darkMode.textContent = sun : $darkMode.textContent = moon;
	localStorage.getItem('theme') === 'light' ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
};

const darkMode = e => {
	if (e.target.matches('.dark-mode')) {
		darkModeToggle();
	};
};

export {darkModeToggle, darkMode};