const getUbication = () => {
	const $elementUbicationArr = d.querySelectorAll('.section-body__ubication');
	const positionOptions = {
		enableHighAccuracy : true,
		timeout: Infinity, // ms | Infinity
		maximumAge: Infinity // 0 | Infinity
	};
	window.navigator.geolocation.getCurrentPosition(
		success => {
			let link = `https://www.google.cl/maps/@${success.coords.latitude},${success.coords.longitude}20z`;
			$elementUbicationArr[0].insertAdjacentText('beforeend', success.coords.latitude);
			$elementUbicationArr[1].insertAdjacentText('beforeend', success.coords.longitude); 
			$elementUbicationArr[2].insertAdjacentText('beforeend', success.coords.accuracy + ' mts');
			$elementUbicationArr[2].nextElementSibling.setAttribute('href', link);
		},
		error => {
			console.warn(`ERROR en getUbication: ${error}`)
		},
		positionOptions
	);
};