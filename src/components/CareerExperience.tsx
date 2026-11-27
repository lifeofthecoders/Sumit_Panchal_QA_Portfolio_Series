import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { experience, type CareerExperienceItem } from '../data/portfolio';
import { useDesktop, useReducedMotionPref } from '../hooks/useMedia';
import { EASE } from './fx';

type Props = { onOpen: (item: CareerExperienceItem) => void };

const initials = (company: string) =>
  company.trim().charAt(0).toUpperCase();

/** Keep the existing career card artwork and information design; only its presentation rail changes. */
export default function CareerExperience({ onOpen }: Props) {
  const desktop = useDesktop();
  const reduced = useReducedMotionPref();

  return desktop && !reduced
    ? <PinnedCareer onOpen={onOpen} />
    : <RailCareer onOpen={onOpen} />;
}

function CareerIntro() {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw]">
      <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
        <span className="h-px w-8 bg-crimson-2" /> {experience.length} Career Milestones · Professional Experience
      </p>
      <h2 className="font-display text-[clamp(3.2rem,7vw,7rem)] leading-[0.86] text-bone">
        CAREER<br />EXPERIENCE
      </h2>
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-mist">
        A progression from application support and industrial QA training to professional quality assurance across web and mobile applications.
      </p>
      <p className="mt-6 hidden text-xs tracking-[0.24em] text-smoke lg:block">SCROLL TO BROWSE →</p>
    </div>
  );
}

function CareerCard({ career, index, onOpen }: {
  career: CareerExperienceItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      className="group w-[min(88vw,560px)] shrink-0 snap-start overflow-hidden border border-white/15 bg-[#111] transition-all duration-500 hover:-translate-y-1 hover:border-white/35"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px -10% 0px 0px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${career.company} career details`}
        className="focus-ring block w-full text-left"
      >
        {/* Full-width proportional banner, matching the project details banner treatment. */}
        <div className="group relative aspect-[1920/645] w-full overflow-hidden bg-[#08090c]">
          <img
            src={career.bannerImage}
            alt={`${career.company} career banner`}
            loading="lazy"
            className="absolute inset-0 block h-full w-full object-contain object-center transition-[filter] duration-700 group-hover:brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/25" />
          <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[8px] tracking-[0.18em] text-white/75 sm:inset-x-6 sm:top-6">
            <span>CAREER EXPERIENCE / {String(index + 1).padStart(2, '0')}</span>
            <span>{career.kind.toUpperCase()}</span>
          </div>
          <span
            className="absolute left-1/2 top-[15%] grid h-[34%] aspect-square w-auto -translate-x-1/2 place-items-center border text-[clamp(1.15rem,2.4vw,2rem)] font-black tracking-tight shadow-[0_0_35px_rgba(0,0,0,.28)] backdrop-blur-sm"
            style={{ borderColor: career.palette.accent, color: career.palette.accent, backgroundColor: 'rgba(0,0,0,.48)' }}
            aria-label={`${initials(career.company)} company mark`}
          >
            {initials(career.company)}
          </span>
          <span className="absolute inset-x-[5%] top-[58%] text-center text-[8px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-[9px]">
            {career.kind}
          </span>
          <span
            className={`absolute inset-x-[3%] top-[68%] flex min-h-[1.15em] items-center justify-center text-center font-display leading-[1.02] tracking-wide text-white drop-shadow-lg ${career.id === 'niharika-softweb-solutions' ? 'text-[clamp(.9rem,1.75vw,1.8rem)]' : 'text-[clamp(1.05rem,2.3vw,2.35rem)]'}`}
          >
            {career.company}
          </span>
          <span className="absolute inset-x-[5%] bottom-[10%] text-center text-[7px] font-semibold uppercase leading-tight tracking-[0.12em] text-white/80 sm:text-[8px]">
            {career.role}
          </span>
          <div className="absolute inset-x-5 bottom-[2.5%] flex justify-between text-[7px] tracking-[0.14em] text-white/65 sm:inset-x-6 sm:text-[8px]">
            <span>SUMIT PANCHAL</span>
            <span>CAREER / QA</span>
          </div>
        </div>

        <div className="flex min-h-[154px] items-center justify-between gap-5 p-5 sm:p-[22px]">
          <div className="min-w-0">
            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-crimson-2">
              {career.kind} · {career.period}
            </span>
            <h3 className="mt-2 break-words font-display text-[clamp(1.7rem,3vw,2.15rem)] uppercase leading-none text-bone">
              {career.company}
            </h3>
            <p className="mt-2 text-[11px] font-semibold leading-relaxed text-bone/80">{career.role}</p>
            <p className="mt-2 line-clamp-2 max-w-[520px] text-[11px] leading-[1.7] text-[#999]">{career.summary}</p>
          </div>
          <span
            aria-hidden="true"
            className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-white/15 text-[18px] leading-none text-bone transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-crimson-2 group-hover:bg-crimson group-hover:text-white"
          >
            ↗
          </span>
        </div>
      </button>
    </motion.article>
  );
}

function PinnedCareer({ onOpen }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const distMV = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      const element = track.current;
      if (!element) return;
      // The track is sized to its full content width, so this includes every
      // career card and the trailing gutter rather than the clipped viewport box.
      const viewportWidth = wrap.current?.clientWidth ?? document.documentElement.clientWidth;
      const distance = Math.max(0, Math.ceil(element.scrollWidth - viewportWidth));
      setDist(distance);
      distMV.set(distance);
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (wrap.current) observer.observe(wrap.current);
    if (track.current) {
      observer.observe(track.current);
      Array.from(track.current.children).forEach((child) => observer.observe(child));
    }
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    document.fonts?.ready.then(measure);
    const frame = window.requestAnimationFrame(measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', measure);
      window.cancelAnimationFrame(frame);
    };
  }, [distMV]);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] });
  const raw = useTransform([scrollYProgress, distMV], ([progress, distance]: number[]) => -progress * distance);
  const x = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={wrap} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(229,19,43,0.10),transparent_70%)]" />
        <motion.div ref={track} style={{ x }} className="gutter relative flex w-max min-w-max items-center gap-8 pr-[calc(var(--gutter)+8rem)]" data-cursor="drag">
          <CareerIntro />
          {experience.map((career, index) => (
            <CareerCard key={career.id} career={career} index={index} onOpen={() => onOpen(career)} />
          ))}
        </motion.div>
        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">CAREER EXPERIENCE</span>
          <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div className="h-full origin-left bg-crimson" style={{ scaleX: bar }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RailCareer({ onOpen }: Props) {
  return (
    <div className="py-6">
      <div className="gutter mb-6"><CareerIntro /></div>
      <motion.div
        className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pr-16"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {experience.map((career, index) => (
          <CareerCard key={career.id} career={career} index={index} onOpen={() => onOpen(career)} />
        ))}
      </motion.div>
    </div>
  );
}
