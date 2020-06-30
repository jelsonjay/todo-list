'use strict';

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

		console.log('test');
	});
}

window.addEventListener('load', getElement);
