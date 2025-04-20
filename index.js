let anchorLinks = document.querySelectorAll('a[href^="#"]');
let scrollButtons = document.querySelectorAll('button[data-target]');
let backToTop = document.getElementById('back-to-top');

anchorLinks.forEach(link => {
    let targetId = link.hash.slice(1);
    let target = document.getElementById(targetId);

    link.addEventListener('click', (e) => {
        e.preventDefault();

        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });

            if (target.classList.contains('glow')) {
                target.classList.remove('glow');
                void target.offsetWidth;
            }

            target.classList.add('glow');
        }
    });
});

scrollButtons.forEach(button => {
    let targetId = button.dataset.target.slice(1);
    let target = document.getElementById(targetId);

    button.addEventListener('click', () => {
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.classList.remove('glow');
            void target.offsetWidth;
            target.classList.add('glow');
        }
    });
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        const toc = document.getElementById('toc');
        toc.scrollIntoView({ behavior: 'smooth' });
        toc.classList.remove('glow');
        void toc.offsetWidth;
        toc.classList.add('glow');
    });
}