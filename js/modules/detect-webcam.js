const detectWebCam = () => {
	const $webCamContainer = d.querySelector('.webcamera-container');
	if (window.navigator.mediaDevices.getUserMedia) {
		window.navigator.mediaDevices.getUserMedia({
			audio: false,
			video: true,
		})
			.then(data => {
				$webCamContainer.srcObject = data;
				$webCamContainer.play();
			})
			.catch(err => console.warn(`ERROR en detectWebCam: ${err}`));
	};
};