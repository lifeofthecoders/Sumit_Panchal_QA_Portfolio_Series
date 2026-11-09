
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { EASE } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
  onSwitch: (p: Project) => void;
};

export default function ProjectModal({
  project,
  onClose,
  onSwitch,
}: ProjectModalProps) {
  const scroller = useRef<HTMLElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  // Close modal with Escape and manage keyboard focus.
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;

    closeBtn.current?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  // Reset modal scroll when switching projects.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  return (
    <motion.main
      ref={scroller}
      className="relative min-h-screen w-full overflow-x-hidden bg-ink"
      aria-labelledby={`title-${project.id}-modal`}
    >
      {/* STANDALONE PROJECT DETAILS PAGE */}
      <div className="relative mx-auto min-h-screen max-w-5xl bg-ink-2 shadow-2xl">
        <motion.div
          className="relative"

          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: 30,
            transition: { duration: 0.3 },
          }}
        >
          {/* PROJECT BANNER */}
          <div className="group/banner relative h-[52vh] min-h-[340px] overflow-hidden sm:rounded-t-2xl">

            {/* Clickable banner image */}
            <a
              href={project.bannerImage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} banner in a new tab`}
              data-cursor="link"
              className="group/image absolute inset-0 z-0 block cursor-zoom-in overflow-hidden"
            >
              <img
                src={project.bannerImage}
                alt={`${project.title} project banner`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.05]"
              />

              <div className="pointer-events-none absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover/image:bg-crimson/10" />

              <span className="pointer-events-none absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-xl text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover/image:scale-100 group-hover/image:opacity-100">
                ↗
              </span>
            </a>

            {/* CLOSE BUTTON */}
            <button
              ref={closeBtn}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              data-cursor="link"
              aria-label="Back to all projects"
              className="absolute left-4 top-4 z-20 flex h-11 items-center justify-center gap-1 rounded-full border border-white/15 bg-black/65 px-4 text-xs font-bold tracking-[0.16em] text-bone shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-crimson-2 hover:bg-crimson hover:text-white active:scale-95 sm:left-6 sm:top-6"
            >
              <span className="mr-1">←</span><span className="hidden sm:inline">BACK</span>
            </button>

          </div>

          {/* PROJECT TITLE - SEPARATE FROM THE CLEAN BANNER */}
          <motion.header
            className="px-5 pt-8 sm:px-10 sm:pt-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
          >
            <p className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-mist sm:text-[11px]">
              <span className="font-display text-xl tracking-normal text-crimson-2">SP</span>
              MANUAL QA CASE STUDY
            </p>
            <h1
              id={`title-${project.id}-modal`}
              className="max-w-4xl break-words font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-wide text-bone"
            >
              {project.title}
            </h1>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-crimson-2/70 via-white/15 to-transparent" />
          </motion.header>

          {/* PROJECT CONTENT */}
          <motion.div
            className="px-5 pb-12 pt-6 sm:px-10 sm:pt-8"
            initial="hidden"
            animate="show"
            transition={{
              staggerChildren: 0.08,
              delayChildren: 0.25,
            }}
          >
            {/* ROLE AND CATEGORY */}
            <motion.div
              variants={block}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist"
            >
              <span className="font-semibold text-[#46e3a8]">
                {project.role}
              </span>

              <span className="h-1 w-1 rounded-full bg-smoke" />

              <span>{project.genre}</span>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={block}
              className="mt-4 max-w-3xl text-lg leading-relaxed text-bone sm:text-xl"
            >
              {project.logline}
            </motion.p>

            {/* PROJECT OVERVIEW */}
            <motion.section
              variants={block}
              className="mt-8 grid gap-5 rounded-xl bg-ink p-5 ring-1 ring-white/10 sm:grid-cols-2"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">
                  Project Overview
                </p>

                <p className="mt-2 text-sm leading-relaxed text-bone/80">
                  {project.overview}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">
                  Platforms
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className="glass rounded-full px-3 py-1.5 text-sm text-bone"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* TESTING COVERAGE */}
            <motion.section variants={block} className="mt-10">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                Testing Coverage
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.testingAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-bone/85 transition-colors duration-300 hover:border-crimson-2/60 hover:bg-crimson/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* PROJECT GALLERY */}
            <motion.section variants={block} className="mt-10">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                Project Screens & Visual Reference
              </h3>

              <div className="grid gap-4 md:grid-cols-3">
                {project.gallery.map((image) => (
                  <figure
                    key={image.src}
                    className="group/gallery overflow-hidden rounded-xl bg-ink ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:ring-crimson-2/60 hover:shadow-[0_12px_35px_-15px_rgba(229,19,43,0.3)]"
                  >
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open full-size image: ${image.caption}`}
                      data-cursor="link"
                      className="group/image relative block cursor-zoom-in overflow-hidden"
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-ink">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover/image:scale-[1.05]"
                        />
                      </div>

                      <div className="pointer-events-none absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover/image:bg-crimson/10" />

                      <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/60 text-base text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover/image:scale-100 group-hover/image:opacity-100">
                        ↗
                      </span>
                    </a>

                    <figcaption className="p-3 text-xs leading-relaxed text-mist">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </motion.section>

            {/* QA CONTRIBUTIONS AND WORKFLOWS */}
            <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
              <motion.section variants={block}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                  My QA Contributions
                </h3>

                <ul className="space-y-4">
                  {project.build.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-relaxed text-bone/85"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          background: project.palette.accent,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section variants={block}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                  Key User Workflows
                </h3>

                <ul className="space-y-2.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-bone/85"
                    >
                      <span className="text-crimson-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>

            {/* OTHER QA PROJECTS */}
            <motion.section
              variants={block}
              className="mt-14 border-t border-white/10 pt-8"
            >
              <h3 className="mb-4 font-sans text-lg font-semibold text-bone">
                Explore Other QA Projects
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {more.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-cursor="view"
                    aria-label={`Open ${p.title} project details`}
                    onClick={(event) => {
                      event.stopPropagation();
                      onSwitch(p);
                    }}
                    className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl text-left ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-crimson-2/70 hover:shadow-[0_15px_40px_-15px_rgba(229,19,43,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-2"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ProjectArt project={p} />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist">
                        {p.genre}
                      </p>

                      <p className="mt-1 font-display text-3xl leading-none tracking-wide text-bone transition-colors duration-300 group-hover:text-crimson-2">
                        {p.title}
                      </p>

                      <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-bone/70 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                        View Project <span>↗</span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
