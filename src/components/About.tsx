
import { motion } from 'framer-motion';
import { experience, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';


export default function About() {
  const highlightedRole = 'Senior Quality Analyst | Manual QA Engineer';
  const introParts = profile.aboutIntro.split(highlightedRole);

  const facts = [
    {
      k: 'Experience',
      v: '5+ Years',
      s: 'Manual Testing · Web & Mobile QA',
    },
    {
      k: 'Current Role',
      v: `${experience[0].role}`,
      s: `${experience[0].company} · ${experience[0].period}`,
    },
    {
      k: 'Education',
      v: 'B.E. Electronics & Communication',
      s: 'Silver Oak University · CGPA 7.48',
    },
    {
      k: 'Based in',
      v: profile.location,
      s: 'Ahmedabad, Gujarat, India',
    },
  ];


  return (
    <>
      <SectionHeading kicker="Quality Is a Mindset" title="About Sumit" />
      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
              <img
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[100%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                  <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                </div>
                <span className="rounded border border-white/30 px-1.5 text-[10px] font-bold text-bone">S01–S05</span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div>


          <motion.p
            className="font-['Allura'] text-[clamp(1.35rem,1.8vw,1.7rem)] font-normal leading-[1.45] tracking-normal text-[#d9b46a]"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >

            <span className="ml-0.5 inline-block align-[-0.15em] font-display text-2xl font-semibold leading-none text-[#d9b46a]">
              “
            </span>

            {introParts.length > 1 ? (
              <>
                {introParts[0]}
                <span className="font-['Allura'] font-bold text-crimson-2">
                  {highlightedRole}
                </span>
                {introParts.slice(1).join(highlightedRole)}
              </>
            ) : (
              profile.aboutIntro
            )}

            <span className="ml-0.5 inline-block align-[-0.15em] font-display text-2xl font-semibold leading-none text-[#d9b46a]">
              ”
            </span>

          </motion.p>

          <p className="mt-4 font-display text-3xl leading-none text-crimson-2">- {profile.fullName}</p>

          <motion.dl
            className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                <dd className="mt-2 text-base font-semibold text-bone">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Interests</p>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span key={i} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
