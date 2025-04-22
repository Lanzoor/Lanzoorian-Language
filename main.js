let anchorLinks = document.querySelectorAll('a[href^="#"]');
let scrollButtons = document.querySelectorAll('button[data-target]');
let backToTop = document.getElementById('back-to-top');
let modal = document.querySelector('.modal');
let pronounsCheck = document.getElementById('check_pronouns');
let singularPronouns = document.getElementById('sing_pronouns');
let pluralPronouns = document.getElementById('plur_pronouns');
let pronounsStatus = document.getElementById('stat_pronouns');

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

if (backToTop) {
    backToTop.addEventListener('click', () => {
        const toc = document.getElementById('toc');
        toc.scrollIntoView({ behavior: 'smooth' });
        toc.classList.remove('glow');
        void toc.offsetWidth;
        toc.classList.add('glow');
    });
}

if (modal) {
    if (!localStorage.getItem('visited')) {
        modal.classList.remove('hidden');
        modal.addEventListener('click', () => {
            modal.classList.add('hidden');
            localStorage.setItem('visited', 'true');
        });
    } else {
        modal.classList.add('hidden');
    }
}

pronounsCheck.addEventListener('change', () => {
    if (pronounsCheck.checked) {
        singularPronouns.classList.add("hidden");
        pluralPronouns.classList.remove("hidden");
        pronounsStatus.innerText = "plural pronouns";
    } else {
        singularPronouns.classList.remove("hidden");
        pluralPronouns.classList.add("hidden");
        pronounsStatus.innerText = "singular pronouns";
    }
})
