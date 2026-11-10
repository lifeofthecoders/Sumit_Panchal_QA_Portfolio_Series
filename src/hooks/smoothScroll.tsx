
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';

import Lenis from 'lenis';
import { useReducedMotionPref } from './useMedia';

type ScrollApi = {
  scrollTo: (
    target: string | HTMLElement | number,
    opts?: {
      offset?: number;
      immediate?: boolean;
    }
  ) => void;
  lock: () => void;
  unlock: () => void;
};

const ScrollCtx = createContext<ScrollApi | null>(null);

export function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const reduced = useReducedMotionPref();

  const lenisRef = useRef<Lenis | null>(null);
  const locks = useRef(0);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;

    // Prevent the browser from restoring an outdated scroll position.
    window.history.scrollRestoration = 'manual';

    if (reduced) {
      return () => {
        window.history.scrollRestoration = previousRestoration;
      };
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    lenisRef.current = lenis;

    let raf = 0;

    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);

      lenis.destroy();
      lenisRef.current = null;

      window.history.scrollRestoration = previousRestoration;
    };
  }, [reduced]);

  const scrollTo = useCallback<ScrollApi['scrollTo']>(
    (target, opts = {}) => {
      const offset = opts.offset ?? 0;

      const element =
        typeof target === 'string'
          ? document.querySelector<HTMLElement>(target)
          : target;

      if (element === null) return;

      const lenis = lenisRef.current;

      if (lenis) {
        // Synchronize Lenis with the latest document dimensions.
        lenis.resize();

        // Always use Lenis for programmatic scrolling.
        // Do not mix this with native window.scrollTo().
        lenis.scrollTo(element, {
          offset,
          immediate: opts.immediate ?? false,
          duration: opts.immediate ? 0 : 1.4,
          force: true,
        });

        return;
      }

      // Native fallback when reduced motion is enabled.
      const top =
        typeof element === 'number'
          ? element
          : element.getBoundingClientRect().top +
          window.scrollY +
          offset;

      window.scrollTo({
        top,
        behavior: opts.immediate ? 'auto' : 'smooth',
      });
    },
    [],
  );


  const lock = useCallback(() => {
    locks.current += 1;

    if (locks.current === 1) {
      lenisRef.current?.stop();
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  const unlock = useCallback(() => {
    if (locks.current === 0) return;

    locks.current -= 1;

    if (locks.current === 0) {
      document.documentElement.style.overflow = '';
      lenisRef.current?.start();
      lenisRef.current?.resize();
    }
  }, []);

  return (
    <ScrollCtx.Provider value={{ scrollTo, lock, unlock }}>
      {children}
    </ScrollCtx.Provider>
  );
}

export function useSmoothScroll() {
  const ctx = useContext(ScrollCtx);

  if (!ctx) {
    throw new Error(
      'useSmoothScroll must be used inside SmoothScrollProvider',
    );
  }

  return ctx;
}

/**
 * Locks page scrolling while an overlay is active.
 */
export function useScrollLock(active: boolean) {
  const { lock, unlock } = useSmoothScroll();

  useEffect(() => {
    if (!active) return;

    lock();

    return unlock;
  }, [active, lock, unlock]);
}
