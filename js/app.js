'use strict';
window.onload = () => {
	// render day/month/year
	let dayMonthYear = document.querySelector('.date');
	let date = new Date();
	let day = date.getDate();
	console.log(day);
	let month = date.getMonth();
	console.log(month);
	let year = date.getFullYear();
	console.log(year);

	dayMonthYear.innerHTML = ` Date:  <span> ${day} / ${month} / ${year} </span>`;
};

function getElement() {
	let btn = document.querySelector('#btn');

	btn.addEventListener('click', function () {
		let list = document.querySelector('#list');
		let text = document.querySelector('#txt');
		let li = document.createElement('li');
		li.style.color = 'orange';
		li.textContent = text.value;

		list.appendChild(li);
		text.value = '';
		text.focus();
	});
}

window.addEventListener('load', getElement);
