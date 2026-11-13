
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { Magnetic } from './fx';

/**
 * The signature moment:
 * black → studio card → SUMIT PANCHAL → THE QA SERIES
 * → portrait reveal → role → ▶ PLAY
 *
 * Updated with slower timing and smoother transitions.
 */

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const TIMELINE = [
  { at: 500, beat: 1 },   // studio card
  { at: 2800, beat: 2 },  // name
  { at: 4000, beat: 3 },  // THE SERIES
  { at: 5200, beat: 4 },  // portrait
  { at: 6600, beat: 5 },  // role
  { at: 7800, beat: 6 },  // play button
];

export default function OpeningSequence({
  onDone,
  onPlay,
}: {
  onDone: () => void;
  onPlay: () => void;
}) {
  const reduced = useReducedMotionPref();

  const [beat, setBeat] = useState(
    reduced ? 6 : 0
  );

  // Opening sequence timeline
  useEffect(() => {
    if (reduced) {
      return;
    }

    const timers = TIMELINE.map(({ at, beat }) => {
      return window.setTimeout(() => {
        setBeat(beat);
      }, at);
    });

    return () => {
      timers.forEach((timer) => {
        clearTimeout(timer);
      });
    };
  }, [reduced]);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        onDone();
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-black"
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(12px)',
      }}
      transition={{
        duration: 1.1,
        ease: SMOOTH_EASE,
      }}
      role="dialog"
      aria-label="Opening titles"
    >
      {/* Letterbox bars */}
      <motion.div
        className="absolute inset-x-0 top-0 z-30 h-[7vh] bg-black"
        initial={{
          y: 0,
        }}
        animate={{
          y: beat >= 6 ? '-100%' : 0,
        }}
        transition={{
          duration: 1.8,
          ease: SMOOTH_EASE,
        }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-30 h-[7vh] bg-black"
        initial={{
          y: 0,
        }}
        animate={{
          y: beat >= 6 ? '100%' : 0,
        }}
        transition={{
          duration: 1.8,
          ease: SMOOTH_EASE,
        }}
      />

      {/* Projector flicker light */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 55%, rgba(229,19,43,0.22), transparent 70%)',
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: beat >= 2
            ? [0, 0.9, 0.5, 1]
            : 0,
        }}
        transition={{
          duration: 2,
          ease: SMOOTH_EASE,
        }}
      />

      {/* Studio card */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 flex items-center justify-center px-4"
            initial={{
              opacity: 0,
              y: 12,
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              filter: 'blur(8px)',
              y: -18,
            }}
            transition={{
              duration: 1.8,
              ease: SMOOTH_EASE,
            }}
          >
            <motion.p
              className="whitespace-nowrap text-center font-sans text-[24px] font-bold text-crimson-2 [text-shadow:0_2px_20px_rgba(229,19,43,0.2)] sm:text-[32px] md:text-[40px]"
              initial={{
                letterSpacing: '3px',
                opacity: 0,
                y: 30,
                filter: 'blur(10px)',
              }}
              animate={{
                letterSpacing: '8px',
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 3,
                delay: 0.2,
                ease: SMOOTH_EASE,
              }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portrait */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-0 mx-auto flex h-[65vh] max-w-[900px] items-end justify-center"
        initial={{
          opacity: 0,
          scale: 1.12,
          y: '10vh',
          filter: 'blur(18px) brightness(0.3)',
        }}
        animate={
          beat >= 4
            ? {
              opacity: 1,
              scale: 1,
              y: '-6vh',
              filter: 'blur(0px) brightness(1)',
            }
            : {}
        }
        transition={{
          duration: 2.8,
          ease: SMOOTH_EASE,
        }}
      >
        <img
          src={profile.portrait.src}
          srcSet={profile.portrait.srcSet}
          sizes="(max-width: 768px) 100vw, 900px"
          alt={profile.portrait.alt}
          className="h-full w-auto max-w-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_55%,transparent_98%)]"
        />
      </motion.div>

      {/* Background vignette */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[radial-gradient(70%_60%_at_50%_40%,transparent_30%,rgba(0,0,0,0.85)_100%)]"
      />

      {/* Title */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-display leading-[1.05] -mb-[0.15em] text-bone drop-shadow-[0_8px_40px_rgba(0,0,0,0.8)]"
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
          }}
          initial={{
            opacity: 0,
            scale: 1.3,
            filter: 'blur(20px)',
            letterSpacing: '0.5em',
          }}
          animate={
            beat >= 2
              ? {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                letterSpacing: '0.04em',
                y: beat >= 4 ? '-33vh' : 0,
              }
              : {}
          }
          transition={{
            duration: 2.4,
            ease: SMOOTH_EASE,
          }}
        >
          {profile.firstName}
        </motion.h1>

        <motion.p
          className="font-sans text-sm font-bold text-crimson-2 [text-shadow:0_2px_20px_rgba(0,0,0,0.9)] sm:text-lg"
          initial={{
            opacity: 0,
            letterSpacing: '1.4em',
          }}
          animate={
            beat >= 3
              ? {
                opacity: 1,
                letterSpacing: '0.7em',
                y: beat >= 4 ? '-33vh' : 0,
              }
              : {}
          }
          transition={{
            duration: 2.4,
            ease: SMOOTH_EASE,
          }}
        >
          {profile.seriesTag}
        </motion.p>
      </div>

      {/* Role and Play button */}
      <div className="absolute inset-x-0 bottom-[4vh] z-20 flex flex-col items-center gap-5 px-4 text-center">
        <motion.p
          className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-bone/90 sm:text-sm sm:tracking-[0.4em]"
          initial={{
            opacity: 0,
            y: 20,
            filter: 'blur(6px)',
          }}
          animate={
            beat >= 5
              ? {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }
              : {}
          }
          transition={{
            duration: 2.4,
            ease: SMOOTH_EASE,
          }}
        >
          {profile.tagline.join('  •  ')}
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 12,
          }}
          animate={
            beat >= 6
              ? {
                opacity: 1,
                scale: 1,
                y: 0,
              }
              : {}
          }
          transition={{
            duration: 2.4,
            ease: SMOOTH_EASE,
          }}
        >
          <Magnetic>

            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              tabIndex={beat >= 6 ? 0 : -1}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/20 bg-bone px-5 font-sans text-[11px] font-semibold leading-none tracking-[0.2em] text-ink shadow-[0_0_60px_rgba(229,19,43,0.35)] transition hover:border-white/60 hover:bg-white"
            >
              <span className="inline-flex items-center justify-center text-sm leading-none transition-transform group-hover:scale-125">
                ▶
              </span>

              <span className="inline-flex items-center justify-center leading-none">
                PLAY
              </span>
            </button>

          </Magnetic>
        </motion.div>
      </div>

      {/* Skip intro */}
      <button
        type="button"
        onClick={onDone}
        className="absolute right-4 top-[6vh] z-40 inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-5 font-sans text-[11px] font-semibold tracking-[0.2em] text-mist transition hover:border-white/60 hover:text-bone sm:right-6 md:right-8"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
}
