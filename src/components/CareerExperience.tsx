import { useEffect, useRef, useState } from 'react';
import { careerEpisodes, experience, type CareerExperienceItem } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import EpisodeCard from './EpisodeCard';
import { RailButtons } from './Rail';
import { motion } from 'framer-motion';

type CareerExperienceProps = {
  onOpen: (item: CareerExperienceItem) => void;
};

export default function CareerExperience({ onOpen }: CareerExperienceProps) {
  const rail = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = rail.current;
    if (!element) return;

    const updateProgress = () => {
      const maxScroll = element.scrollWidth - element.clientWidth;
      setProgress(maxScroll > 0 ? element.scrollLeft / maxScroll : 1);
    };

    updateProgress();
    element.addEventListener('scroll', updateProgress, { passive: true });
    const observer = new ResizeObserver(updateProgress);
    observer.observe(element);
    window.addEventListener('resize', updateProgress);

    return () => {
      element.removeEventListener('scroll', updateProgress);
      observer.disconnect();
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <>
      <SectionHeading
        kicker="Career Timeline · 3 Milestones"
        title="Career Experience & Training"
        aside={<p className="max-w-xs text-sm text-mist">A clear view of the roles and practical training that shaped my approach to software quality.</p>}
      />

      <motion.p
        className="gutter mb-2 max-w-3xl text-[15px] leading-relaxed text-bone/75"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        From application support and hands-on industrial QA training to professional quality assurance across web and mobile applications, each role has strengthened my attention to detail, structured problem-solving, and commitment to reliable releases.
      </motion.p>

      <div className="group/rail relative mt-2">
        <div
          ref={rail}
          className="rail flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] py-8 scroll-px-[var(--gutter)] [perspective:1200px]"
          aria-label="Career experience cards"
        >
          {careerEpisodes.map((episode, index) => (
            <EpisodeCard
              key={episode.code}
              episode={episode}
              index={index}
              onOpen={() => onOpen(experience[index])}
            />
          ))}
        </div>
        <RailButtons rail={rail} />
      </div>

      <div className="gutter mt-1 flex items-center gap-4">
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.24em] text-smoke">Career Timeline</span>
        <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full origin-left rounded-full bg-crimson transition-[width] duration-150" style={{ width: `${Math.max(4, progress * 100)}%` }} />
        </div>
        <span className="shrink-0 text-[10px] tabular-nums text-smoke">{experience.length} Milestones</span>
      </div>
    </>
  );
}
