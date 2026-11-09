
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';
import { createPortal } from 'react-dom';

const LABELS: Record<string, string> = {
  view: 'VIEW',
  play: '▶',
  link: '↗',
  drag: '↔',
  close: '✕',
};

/**
 * Minimal cursor: a small dot that grows into a labelled disc over elements with
 * `data-cursor="view|play|link|drag|close"`.
 * Desktop only; disabled for reduced motion.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, {
    stiffness: 600,
    damping: 40,
    mass: 0.4,
  });

  const sy = useSpring(y, {
    stiffness: 600,
    damping: 40,
    mass: 0.4,
  });

  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('has-custom-cursor');

    // Update the cursor according to the element currently underneath it.
    const updateTarget = (target: EventTarget | null) => {
      const element =
        target instanceof Element ? target : null;

      const tagged = element?.closest<HTMLElement>('[data-cursor]');

      setMode(tagged?.dataset.cursor ?? null);

      setHoverLink(
        !tagged &&
          !!element?.closest('a, button, [role="button"]'),
      );
    };

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      setVisible(true);
      updateTarget(event.target);
    };

    // Refresh hover state when entering or leaving interactive elements.
    const pointerOver = (event: PointerEvent) => {
      updateTarget(event.target);
    };

    const pointerOut = (event: PointerEvent) => {
      updateTarget(event.relatedTarget);
    };

    const leave = () => {
      setVisible(false);
      setMode(null);
      setHoverLink(false);
    };

    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener('pointermove', move, {
      passive: true,
    });

    document.addEventListener('pointerover', pointerOver);
    document.addEventListener('pointerout', pointerOut);
    document.addEventListener('pointerleave', leave);

    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    window.addEventListener('blur', leave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');

      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', pointerOver);
      document.removeEventListener('pointerout', pointerOut);
      document.removeEventListener('pointerleave', leave);

      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      window.removeEventListener('blur', leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const label = mode ? LABELS[mode] : null;
  const size = label
    ? mode === 'view'
      ? 72
      : 52
    : hoverLink
      ? 34
      : 10;

return createPortal(
  <motion.div
    aria-hidden
    className="pointer-events-none fixed left-0 top-0 z-[10001] flex items-center justify-center rounded-full"
    style={{
      x: sx,
      y: sy,
      translateX: '-50%',
      translateY: '-50%',
    }}
    animate={{
      width: size,
      height: size,
      opacity: visible ? 1 : 0,
      scale: down ? 0.85 : 1,
      backgroundColor: label
        ? 'rgba(229,19,43,0.92)'
        : hoverLink
          ? 'rgba(244,241,236,0.08)'
          : 'rgba(244,241,236,1)',
      borderColor:
        hoverLink && !label
          ? 'rgba(244,241,236,0.7)'
          : 'rgba(244,241,236,0)',
    }}
    transition={{ type: 'spring', stiffness: 420, damping: 30 }}
  >
    <span
      className="absolute inset-0 rounded-full border"
      style={{ borderColor: 'inherit' }}
    />

    <AnimatePresence>
      {label && (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="font-sans text-[11px] font-bold tracking-[0.18em] text-white"
        >
          {label}
        </motion.span>
      )}
    </AnimatePresence>
  </motion.div>,
  document.body
);
}
