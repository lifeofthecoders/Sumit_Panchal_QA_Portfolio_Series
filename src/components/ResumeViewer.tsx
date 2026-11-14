
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY - a designed resume preview plus view / download actions. */
export default function ResumeSection({
  onView,
}: {
  onView: () => void;
}) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />

      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-['Allura'] text-3xl italic leading-tight text-bone font-semibold text-crimson-2">
            Every Episode, On One Page.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-mist">
            Education, training, projects, achievements and{' '}
            {certifications.length} professional credentials - view it here
            or take a copy with you.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ View Resume
              </button>
            </Magnetic>

            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Sumit_Panchal_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                ⤓ Download Resume
              </a>
            </Magnetic>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-2.5">
            {[
              {
                v: '5+',
                k: 'Years in QA',
                s: 'Experience',
              },
              {
                v: String(projects.length),
                k: 'QA Projects',
                s: 'Case studies',
              },
              {
                v: String(certifications.length),
                k: 'Certifications',
                s: 'Credentials',
              },
            ].map((item, index) => (
              <div
                key={item.k}
                className="group relative isolate overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.065] to-white/[0.015] px-2 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-crimson-2/40 hover:from-white/[0.09] hover:to-white/[0.025] sm:px-3"
              >
                {/* Subtle top accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Metric index */}
                <span className="absolute right-2 top-2 text-[8px] font-semibold tracking-widest text-white/20">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Metric label */}
                <dt className="flex min-h-[30px] items-center justify-center text-[8px] font-bold uppercase leading-tight tracking-[0.13em] text-smoke sm:text-[9px]">
                  {item.k}
                </dt>

                {/* Metric value */}
                <dd className="mt-2 font-display text-[clamp(1.6rem,4vw,2.2rem)] leading-none tabular-nums text-bone transition-colors duration-300 group-hover:text-white">
                  {item.v}
                </dd>

                {/* Supporting label */}
                <p className="mt-2 text-[9px] font-medium tracking-wide text-mist">
                  {item.s}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/** On phones the sheet starts as a teaser so the page keeps its pace. */
function CollapsibleSheet() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] ${
          open ? 'max-h-[6000px]' : 'max-h-[560px]'
        } md:max-h-none`}
      >
        <ResumeSheet />
      </div>

      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone"
          >
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

/** Consistent resume section heading. */
function H({ children }: { children: string }) {
  return (
    <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">
      {children}
    </h4>
  );
}

/** Category labels for the certificate section. */
const certificationCategoryTitles: Record<string, string> = {
  'QUALITY ASSURANCE': 'Software Quality & Testing',
  'TECHNICAL SKILLS': 'Technical & Professional Learning',
  ACHIEVEMENTS: 'Additional Achievements',
};

/** Complete grouped resume preview. */
export function ResumeSheet() {
  // Group credentials using their category from portfolio.ts.
  const certificationGroups = certifications.reduce<
    Record<string, typeof certifications>
  >((groups, certificate) => {
    const category = certificate.category || 'OTHER';

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(certificate);

    return groups;
  }, {});

  // Keep categories in a deliberate, professional order.
  const categoryOrder = [
    'QUALITY ASSURANCE',
    'TECHNICAL SKILLS',
    'ACHIEVEMENTS',
  ];

  const groupedCertifications = [
    ...categoryOrder.map((category) => ({
      category,
      items: certificationGroups[category] || [],
    })),
    ...Object.entries(certificationGroups)
      .filter(([category]) => !categoryOrder.includes(category))
      .map(([category, items]) => ({ category, items })),
  ].filter((group) => group.items.length > 0);

  // All certificate categories are collapsed by default.
  const [expandedCertificationGroups, setExpandedCertificationGroups] =
    useState<Record<string, boolean>>(() =>
      Object.fromEntries(
        groupedCertifications.map((group) => [group.category, false])
      )
    );

  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent"
      />

      {/* Resume header */}
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">
            STARRING
          </p>

          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone text-crimson-2">
            {profile.fullName}
          </h3>

          <p className="mt-2 text-xs font-medium tracking-wide text-mist">
            {profile.role}
          </p>
        </div>

        <div className="text-xs leading-relaxed sm:text-right">
          <a
            href={`mailto:${profile.email}`}
            className="block text-sky-400 transition-colors duration-300 hover:text-sky-300 hover:underline hover:underline-offset-4"
          >
            {profile.email}
          </a>

          <div className="mt-1 flex flex-wrap items-center gap-2 sm:justify-end">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-400 transition-colors duration-300 hover:text-sky-300 hover:underline hover:underline-offset-4"
            >
              LinkedIn ↗
            </a>

            <span className="text-smoke">·</span>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-400 transition-colors duration-300 hover:text-sky-300 hover:underline hover:underline-offset-4"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        {/* LEFT COLUMN */}
        <div>
          {/* Education */}
          <H>Education</H>

          {education.map((item) => (
            <div key={item.school} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {item.school}
                  {item.place ? `, ${item.place}` : ''}
                </p>

                <p className="text-xs text-smoke">{item.period}</p>
              </div>

              <p className="text-xs text-mist">
                {item.degree} ·{' '}
                <span className="text-bone/80">{item.score}</span>
              </p>
            </div>
          ))}

          {/* Work experience */}
          <H>Work Experience</H>

          {experience.map((item) => (
            <div key={item.company}>
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {item.company} - {item.role}
                </p>

                <p className="text-xs text-smoke">{item.period}</p>
              </div>

              <ul className="mt-2 space-y-1.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-xs leading-relaxed text-mist"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Projects */}
          <H>QA Projects</H>

          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <p className="text-sm font-semibold text-bone">
                {project.title}
              </p>

              <p className="mt-0.5 text-[11px] font-medium text-crimson-2">
                {project.role}
              </p>

              <p className="mt-1 text-xs text-mist">
                {project.platforms.join(' · ')}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-mist/80">
                {project.logline}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Skills */}
          <H>Skills</H>

          <div className="space-y-2.5">
            {skillCategories.map((category) => (
              <p
                key={category.id}
                className="text-xs leading-relaxed text-mist"
              >
                <span className="font-semibold text-bone">
                  {category.title}:{' '}
                </span>

                {category.skills.map((skill) => skill.name).join(', ')}
              </p>
            ))}
          </div>

          {/* Achievements */}
          <H>Achievements & Contributions</H>

          <ul className="space-y-3">
            {achievements.map((achievement) => (
              <li
                key={achievement.id}
                className="text-xs leading-relaxed text-mist"
              >
                <span className="font-semibold text-bone">
                  {achievement.title}
                </span>

                <span className="font-semibold text-bone text-smoke">
                  {' '}
                  - {achievement.org}
                </span>

                <p className="mt-0.5">{achievement.detail}</p>
              </li>
            ))}
          </ul>

          {/* Certifications and credentials */}
          <H>Certifications & Credentials</H>

          <p className="mb-4 text-[11px] leading-relaxed text-smoke">
            Professional certifications, testing assessments and additional
            technical learning.
          </p>

          <div className="space-y-3">
            {groupedCertifications.map((group) => {
              const isExpanded =
                expandedCertificationGroups[group.category] ?? false;

              const categoryId = `certificates-${group.category
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')}`;

              return (
                <div
                  key={group.category}
                  className="group/cert overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] transition duration-300 hover:border-white/20"
                >
                  {/* Category heading */}
                  <div className="flex items-center justify-between gap-3 px-3 py-3">
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase leading-relaxed tracking-[0.13em] text-bone">
                        {certificationCategoryTitles[group.category] ||
                          group.category}
                      </span>

                      <span className="mt-0.5 block text-[9px] text-smoke">
                        {group.items.length}{' '}
                        {group.items.length === 1
                          ? 'Credential'
                          : 'Credentials'}
                      </span>
                    </span>

                    {/* Only the arrow button controls expansion */}
                    <button
                      type="button"
                      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${
                        certificationCategoryTitles[group.category] ||
                        group.category
                      }`}
                      aria-expanded={isExpanded}
                      aria-controls={categoryId}
                      onClick={() =>
                        setExpandedCertificationGroups((current) => ({
                          ...current,
                          [group.category]: !current[group.category],
                        }))
                      }
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs text-mist transition group-hover/cert:border-white/20 ${
                        isExpanded
                          ? 'rotate-180 border-crimson-2/50 text-crimson-2'
                          : 'rotate-0'
                      }`}
                    >
                      ↓
                    </button>
                  </div>

                  {/* Individual credentials */}
                  {isExpanded && (
                    <ul
                      id={categoryId}
                      className="space-y-2 border-t border-white/[0.08] p-2.5"
                    >
                      {group.items.map((certificate, index) => (
                        <li
                          key={`${certificate.issuer}-${certificate.name}-${certificate.date}`}
                          className="rounded-md border border-white/[0.06] bg-black/15 p-2.5 transition hover:border-white/15 hover:bg-white/[0.035]"
                        >
                          <div className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-2" />

                            <div className="min-w-0 flex-1">
                              <p className="break-words text-[11px] font-semibold leading-relaxed text-bone">
                                {certificate.name}
                              </p>

                              <p className="mt-1 break-words text-[10px] leading-relaxed text-mist">
                                {certificate.issuer}
                              </p>

                              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                                <time className="text-[9px] text-smoke">
                                  {certificate.date}
                                </time>

                                <a
                                  href={certificate.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`View certificate: ${certificate.name}`}
                                  className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.1em] text-crimson-2 transition hover:text-bone"
                                >
                                  View Certificate ↗
                                </a>
                              </div>
                            </div>

                            <span className="hidden shrink-0 font-display text-xs text-white/20 sm:block">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-3 text-right text-[9px] font-medium uppercase tracking-[0.16em] text-smoke">
            {certifications.length} Credentials Listed
          </p>
        </div>
      </div>
    </article>
  );
}
