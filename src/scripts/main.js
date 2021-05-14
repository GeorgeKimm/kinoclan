// header

const header = document.querySelector('.header');
const searchButton = document.querySelector('.search_btn1');
const openMenuButton = document.querySelector('.header_hamburger');
const closeMenuButton = document.querySelector('.menu_close');

searchButton.addEventListener('click', () => {
	header.classList.toggle('header_search_enable');
});

openMenuButton.addEventListener('click', () => {
	document.body.classList.add('menu_open');
});

closeMenuButton.addEventListener('click', () => {
	document.body.classList.remove('menu_open');
});

window.addEventListener('DOMContentLoaded', () => {
	document.documentElement.style.setProperty('--scroll-width', `${innerWidth - document.body.clientWidth}px`);
});

// Expansion Panel

const panels = document.querySelectorAll(".expansion_panel");

const bindEvents = (panel) => {
    const button = panel.querySelector(".expansion_panel_button");
    const body = panel.querySelector(".expansion_panel_body");
    const content = panel.querySelector(".expansion_panel_content");

    button.addEventListener("click", () => {
        panel.style.setProperty("--client-height", `${content.clientHeight}px`);

        setTimeout(() => {
            panel.classList.toggle("open");
        });
    });

    body.addEventListener("transitionend", () => {
        panel.style.setProperty("--client-height", "auto");
    });
};

for (const panel of panels) {
    bindEvents(panel);
}

const headerLinks = document.querySelectorAll(".nav_link2");

const headerCards = document.querySelectorAll(".nav_container .cards");

for (const headerLink of headerLinks) {
    headerLink.addEventListener("mouseenter", () => {
        for (const headerLink of headerLinks) {
            headerLink.parentElement.classList.remove("nav_item2_active");
        }

        headerLink.parentElement.classList.add("nav_item2_active");
        const target = document.querySelector(headerLink.dataset.target);
        // const target = document.querySelector(headerLink.getAttribute('href'));
        for (const headerCard of headerCards) {
            headerCard.classList.add("cards_hidden");
        }
        target.classList.remove('cards_hidden')
    });
}

