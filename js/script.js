import { hamburgerToggle } from './modules/hamburger-menu.js';
import { sectionOne } from './modules/digital-clock.js';
import { shortcuts } from './modules/keyboard-event.js';
// import {  } from './modules/countdown.js';
import { scrolllUp, scrolllUpClick } from './modules/scroll-up.js';
import { darkModeToggle, darkMode } from './modules/dark-mode.js';
import { sliderResposive } from './modules/slider-responsive.js';
import { responsive } from './modules/responsive-js.js';
import { responsiveTester } from './modules/responsive-tester.js';
import { userInformation } from './modules/navigator.js';
import { detectConnection } from './modules/detect-network.js';
// import {  } from './modules/detect-webcam.js';
// import {  } from './modules/geolocation.js';
import { createCard, objImg, filterSearch } from './modules/filter-search.js';
import { createRaffleDOM, dataArr, digitalRaffle } from './modules/digital-raffle.js';
import { srollSpy } from './modules/scroll-spy.js';
import { playOrPause, smartVideo } from './modules/smart-video.js';
import { contactForm } from './modules/contact-form.js';


document.addEventListener('DOMContentLoaded', () => {
	if (localStorage.getItem('theme') === null) localStorage.setItem('theme', 'light');
	if (localStorage.getItem('theme') !== 'light') darkModeToggle();
	responsive();
	userInformation();
	// detectWebCam();
	// getUbication();
	createCard(objImg);
	createRaffleDOM(dataArr);
	srollSpy();
	smartVideo();
	contactForm();
});

document.addEventListener('scroll', e => {
	scrolllUp()
});

document.addEventListener('keydown', e => {
	shortcuts(e);
});

document.addEventListener('keyup', e => {
	filterSearch(e);
});

document.addEventListener('click', e => {
	hamburgerToggle(e, e.target.classList.value.split(' '));
	sectionOne(e);
	scrolllUpClick(e);
	darkMode(e)
	responsiveTester(e)
	sliderResposive(e);
	digitalRaffle(e, dataArr);
});

document.addEventListener('visibilitychange', e => {
	const $video = document.querySelector('.smart-video');
	playOrPause($video, !document.hidden)
});

window.addEventListener('online', () => detectConnection());
window.addEventListener('offline', () => detectConnection());

