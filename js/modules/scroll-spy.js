const d = document;
const srollSpy = () => {
	const $sectionElements = d.querySelectorAll('section[data-scroll-spy]');
	const callback = entries =>{
		entries.forEach(entry => {
			const $linkIntersecting = d.querySelector(`a[href="#${entry.target.id}"]`);
			if(entry.isIntersecting){
				$linkIntersecting.classList.add('sroll-spy');
			}else{
				$linkIntersecting.classList.remove('sroll-spy');
			}
		});
	};
	const options = {
		//root: document,
		//rootMargin: "-490px",
		threshold: 0.5
	};
	const observer = new IntersectionObserver(callback, options);
	$sectionElements.forEach(section => observer.observe(section));
};

export {srollSpy};