
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, viewerProfiles, type ProfileId } from '../data/portfolio';
import { EASE } from './fx';

function toTitleCase(value: string) {
  const acronyms = new Set(['QA', 'API', 'SDLC', 'STLC', 'RTM', 'UAT', 'ISTQB']);
  return value
    .split(/(\s+)/)
    .map((part) => {
      if (!part.trim()) return part;
      return part.split(/([/&-])/).map((word) => {
        if (!word || /^[/&-]$/.test(word)) return word;
        if (acronyms.has(word.toUpperCase())) return word.toUpperCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('');
    })
    .join('');
}

export function ProfileAvatar({
  id,
  size = 'md',
}: {
  id: ProfileId;
  size?: 'sm' | 'md';
}) {
  const sizeClass = size === 'sm' ? 'h-8 w-8' : 'h-24 w-24';

  const avatarFrame =
    `${sizeClass} flex shrink-0 items-center justify-center overflow-hidden ` +
    'rounded-xl border border-white/10 bg-[#202024]';

  if (id === 'sumit') {
    return (
      <span className={avatarFrame}>
        <img
          src={`${import.meta.env.BASE_URL}assets/portrait-420.webp`}
          alt="Sumit Panchal"
          className="h-full w-full object-cover object-center"
        />
      </span>
    );
  }

  const glyph: Record<ProfileId, string> = {
    sumit: 'SP',
    recruiter: 'R',
    qa: 'QA',
    creative: '✦',
  };

  return (
    <span
      className={`${avatarFrame} font-display leading-none text-bone ${
        id === 'qa'
          ? size === 'sm'
            ? 'text-sm tracking-tight'
            : 'text-2xl tracking-tight'
          : size === 'sm'
            ? 'text-lg'
            : 'text-3xl'
      }`}
      aria-hidden="true"
    >
      {glyph[id]}
    </span>
  );
}

export default function ProfileSelector({
  onPick,
}: {
  onPick: (id: ProfileId) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onPick('sumit');
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onPick]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: EASE }}
      role="dialog"
      aria-label="Who's Watching?"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(229,19,43,0.14),transparent_70%)]"
      />

      <motion.h2
        className="relative mb-10 text-center font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl"
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Who&apos;s Watching?
      </motion.h2>

      <motion.ul
        className="relative grid grid-cols-2 gap-6 sm:flex sm:gap-8"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
      >
        {viewerProfiles.map((p) => (
          <motion.li
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: EASE },
              },
            }}
          >
            <button
              type="button"
              onClick={() => onPick(p.id)}
              data-cursor="play"
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="relative flex h-24 w-24 items-center justify-center rounded-xl ring-2 ring-transparent transition duration-300 group-hover:scale-105 group-hover:ring-bone group-focus-visible:ring-bone">
                <ProfileAvatar id={p.id} size="md" />

                {p.id === 'sumit' && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-crimson px-2 py-0.5 text-[9px] font-bold tracking-[0.18em] text-white">
                    Main
                  </span>
                )}
              </span>

              <span className="font-sans text-sm font-medium text-mist transition group-hover:text-bone sm:text-base">
                {toTitleCase(p.name)}
              </span>

              <span className="max-w-[9rem] text-[11px] leading-snug text-smoke">
                {toTitleCase(p.blurb)}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <p className="relative mt-12 max-w-md text-center text-xs leading-relaxed text-smoke">
        Every Profile Explores The Same QA Story Of {profile.displayName} - It Only Changes What Plays First.
      </p>
    </motion.div>
  );
}
