
import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { ProjectListingArt } from './Poster';

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: () => void;
};

export default function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  const shortTitle = project.title.split(' - ')[0];

  const visibleTestingAreas = project.testingAreas.slice(0, 3);

  const remainingAreas =
    project.testingAreas.length - visibleTestingAreas.length;

  return (
    <motion.article
      className="w-[84vw] shrink-0 snap-start sm:w-[62vw] lg:w-[46vw] xl:w-[42vw]"
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px -10% 0px 0px' }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: EASE,
      }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title} QA case study`}
          className="focus-ring relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:ring-white/25 sm:aspect-[16/12] lg:aspect-auto lg:h-[66vh]"
        >
          {/* Domain-specific illustrated shield */}
          <motion.div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.05]">
              <ProjectListingArt project={project} />
            </div>
          </motion.div>

          {/* Additional contrast for readable card content */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />

          {/* Top branding */}
          <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-7 sm:top-7">
            <span className="font-display text-xl leading-none text-crimson-2">
              SP
            </span>

            <span className="text-[10px] font-bold tracking-[0.34em] text-bone/90">
              QA CASE STUDY
            </span>
          </div>

          {/* Role badge */}
          <span className="absolute right-5 top-5 rounded border border-white/30 bg-black/40 px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] text-bone backdrop-blur-md sm:right-7 sm:top-7">
            {project.role.toUpperCase()}
          </span>

          {/* Project information */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            {/* Project domain */}
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-mist sm:text-[11px]">
              {project.genre}
            </p>

            {/* Short, readable title */}
            <motion.h3
              className="max-w-full break-words font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[0.92] tracking-wide text-bone"
            >
              {shortTitle}
            </motion.h3>

            {/* Short description */}
            <p className="mt-2 line-clamp-2 max-w-lg text-xs leading-relaxed text-bone/80 sm:text-sm">
              {project.logline}
            </p>

            {/* Supported platforms */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[9px] font-semibold text-bone/90 backdrop-blur-md sm:text-[10px]"
                >
                  {platform}
                </span>
              ))}
            </div>

            {/* Key testing areas */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {visibleTestingAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-black/45 px-2.5 py-1 text-[9px] font-medium text-bone/80 backdrop-blur-md sm:text-[10px]"
                >
                  {area}
                </span>
              ))}

              {remainingAreas > 0 && (
                <span className="rounded-full bg-black/45 px-2.5 py-1 text-[9px] font-medium text-bone/80 backdrop-blur-md sm:text-[10px]">
                  +{remainingAreas} more
                </span>
              )}
            </div>

            {/* Case study action */}
            <div className="mt-4">
              <span className="inline-flex min-h-10 items-center gap-2 rounded-md bg-bone px-5 text-xs font-bold text-ink transition group-hover:bg-white sm:text-sm">
                ▶ View QA Case Study
              </span>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
