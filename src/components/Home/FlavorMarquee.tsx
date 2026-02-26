import { useState, useRef, useEffect, useCallback } from 'react';

const flavors = ['Chocolate', 'Lótus', 'Matcha', 'Nozes', 'Baunilha'];
const extendedFlavors = [...flavors, ...flavors, ...flavors];

const SPEED = 0.4;

export default function FlavorMarquee() {
	const [isDragging, setIsDragging] = useState(false);

	const trackRef = useRef<HTMLDivElement>(null);
	const posRef = useRef(0);
	const rafRef = useRef<number>(0);
	const isHoveredRef = useRef(false);
	const isDraggingRef = useRef(false);
	const startXRef = useRef(0);
	const capturedPosRef = useRef(0);

	const getHalfWidth = () => (trackRef.current ? trackRef.current.scrollWidth / 2 : 0);

	const normalize = (p: number) => {
		const half = getHalfWidth();
		if (!half) return p;
		if (p <= -half) return p + half;
		if (p > 0) return p - half;
		return p;
	};

	const tick = useCallback(() => {
		if (!isHoveredRef.current && !isDraggingRef.current) {
			posRef.current = normalize(posRef.current - SPEED);
			if (trackRef.current) {
				trackRef.current.style.transform = `translateX(${posRef.current}px)`;
			}
		}
		rafRef.current = requestAnimationFrame(tick);
	}, []);

	useEffect(() => {
		rafRef.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(rafRef.current);
	}, [tick]);

	const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
		isDraggingRef.current = true;
		setIsDragging(true);
		startXRef.current = e.clientX;
		capturedPosRef.current = posRef.current;
		e.currentTarget.setPointerCapture(e.pointerId);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
		if (!isDraggingRef.current) return;
		const delta = e.clientX - startXRef.current;
		posRef.current = normalize(capturedPosRef.current + delta);
		if (trackRef.current) {
			trackRef.current.style.transform = `translateX(${posRef.current}px)`;
		}
	};

	const handlePointerUp = () => {
		isDraggingRef.current = false;
		setIsDragging(false);
	};

	return (
		<section
			className="overflow-hidden border-y border-[hsl(var(--border))] py-4"
			style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
			onMouseEnter={() => { isHoveredRef.current = true; }}
			onMouseLeave={() => { isHoveredRef.current = false; }}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
			onPointerCancel={handlePointerUp}
		>
			<div
				ref={trackRef}
				style={{ display: 'flex', width: 'max-content', willChange: 'transform' }}
			>
				{[0, 1].map((groupIdx) => (
					<div
						key={groupIdx}
						aria-hidden={groupIdx === 1 ? 'true' : undefined}
						style={{
							display: 'flex',
							flexShrink: 0,
							gap: '5rem',
							paddingRight: '5rem',
							textTransform: 'uppercase',
							fontWeight: 600,
							fontSize: '0.75rem',
							letterSpacing: '0.2em',
							color: 'hsl(var(--muted-foreground))',
						}}
					>
						{extendedFlavors.map((f, i) => (
							<span key={i}>{f}</span>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
