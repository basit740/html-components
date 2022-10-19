const modal = document.querySelector('.modal');
const modalOuter = document.querySelector('.modal_outer');

const bntOpen = document.querySelector('.btn_open');
const btnClose = document.querySelector('.btn_close');

bntOpen.addEventListener('click', function (event) {
	modal.style.display = 'block';
});

modal.addEventListener('click', function (event) {
	modal.style.display = 'none';
});

modalOuter.addEventListener('click', function (e) {
	e.stopPropagation();
});

btnClose.addEventListener('click', function (e) {
	modal.style.display = 'none';
});
