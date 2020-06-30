'use strict';
window.onload = () => {
	// render date
	let dateB = document.querySelector('.date');
	let date = new Date();
	let day = date.getDate();
	console.log(day);
	let month = date.getMonth();
	console.log(month);
	let year = date.getFullYear();
	console.log(year);
};

function getElement() {
	let btn = document.querySelector('#btn');

	btn.addEventListener('click', function () {
		let list = document.querySelector('#list');
		let text = document.querySelector('#txt');
		let li = document.createElement('li');

		li.textContent = text.value;

		list.appendChild(li);
		text.value = '';
		text.focus();
	});
}

window.addEventListener('load', getElement);
