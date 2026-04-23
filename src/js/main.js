(function () {
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('site-menu');
    const closeBtn = document.getElementById('menu-close');

    const openMenu = () => {
        menu.classList.add('is-open');
        menu.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    };

    const closeMenu = () => {
        menu.classList.remove('is-open');
        menu.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    };

    if (toggle && menu && closeBtn) {
        toggle.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        menu.querySelectorAll('.menu-link').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
        });
    }

    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('[data-carousel-track]');
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    const dotsList = carousel.querySelector('[data-carousel-dots]');
    const slides = Array.from(track.children);

    const getVisibleCount = () => {
        if (!slides.length) return 1;
        const trackWidth = track.clientWidth;
        const slideWidth = slides[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        if (slideWidth <= 0) return 1;
        return Math.max(1, Math.floor((trackWidth + gap) / (slideWidth + gap)));
    };

    const getMaxIndex = () => Math.max(0, slides.length - getVisibleCount());

    const getActiveIndex = () => {
        const trackRect = track.getBoundingClientRect();
        const scrollLeft = track.scrollLeft;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll > 0 && scrollLeft >= maxScroll - 1) return getMaxIndex();
        let closest = 0;
        let minDist = Infinity;
        slides.forEach((slide, i) => {
            const r = slide.getBoundingClientRect();
            const dist = Math.abs(r.left - trackRect.left);
            if (dist < minDist) {
                minDist = dist;
                closest = i;
            }
        });
        return closest;
    };

    const scrollToIndex = (i) => {
        const max = getMaxIndex();
        const target = Math.max(0, Math.min(max, i));
        const slide = slides[target];
        if (!slide) return;
        const trackRect = track.getBoundingClientRect();
        const slideRect = slide.getBoundingClientRect();
        const delta = slideRect.left - trackRect.left;
        track.scrollTo({ left: track.scrollLeft + delta, behavior: 'smooth' });
    };

    slides.forEach((_, i) => {
        const dot = document.createElement('li');
        const dotBtn = document.createElement('button');
        dotBtn.className = 'carousel-dot';
        dotBtn.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dotBtn.addEventListener('click', () => scrollToIndex(i));
        dot.appendChild(dotBtn);
        dotsList.appendChild(dot);
    });

    const dots = Array.from(dotsList.querySelectorAll('.carousel-dot'));

    const updateActive = () => {
        const active = getActiveIndex();
        const max = getMaxIndex();
        dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
        if (prevBtn) prevBtn.disabled = active <= 0;
        if (nextBtn) nextBtn.disabled = active >= max;
    };

    prevBtn && prevBtn.addEventListener('click', () => {
        scrollToIndex(getActiveIndex() - 1);
    });

    nextBtn && nextBtn.addEventListener('click', () => {
        scrollToIndex(getActiveIndex() + 1);
    });

    let scrollRaf = null;
    track.addEventListener('scroll', () => {
        if (scrollRaf) return;
        scrollRaf = window.requestAnimationFrame(() => {
            scrollRaf = null;
            updateActive();
        });
    });

    window.addEventListener('resize', updateActive);
    window.addEventListener('load', updateActive);
    updateActive();
})();
