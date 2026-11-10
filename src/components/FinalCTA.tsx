
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const socialLinks = [
  {
    name: 'GitHub',
    href: profile.links.github,
    hover: 'hover:text-white',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    name: 'LinkedIn',
    href: profile.links.linkedin,
    hover: 'hover:text-[#0A66C2]',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/workhard2livelarge?igsh=MmM0YmZvNHc0bDZ2',
    hover: 'hover:text-[#E4405F]',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1BxMxaQsV8/',
    hover: 'hover:text-[#1877F2]',
    path: 'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.093 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.71 4.533-4.71 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.93-1.956 1.886v2.278h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.1 24 12.073z',
  },
  {
    name: 'Quora',
    href: 'https://www.quora.com/profile/Sumit-Panchal-345',
    hover: 'hover:text-[#B92B27]',
    path: 'M12.378 0C5.19 0 0 5.422 0 12.064c0 6.703 5.19 11.936 12.378 11.936 2.26 0 4.306-.534 6.017-1.485l1.562 1.485h4.04l-3.438-3.26c1.418-2.034 2.197-4.613 2.197-7.557C22.756 6.018 18.45 0 12.378 0zm-.22 20.49c-4.21 0-6.667-3.786-6.667-8.426 0-4.654 2.457-8.54 6.667-8.54 4.213 0 6.666 3.886 6.666 8.54 0 2.08-.428 3.97-1.22 5.43l-2.36-2.24h-3.84l3.91 3.72c-.9.97-2.03 1.516-3.156 1.516z',
  },
];

export default function FinalCTA({
  onReplay,
}: {
  onReplay: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.2'],
  });

  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const ctas = [
    {
      label: "Let's Build",
      href: `mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`,
      primary: true,
      cursor: 'play',
    },
    {
      label: 'LinkedIn',
      href: profile.links.linkedin,
      cursor: 'link',
    },
    {
      label: 'GitHub',
      href: profile.links.github,
      cursor: 'link',
    },
    {
      label: 'Email',
      href: `mailto:${profile.email}`,
      cursor: 'link',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]"
      />

      <Particles count={36} />

      {/* Main CTA content */}
      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>

      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{
          fontSize: 'clamp(3.4rem, 13vw, 12rem)',
          letterSpacing: spacing,
          filter: blur,
          opacity,
        }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">
          {profile.displayName.toUpperCase()}
        </p>

        <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-mist sm:text-sm">
          {profile.role.toUpperCase()}
        </p>
      </motion.div>

      {/* Existing CTA buttons */}
      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        {ctas.map((c) => (
          <motion.div
            key={c.label}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: EASE },
              },
            }}
          >
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className={`flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-bold tracking-[0.12em] transition ${c.primary
                  ? 'bg-crimson text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] hover:bg-crimson-2'
                  : 'border border-white/25 text-bone hover:border-bone hover:bg-white/10'
                  }`}
              >
                {c.primary && <span>▶</span>}
                {c.label.toUpperCase()}
                {!c.primary && <span className="text-mist">↗</span>}
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      {/* Existing replay controls */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button
          type="button"
          onClick={() => scrollTo(0, { offset: 0 })}
          className="transition-colors duration-300 hover:text-bone"
        >
          ↺ WATCH AGAIN
        </button>

        <button
          type="button"
          onClick={onReplay}
          className="transition-colors duration-300 hover:text-bone"
        >
          ▶ REPLAY OPENING
        </button>
      </div>

      {/* Professional footer - normal document flow, no overlapping */}
      <footer className="relative z-10 mt-24 w-full max-w-[1900px] border-t border-white/10 pt-8 text-left">
        <div className="grid gap-9 md:grid-cols-[1fr_1.2fr_1fr] md:items-center">

          {/* Left: Brand and copyright */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <SeriesMark />

            <div className="w-full max-w-[340px] space-y-2 text-[10px] leading-[1.8] tracking-[0.06em] text-smoke">

              {/* Professional role */}
              <p className="max-w-[310px] font-medium leading-relaxed text-bone/75">
                Quality Assurance Analyst
                <span className="mx-1.5 text-crimson-2">·</span>
                Manual QA Engineer
                <span className="mx-1.5 text-crimson-2">·</span>
                Software Testing
              </p>

              {/* Personal quote */}
              <p className="pt-1 font-serif text-xs italic tracking-wide text-bone/65">
                "Quality is a Team Effort."
              </p>

              {/* Professional tagline */}
              <p className="text-[10px] text-smoke">
                Building Confidence Through Testing.
              </p>

              {/* Copyright */}
              <div className="pt-2">
                <div className="mb-3 w-60 border-t border-white/10" />

                <p className="font-medium tracking-[0.08em] text-bone/65">
                  © {new Date().getFullYear()} {profile.displayName}
                </p>

                <p className="mt-0.5 text-smoke/80">
                  All rights reserved.
                </p>
              </div>

              {/* Developer credit */}
              <p className="pt-1 text-[9px] tracking-[0.1em] text-smoke/70">
                Designed & Developed by{' '}
                <span className="font-semibold text-bone/80">
                  Sumit Panchal
                </span>
              </p>

            </div>
          </div>

          {/* Center: Contact and social links */}
          <div className="flex flex-col items-center text-center">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-smoke">
              Connect With Me
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="text-xs font-medium tracking-[0.08em] text-crimson-2 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-blue-400 hover:decoration-blue-400"
            >
              {profile.email}
            </a>

            <div className="mt-5 flex items-center justify-center gap-5 sm:gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  data-cursor="link"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.2 }}
                  className={`text-[#b8b8bd] transition-colors duration-300 ${social.hover}`}
                >
                  <svg
                    className="h-[19px] w-[19px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Morse-code identity */}
            <motion.button
              type="button"
              onClick={() => scrollTo('#top', { offset: 0 })}
              aria-label="Return to the top of the portfolio"
              title="Back to portfolio home"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="mt-5 border-b-2 border-crimson/70 pb-2 font-mono text-[10px] font-[800] tracking-[0.14em] text-crimson-2 transition-colors duration-300 hover:border-blue-400 hover:text-blue-400 sm:text-[11px] sm:tracking-[0.2em]"
            >
              📡 ... ..- -- .. - / .--. .- -. -.-. .... .- .-.. 🛰️
            </motion.button>
          </div>

          {/* Right: Professional quality statement */}
          <div className="flex flex-col items-center gap-4 text-center md:items-end md:text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">
              Quality Commitment
            </p>

            <p className="w-full max-w-[360px] text-xs leading-[1.9] text-mist text-center md:text-right">
              Quality is built through attention to detail,
              <br className="hidden sm:block" />
              thoughtful testing, and continuous improvement.
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:justify-end">
              {[
                'Reliable Software',
                'Defect Prevention',
                'Regression Testing',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-3 py-2 text-[9px] font-medium tracking-wide text-bone/75 transition-colors duration-300 hover:border-crimson/60 hover:text-bone"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-[11px] font-medium tracking-[0.08em] text-bone/70 underline decoration-white/25 underline-offset-4 transition-colors duration-300 hover:text-crimson-2"
            >
              Explore My GitHub ↗
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
