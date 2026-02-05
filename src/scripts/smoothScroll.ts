import Lenis from 'lenis';

export function initSmoothScroll() {
	const lenis = new Lenis({
		duration: 1.2,
		easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true,
		autoRaf: true,
	});

	lenis.on('scroll', ({ velocity }: { velocity: number }) => {
		const isFast = Math.abs(velocity) > 5;
		if (isFast) {
			document.body.classList.add('is-fast-scroll');
		} else {
			document.body.classList.remove('is-fast-scroll');
		}
	});
}

export function initScrollAnimations() {
	const els = document.querySelectorAll<HTMLElement>('[data-animate]');
	if (!els.length) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
					observer.unobserve(entry.target);
				}
			});
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0 }
	);

	els.forEach((el) => observer.observe(el));
}
