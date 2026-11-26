import { useEffect, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { CareerExperienceItem } from '../data/portfolio';
import { EASE } from './fx';
import { useSmoothScroll } from '../hooks/smoothScroll';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

type CareerModalProps = {
  career: CareerExperienceItem;
  onClose: () => void;
};

export default function CareerModal({ career, onClose }: CareerModalProps) {
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { scrollTo } = useSmoothScroll();

  useLayoutEffect(() => {
    scrollTo(0, { offset: 0, immediate: true });
    const frame = window.requestAnimationFrame(() => {
      scrollTo(0, { offset: 0, immediate: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [career.id, scrollTo]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (previousFocus && previousFocus !== document.body && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [onClose]);

  return (
    <motion.main
      key={career.id}
      className="relative min-h-screen w-full overflow-x-hidden bg-ink"
      aria-labelledby={`title-${career.id}-details`}
    >
      <div className="relative min-h-screen w-full bg-ink-2 shadow-2xl">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* Replace bannerImage in portfolio.ts when the final company visual is ready. */}
          <div className="group/banner relative h-[46vh] min-h-[300px] overflow-hidden sm:h-[52vh]">
            <div className="group/image absolute inset-0 z-0 overflow-hidden">
              <img
                src={career.bannerImage}
                alt={`${career.company} career banner placeholder`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover/image:bg-crimson/10" />
              <a
                href={career.bannerImage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${career.company} banner image`}
                data-cursor="link"
                className="project-image-open-button absolute bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-xl text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover/image:scale-100 group-hover/image:opacity-100 focus-visible:scale-100 focus-visible:opacity-100"
              >
                ↗
              </a>
            </div>

            <button
              ref={closeBtn}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              data-cursor="link"
              aria-label="Back to career timeline"
              className="project-back-button absolute left-4 top-4 z-20 flex h-11 items-center justify-center gap-1 rounded-full border border-white/15 bg-black/65 px-4 text-xs font-bold tracking-[0.16em] text-bone shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-crimson-2 hover:bg-crimson hover:text-white active:scale-95 sm:left-6 sm:top-6"
            >
              <span className="mr-1">←</span>
              <span className="hidden sm:inline">BACK</span>
            </button>
          </div>

          <motion.header
            className="px-5 pt-8 sm:px-10 sm:pt-10 lg:px-14 2xl:px-20"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
          >
            <p className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-mist sm:text-[11px]">
              <span className="font-display text-xl tracking-normal text-crimson-2">SP</span>
              {career.kind.toUpperCase()} · CAREER PROFILE
            </p>
            <h1
              id={`title-${career.id}-details`}
              className="max-w-5xl break-words font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-wide text-bone"
            >
              {career.company}
            </h1>
            <p className="mt-3 text-base font-semibold text-[#46e3a8] sm:text-lg">{career.role}</p>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-crimson-2/70 via-white/15 to-transparent" />
          </motion.header>

          <motion.div
            className="px-5 pb-14 pt-6 sm:px-10 sm:pt-8 lg:px-14 2xl:px-20"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
          >
            {/* Career facts */}
            <motion.div variants={block} className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-smoke">Position</p>
                <p className="mt-1.5 text-sm font-semibold leading-relaxed text-[#46e3a8]">{career.role}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-smoke">Duration</p>
                <p className="mt-1.5 text-sm font-semibold leading-relaxed text-bone">{career.period}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-smoke">Company / Work Context</p>
                <p className="mt-1.5 text-sm font-semibold leading-relaxed text-bone">{career.place}</p>
              </div>
            </motion.div>

            <motion.p variants={block} className="mt-6 max-w-5xl text-lg leading-relaxed text-bone sm:text-xl">
              {career.summary}
            </motion.p>

            {/* Company overview and replaceable visual */}
            <motion.section variants={block} className="mt-8 grid items-stretch gap-5 rounded-xl bg-ink p-5 ring-1 ring-white/10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:p-6">
              <div className="flex flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Company Details</p>
                <h2 className="mt-2 font-display text-2xl tracking-wide text-bone">{career.company}</h2>
                <p className="mt-3 text-sm leading-relaxed text-bone/80">{career.companyDetails}</p>
                {career.website && (
                  <a
                    href={career.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-crimson-2 transition-colors hover:text-bone"
                  >
                    Company Website <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              <div className="group/image relative min-h-[220px] overflow-hidden rounded-lg ring-1 ring-white/10">
                {/* Replace visualImage in portfolio.ts with a company, office, or work sample image. */}
                <img
                  src={career.visualImage}
                  alt={`${career.company} visual placeholder`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-[1.04]"
                />
              </div>
            </motion.section>

            {/* Responsibilities */}
            <motion.section variants={block} className="mt-10">
              <h2 className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Responsibilities & Role Scope</h2>
              <div className="grid gap-x-12 gap-y-4 lg:grid-cols-2">
                {career.points.map((point) => (
                  <div key={point} className="flex gap-3 text-[15px] leading-relaxed text-bone/85">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: career.palette.accent }} />
                    {point}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Contributions / outcomes */}
            <motion.section variants={block} className="mt-10 rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <h2 className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Key Contributions & Achievements</h2>
              <ul className="grid gap-4 lg:grid-cols-2">
                {career.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-bone/85">
                    <span className="mt-0.5 shrink-0 text-[#46e3a8]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Tools and focus areas */}
            <motion.section variants={block} className="mt-10">
              <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Tools, Methods & Focus Areas</h2>
              <div className="flex flex-wrap gap-2">
                {career.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-bone/85 transition-colors duration-300 hover:border-crimson-2/60 hover:bg-crimson/10">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.section>

            <div className="mt-14 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-bone/70 underline decoration-white/25 underline-offset-4 transition-colors duration-300 hover:text-crimson-2"
              >
                ← Back to Career Timeline
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
