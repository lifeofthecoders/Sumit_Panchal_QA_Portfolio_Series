import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { qaJourneyFlow, qaJourneyPhilosophy, seasons } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import EpisodeCard from './EpisodeCard';
import { RailButtons } from './Rail';

export default function Seasons() {
  const [active, setActive] = useState(0);
  const season = seasons[active];
  const rail = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionHeading
        kicker={`${seasons.length} Seasons`}
        title="My Journey"
        aside={<p className="max-w-xs text-sm text-mist">Every stage of the resume, told as a season. Select one to explore its episodes.</p>}
      />

      {/* Season selector */}
      <div className="rail gutter mb-8 flex gap-2 overflow-x-auto" role="tablist" aria-label="Seasons">
        {seasons.map((s, i) => (
          <button
            key={s.number}
            role="tab"
            aria-selected={i === active}
            type="button"
            onClick={() => {
              setActive(i);
              rail.current?.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`relative shrink-0 rounded-full px-4 py-2.5 text-left transition ${i === active ? 'text-ink' : 'text-mist hover:text-bone'}`}
          >
            {i === active && <motion.span layoutId="season-pill" className="absolute inset-0 rounded-full bg-bone" transition={{ duration: 0.5, ease: EASE }} />}
            <span className="relative block text-[10px] font-bold tracking-[0.24em]">SEASON {String(s.number).padStart(2, '0')}</span>
            <span className="relative block whitespace-nowrap text-sm font-semibold">{s.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={season.number}
          initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="gutter mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
              <span className="text-outline mr-3">S{String(season.number).padStart(2, '0')}</span>
              {season.title}
            </h3>
            <span className="text-sm text-mist">
              {season.period} · {season.episodes.length} {season.episodes.length === 1 ? 'Episode' : 'Episodes'}
            </span>
          </div>
          <p className="gutter max-w-3xl text-[15px] leading-relaxed text-bone/75">{season.synopsis}</p>

          {season.number === 2 && <QAJourneyIntro />}

          {/* Every season, including S02, uses the same episode-card rail design. */}
          <div className="group/rail relative">
            <div ref={rail} className="rail flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] py-8 scroll-px-[var(--gutter)] [perspective:1200px]">
              {season.episodes.map((episode, index) => (
                <EpisodeCard key={episode.code} episode={episode} index={index} />
              ))}
            </div>
            <RailButtons rail={rail} />
          </div>

          {season.number === 2 && <QAJourneySummary />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function QAJourneyIntro() {
  const journeyIntro = 'My approach to Quality Assurance goes beyond simply identifying defects. I believe quality starts with understanding business requirements, continues through structured testing and validation, and ultimately results in delivering reliable, user-focused software.';
  const journeyApproach = 'As a Manual Quality Assurance Engineer, I follow a systematic testing lifecycle that combines analytical thinking, risk-based testing, functional validation, defect management, and test automation to improve product quality at every stage.';

  return (
    <motion.div
      className="gutter mt-8 max-w-4xl"
      initial={{ opacity: 0, y: 22, filter: 'blur(7px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.75, ease: EASE }}
    >
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">My QA Journey</p>
      <h4 className="font-display text-2xl leading-tight tracking-wide text-bone sm:text-3xl">
        From Requirements to Release <span className="text-mist">: Engineering Quality at Every Step</span>
      </h4>
      <p className="mt-4 text-sm leading-relaxed text-bone/75 sm:text-[15px]">{journeyIntro}</p>
      <p className="mt-3 text-sm leading-relaxed text-mist sm:text-[15px]">{journeyApproach}</p>
      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-smoke">The QA Lifecycle · 08 Stages · Continuous Validation</p>
    </motion.div>
  );
}

function QAJourneySummary() {
  return (
    <div className="gutter mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <motion.article
        className="rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(229,19,43,0.09),rgba(255,255,255,0.02))] p-6 sm:p-7"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">Principle behind the process</p>
        <h4 className="mt-2 font-display text-2xl text-bone">My Quality Philosophy</h4>
        <p className="mt-3 text-sm leading-relaxed text-mist">{qaJourneyPhilosophy}</p>
      </motion.article>

      <motion.article
        className="rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">End-to-end perspective</p>
        <h4 className="mt-2 font-display text-2xl text-bone">From Understanding to Delivery</h4>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {qaJourneyFlow.map((step, index) => (
            <span key={step} className="inline-flex items-center gap-2">
              <span className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-bone">{step}</span>
              {index < qaJourneyFlow.length - 1 && <span aria-hidden="true" className="text-crimson-2">→</span>}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-smoke">Every stage contributes to one goal: building software that works as expected, performs reliably, and delivers a better user experience.</p>
      </motion.article>
    </div>
  );
}
