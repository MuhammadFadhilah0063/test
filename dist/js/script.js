// Navbar Fixed
window.onscroll = function () {
	const header = document.querySelector('header');
	const btnTotop = document.querySelector('#btn-to-top');
	const fixedNav = header.offsetTop;

	if (window.scrollY > fixedNav) {
		header.classList.add('navbar-fixed');
		btnTotop.classList.remove('hidden');
		btnTotop.classList.add('flex');
	} else {
		header.classList.remove('navbar-fixed');
		btnTotop.classList.remove('flex');
		btnTotop.classList.add('hidden');
	}
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('hamburger-active');
	navMenu.classList.toggle('hidden');
});

// klik di luar Hamburger
window.addEventListener('click', function (e) {
	if (e.target != hamburger && e.target != navMenu) {
		hamburger.classList.remove('hamburger-active');
		navMenu.classList.add('hidden');
	}
});

const btnDark = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

btnDark.addEventListener('click', function () {
	if (btnDark.checked) {
		html.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		html.classList.remove('dark');
		localStorage.theme = 'light';
	}
});

// pindahkan toggle circle sesuai localStorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	btnDark.checked = true;
} else {
	btnDark.checked = false;
}
