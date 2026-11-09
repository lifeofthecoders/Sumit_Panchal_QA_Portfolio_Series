
import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

export function PosterBackdrop({
  palette,
  children,
  className = '',
}: {
  palette: Palette;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)
        `,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)`,
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]"
      />

      {children}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
      />
    </div>
  );
}

/**
 * Original project image artwork.
 * Retained for project-detail navigation and related projects.
 */
export function ProjectArt({
  project,
  className = '',
}: {
  project: Project;
  className?: string;
}) {
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
      />
    </PosterBackdrop>
  );
}

/**
 * Domain-specific symbol inside the shield on main listing cards.
 */
function ProjectDomainIcon({
  projectId,
  accent,
}: {
  projectId: string;
  accent: string;
}) {
  switch (projectId) {
    case 'lymuv':
      return (
        <g
          fill="none"
          stroke={accent}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 67 L34 40 Q38 31 50 31 H91 Q102 31 107 42 L120 67 V91 H16 V67 Z" />
          <path d="M32 65 H105" />
          <path d="M48 34 L39 65 M91 34 L101 65" />
          <circle cx="39" cy="93" r="11" />
          <circle cx="97" cy="93" r="11" />
          <path d="M50 92 H86" />
        </g>
      );

    case 'dap-me':
      return (
        <g
          fill="none"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M67 42 L36 82 L99 82 L67 42" />
          <path d="M67 42 L67 104" />
          <circle cx="67" cy="29" r="17" />
          <circle cx="29" cy="88" r="16" />
          <circle cx="105" cy="88" r="16" />
          <circle cx="67" cy="111" r="13" />
        </g>
      );

    case 'kinzwin':
      return (
        <g
          fill="none"
          stroke={accent}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M32 49 Q38 30 58 37 L78 37 Q99 30 110 49 L122 87 Q126 104 110 107 Q101 109 91 93 H49 Q39 109 29 107 Q12 104 18 87 Z" />
          <path d="M47 60 V83 M36 71 H58" />
          <circle cx="87" cy="63" r="5" fill={accent} />
          <circle cx="103" cy="79" r="5" fill={accent} />
        </g>
      );

    case 'bunny-books':
      return (
        <g
          fill="none"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M67 45 Q41 30 16 42 V105 Q43 94 67 112 Q91 94 118 105 V42 Q92 30 67 45 Z" />
          <path d="M67 46 V112" />
          <path d="M29 59 Q43 55 53 61 M29 75 Q43 71 53 77" />
          <path d="M81 61 Q93 55 105 59 M81 77 Q93 71 105 75" />
          <path d="M45 91 L57 77 L68 88 L79 71 L96 91" />
        </g>
      );

    case 'health-e':
      return (
        <g
          fill="none"
          stroke={accent}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M67 108 C54 97 22 77 22 56 Q22 30 48 30 Q62 30 67 46 Q75 30 89 30 Q113 30 113 56 Q113 77 67 108 Z" />
          <path d="M67 45 V83 M48 64 H86" />
          <path d="M18 122 H42 L53 109 L67 133 L79 115 L89 122 H116" />
        </g>
      );

    case 'regive':
      return (
        <g
          fill="none"
          stroke={accent}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 67 H111 V115 H23 Z" />
          <path d="M16 67 L28 49 H106 L118 67 Z" />
          <path d="M67 49 V115" />
          <path d="M67 49 C37 49 35 17 52 17 Q68 17 67 49 Z" />
          <path d="M67 49 C97 49 99 17 82 17 Q66 17 67 49 Z" />
          <path d="M42 84 L58 99 L91 78" />
        </g>
      );

    default:
      return (
        <g
          fill="none"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M67 35 L101 49 V77 Q101 106 67 125 Q33 106 33 77 V49 Z" />
          <path d="M49 79 L62 92 L87 65" />
        </g>
      );
  }
}

/**
 * New illustrated artwork used ONLY by the main project listing.
 * Real application images remain in ProjectArt and ProjectModal.
 */
export function ProjectListingArt({
  project,
  className = '',
}: {
  project: Project;
  className?: string;
}) {
  const accent = project.palette.accent;

  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg
        viewBox="0 0 600 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient
            id={`listing-glow-${project.id}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>

          <linearGradient
            id={`shield-gradient-${project.id}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Large atmospheric glow */}
        <circle
          cx="435"
          cy="215"
          r="205"
          fill={`url(#listing-glow-${project.id})`}
        />

        {/* Fine geometric rings */}
        <circle
          cx="435"
          cy="215"
          r="168"
          fill="none"
          stroke={accent}
          strokeWidth="1"
          strokeOpacity="0.12"
          strokeDasharray="5 10"
        />

        <circle
          cx="435"
          cy="215"
          r="143"
          fill="none"
          stroke={accent}
          strokeWidth="1"
          strokeOpacity="0.18"
        />

        {/* Main quality shield */}
        <g transform="translate(330 65)">
          <path
            d="M105 0 L210 40 V147 C210 232 165 294 105 329 C45 294 0 232 0 147 V40 Z"
            fill={`url(#shield-gradient-${project.id})`}
            stroke={accent}
            strokeWidth="2.5"
            strokeOpacity="0.75"
          />

          <path
            d="M105 18 L190 51 V147 C190 217 155 268 105 298 C55 268 20 217 20 147 V51 Z"
            fill="none"
            stroke={accent}
            strokeWidth="1.4"
            strokeOpacity="0.32"
          />

          {/* Project-specific domain illustration */}
          <g transform="translate(38 100)">
            <ProjectDomainIcon
              projectId={project.id}
              accent={accent}
            />
          </g>

          {/* Quality check mark */}
          <circle
            cx="184"
            cy="277"
            r="21"
            fill="#07100d"
            stroke={accent}
            strokeWidth="2"
          />

          <path
            d="M173 277 L181 285 L196 268"
            fill="none"
            stroke={accent}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Decorative QA interface lines */}
        <g
          fill="none"
          stroke={accent}
          strokeLinecap="round"
          opacity="0.3"
        >
          <path d="M55 125 H190" strokeWidth="2" />
          <path d="M55 140 H140" strokeWidth="1" />
          <path d="M55 155 H170" strokeWidth="1" />
          <path d="M380 430 H540" strokeWidth="2" />
          <path d="M405 445 H510" strokeWidth="1" />
        </g>

        {/* Small illuminated details */}
        <circle cx="525" cy="75" r="4" fill={accent} opacity="0.8" />
        <circle cx="548" cy="97" r="2.5" fill={accent} opacity="0.5" />
        <circle cx="300" cy="350" r="3" fill={accent} opacity="0.6" />
      </svg>
    </PosterBackdrop>
  );
}

/**
 * SP quality branding mark.
 */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg
        viewBox="0 0 24 32"
        className="h-[1.1em] w-auto"
        aria-hidden="true"
      >
        <path
          d="M18 6c-1.8-1.8-4-2.6-6.5-2.6C7.6 3.4 5 5.6 5 9c0 7.6 14 4.6 14 11.6 0 3-2.8 5-6.4 5-3 0-5.4-1.2-7.2-3"
          fill="none"
          stroke="#e5132b"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">
        QA SERIES
      </span>
    </span>
  );
}
