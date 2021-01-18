const d = document;
const showNetworkMessage = classAdd => {
	const $networkMsg = d.querySelector('.network-message');
	$networkMsg.className = 'network-message';
	$networkMsg.classList.add(classAdd);
	setTimeout(() => $networkMsg.classList.remove(classAdd), 3000);
};
const detectConnection = () => {
	const classAdd = window.navigator.onLine ? 'network-container__message--online' : 'network-container__message--offline';	
	showNetworkMessage(classAdd);
};

export {detectConnection};