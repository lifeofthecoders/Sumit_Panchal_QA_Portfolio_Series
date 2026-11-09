import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Ambient pointer effect for the Portfolio Series:
 * a soft crimson spotlight with a short-lived glowing particle trail.
 * The canvas never captures pointer events or affects page interactions.
 */
export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let frameId = 0;
    let active = true;

    const mouse = { x: 0, y: 0, lastX: 0, lastY: 0 };
    const particles: Array<{
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      size: number;
      alpha: number;
      decay: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      mouse.x = event.clientX;
      mouse.y = event.clientY;

      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const spawnCount = Math.min(Math.floor(speed / 4), 5);

      for (let i = 0; i < spawnCount; i += 1) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          speedX: dx * 0.06 + (Math.random() - 0.5) * 0.5,
          speedY: dy * 0.06 - Math.random() * 0.8 - 0.2,
          size: Math.random() * 3.5 + 1.5,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.01,
          color: Math.random() > 0.35 ? '#e5132b' : '#ff536b',
        });
      }

      // Keep a hard ceiling so long sessions cannot grow the particle list.
      if (particles.length > 500) particles.splice(0, particles.length - 500);

      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
    };

    const render = () => {
      if (!active) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 320,
        );
        gradient.addColorStop(0, 'rgba(229, 19, 43, 0.08)');
        gradient.addColorStop(0.5, 'rgba(229, 19, 43, 0.02)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 320, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.alpha -= particle.decay;
        if (particle.size > 0.1) particle.size -= 0.02;

        if (particle.alpha <= 0 || particle.size <= 0.1) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      frameId = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    frameId = window.requestAnimationFrame(render);

    return () => {
      active = false;
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      window.cancelAnimationFrame(frameId);
      particles.length = 0;
    };
  }, []);

  return createPortal(
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[10000]"
      style={{ mixBlendMode: 'screen' }}
    />,
    document.body,
  );
}
