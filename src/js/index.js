//   :::::: Variables
const $menu          = document.querySelector('.navbar__menu');
const $navBarOverlay = document.querySelector('.navbar__overlay');
const $iconHamburger = document.querySelector('.navbar__icon-hamburger img');
let querystate       = window.matchMedia('(max-width: 1024px)');

$iconHamburger.addEventListener('click', () => {
	if ($menu.classList.contains('exit-for-left') && $navBarOverlay.classList.contains('fade-out')) {
		$menu.classList.remove('exit-for-left');
		$navBarOverlay.classList.remove('fade-out');
	}

	// Mostramos y le damos la animación al menú
	$menu.style.display = 'block';
	$menu.classList.add('enter-for-right');

	// Overlay del menú
	$navBarOverlay.style.display = 'block';
	setTimeout(() => {
		$navBarOverlay.classList.add('fade-in');
	}, 100);
});

$navBarOverlay.addEventListener('click', () => {
	// Removemos el overlay del menú
	$navBarOverlay.classList.replace('fade-in', 'fade-out');
	setTimeout(() => {
		$navBarOverlay.style.display = 'none';
	}, 300);


	// Quitamos y le damos la animación al menú
	$menu.classList.replace('enter-for-right', 'exit-for-left');
	setTimeout(() => {
		$menu.style.display = 'none';
	}, 750);
});


if (querystate.matches) {

	const $links = document.querySelectorAll('.navbar__menu-link');
	for (const $link of $links) {
		$link.addEventListener('click', () => {
			$navBarOverlay.classList.replace('fade-in', 'fade-out');
			setTimeout(() => {
				$navBarOverlay.style.display = 'none';
			}, 300);


			$menu.classList.replace('enter-for-right', 'exit-for-left');
			setTimeout(() => {
				$menu.style.display = 'none';
			}, 750);
		});
	}
}