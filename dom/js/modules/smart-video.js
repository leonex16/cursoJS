const d = document;
const playOrPause = (video, bool) => bool ? video.play() : video.pause();
const smartVideo = () => {
	const $video = d.querySelector('.smart-video');
	const cb = entries => playOrPause($video, entries[0].isIntersecting);
	const observe = new IntersectionObserver(cb, {threshold: 0.9});
	observe.observe($video);
};

export {playOrPause, smartVideo};