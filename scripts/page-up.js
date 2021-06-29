(() => {
    const pageUp = document.querySelector('.page-up');

    pageUp.addEventListener('click', event => {
        event.preventDefault();

        scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        pageUp.blur();
    });

    window.addEventListener('scroll', event => {
        if (scrollY > innerHeight / 2) {
            pageUp.classList.remove('page-up--hidden');
        } else {
            pageUp.classList.add('page-up--hidden');
        }
    });
})();
