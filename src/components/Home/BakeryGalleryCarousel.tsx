import { useState, useRef, useEffect, useCallback } from 'react';

import cookiesBannerImg from '../../assets/cookies/Cookies-banner.webp';
import mooncakeBannerImg from '../../assets/mooncakes/Mooncake-banner.webp';
import mooncakeWhite2Img from '../../assets/mooncakes/Mooncake-product-white-2.webp';

const galleryImages = [
	{ src: mooncakeBannerImg.src, alt: 'Mooncake banner' },
	{ src: cookiesBannerImg.src,  alt: 'Cookies' },
	{ src: mooncakeWhite2Img.src, alt: 'Mooncake branco' },
    { src: mooncakeBannerImg.src, alt: 'Mooncake banner' },
	{ src: cookiesBannerImg.src,  alt: 'Cookies' },
	{ src: mooncakeWhite2Img.src, alt: 'Mooncake branco' },
];

const ITEM_WIDTH = 320;
const GAP = 20;
const SPEED = 0.5;

export default function BakeryGalleryCarousel() {
	const [lightbox, setLightbox] = useState<(typeof galleryImages)[0] | null>(null);
	const [isDragging, setIsDragging] = useState(false);

	const trackRef = useRef<HTMLDivElement>(null);
	const posRef = useRef(0);
	const rafRef = useRef<number>(0);
	const isHoveredRef = useRef(false);
	const isDraggingRef = useRef(false);
	const startXRef = useRef(0);
	const capturedPosRef = useRef(0);
	const hasDraggedRef = useRef(false);

	// Duplicate images for seamless loop
	const allImages = [...galleryImages, ...galleryImages];
	const halfWidth = (ITEM_WIDTH + GAP) * galleryImages.length;

	const animate = useCallback(() => {
		if (!isHoveredRef.current && !isDraggingRef.current) {
			posRef.current -= SPEED;
			if (posRef.current <= -halfWidth) {
				posRef.current += halfWidth;
			}
			if (trackRef.current) {
				trackRef.current.style.transform = `translateX(${posRef.current}px)`;
			}
		}
		rafRef.current = requestAnimationFrame(animate);
	}, [halfWidth]);

	useEffect(() => {
		rafRef.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(rafRef.current);
	}, [animate]);

	useEffect(() => {
		if (!lightbox) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setLightbox(null);
		};
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, [lightbox]);

	useEffect(() => {
		if (lightbox) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [lightbox]);

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		isDraggingRef.current = true;
		hasDraggedRef.current = false;
		startXRef.current = e.clientX;
		capturedPosRef.current = posRef.current;
		setIsDragging(true);
		e.currentTarget.setPointerCapture(e.pointerId);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!isDraggingRef.current) return;
		const delta = e.clientX - startXRef.current;
		if (Math.abs(delta) > 4) hasDraggedRef.current = true;
		let newPos = capturedPosRef.current + delta;
		if (newPos > 0) newPos = newPos % halfWidth === 0 ? 0 : -(halfWidth - (newPos % halfWidth));
		if (newPos <= -halfWidth) newPos = newPos % halfWidth;
		posRef.current = newPos;
		if (trackRef.current) {
			trackRef.current.style.transform = `translateX(${newPos}px)`;
		}
	};

	const handlePointerUp = () => {
		isDraggingRef.current = false;
		setIsDragging(false);
	};

	const handleImageClick = (img: (typeof galleryImages)[0]) => {
		if (!hasDraggedRef.current) {
			setLightbox(img);
		}
	};

	return (
		<>
			{/* Gallery strip */}
			<div
				className="overflow-hidden"
				onMouseEnter={() => { isHoveredRef.current = true; }}
				onMouseLeave={() => { isHoveredRef.current = false; }}
				onPointerDown={handlePointerDown}
				onPointerMove={handlePointerMove}
				onPointerUp={handlePointerUp}
				onPointerCancel={handlePointerUp}
				style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
			>
				<div
					ref={trackRef}
					style={{
						display: 'flex',
						gap: `${GAP}px`,
						width: 'max-content',
						willChange: 'transform',
					}}
				>
					{allImages.map((img, i) => (
						<div
							key={i}
							onClick={() => handleImageClick(img)}
							className="flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800"
							style={{
								width: `${ITEM_WIDTH}px`,
								height: '320px',
								position: 'relative',
							}}
						>
							<img
								src={img.src}
								alt={img.alt}
								className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
								width={ITEM_WIDTH}
								height={320}
								loading={i < 6 ? 'eager' : 'lazy'}
								draggable={false}
							/>
							{/* Subtle hover overlay */}
							<div
								className="pointer-events-none absolute inset-0 rounded-2xl bg-black/0 transition-colors duration-300 hover:bg-black/10"
							/>
						</div>
					))}
				</div>
			</div>

			{/* Lightbox */}
			{lightbox && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
					onClick={() => setLightbox(null)}
					style={{ animation: 'lightbox-in 0.2s ease' }}
				>
					{/* Close button */}
					<button
						className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
						onClick={() => setLightbox(null)}
						aria-label="Fechar"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>

					{/* Image */}
					<div
						className="relative max-h-[90vh] max-w-[90vw]"
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={lightbox.src}
							alt={lightbox.alt}
							className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
							style={{ animation: 'lightbox-zoom 0.25s ease' }}
						/>
						{lightbox.alt && (
							<p className="mt-3 text-center text-sm text-white/60">{lightbox.alt}</p>
						)}
					</div>

					<style>{`
						@keyframes lightbox-in {
							from { opacity: 0; }
							to   { opacity: 1; }
						}
						@keyframes lightbox-zoom {
							from { transform: scale(0.92); opacity: 0; }
							to   { transform: scale(1);    opacity: 1; }
						}
					`}</style>
				</div>
			)}
		</>
	);
}
