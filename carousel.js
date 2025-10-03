function initCarousel(root) {
    const panel = root;
    const track = root.querySelector('.carousel-track');

    const prevBtn = panel.querySelector('.carousel-btn.prev');
    const nextBtn = panel.querySelector('.carousel-btn.next');

    const AUTOPLAY_INTERVAL_MS = 5000;
    let autoplayTimer = null;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let currentIndex = 0;
    let cardWidth = 0;
    let cards = [];

    function updateCarousel() {
        if (!track) return;
        const offset = -(currentIndex * cardWidth);
        track.style.transform = `translateX(${offset}px)`;
    }

    function startAutoPlay() {
        if (reducedMotion.matches || cards.length === 0) return;

        stopAutoPlay();

        autoplayTimer = setInterval(() => {
            if (reducedMotion.matches) {
                stopAutoPlay();
                return;
            }
            goNext()
        }, AUTOPLAY_INTERVAL_MS);
    }


    function stopAutoPlay() {
        if (autoplayTimer !== null) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function measure() {
        if (!track) return;
        cards = Array.from(track.querySelectorAll('.testimonial-card'));
        if (cards.length === 0) return;

        const first = cards[0];
        const styles = window.getComputedStyle(first);
        const marginLeft = parseFloat(styles.marginLeft) || 0;
        const marginRight = parseFloat(styles.marginRight) || 0;
        cardWidth = first.getBoundingClientRect().width + marginLeft + marginRight;

        currentIndex = Math.max(0, Math.min(currentIndex, cards.length - 1));
        updateCarousel();

    }


    function goNext() {
        if (cards.length === 0) return;
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }

    function goPrev() {
        if (cards.length === 0) return;
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    if (nextBtn) nextBtn.addEventListener('click', goNext);
    if (prevBtn) prevBtn.addEventListener('click', goPrev);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goPrev();
    });

    function afterImagesLoad() {
        measure();
        startAutoPlay();
    }

    const imgs = Array.from(root.querySelectorAll('img'));
    if (imgs.length) {
        let done = 0;
        const mark = () => { if (++done === imgs.length) { afterImagesLoad(); } };
        imgs.forEach(img => (img.complete ? mark() : (img.addEventListener('load', mark), img.addEventListener('error', mark))));
    } else {
        afterImagesLoad();
    }

    let resizeRAF = null;
    window.addEventListener('resize', () => {
        if (resizeRAF) cancelAnimationFrame(resizeRAF);
        resizeRAF = requestAnimationFrame(() => { measure(); });
    });

    panel.addEventListener('mouseenter', stopAutoPlay);
    panel.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}

document.querySelectorAll('.carousel-widget').forEach(initCarousel);