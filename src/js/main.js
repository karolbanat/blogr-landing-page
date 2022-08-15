let toggleBtn;
let primaryNav;
let dropdownToggles;
let dropdownLinks;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	toggleBtn = document.querySelector('.toggle-btn');
	primaryNav = document.querySelector('#primary-nav');
	dropdownToggles = document.querySelectorAll('.primary-navigation__dropdown-toggle');
	dropdownLinks = document.querySelectorAll('.primary-navigation__dropdown-link');
};

const prepareDOMEvents = () => {
	toggleBtn.addEventListener('click', handleToggleButton);
	dropdownToggles.forEach((toggle) => toggle.addEventListener('click', handleDropdownToggles));
	dropdownLinks.forEach((link) => link.addEventListener('click', closeNav));
};

const handleToggleButton = () => {
	primaryNav.toggleAttribute('data-expanded');

	if (primaryNav.hasAttribute('data-expanded')) {
		toggleBtn.setAttribute('data-expanded', 'true');
		toggleBtn.setAttribute('aria-expanded', 'true');
	} else {
		closeElement(toggleBtn);
	}
};

const handleDropdownToggles = (e) => {
	const toggle = e.target;
	closeOtherDropdownToggles(toggle);
	toggle.toggleAttribute('data-expanded');
	toggle.hasAttribute('data-expanded')
		? toggle.setAttribute('aria-expanded', 'true')
		: toggle.setAttribute('aria-expanded', 'false');
};

const closeOtherDropdownToggles = (toggleToLeave) => {
	dropdownToggles.forEach((toggle) => {
		if (toggle !== toggleToLeave) {
			closeElement(toggle);
		}
	});
};

const closeNav = () => {
	clearDropdownToggles();
	closeElement(toggleBtn);
	closeElement(primaryNav);
};

const clearDropdownToggles = () => {
	dropdownToggles.forEach((toggle) => toggle.removeAttribute('data-expanded'));
};

const closeElement = (element) => {
	element.removeAttribute('data-expanded');
	element.setAttribute('aria-expanded', 'false');
};

document.addEventListener('DOMContentLoaded', main);
