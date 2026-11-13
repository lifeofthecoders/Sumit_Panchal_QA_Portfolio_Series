
import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import {
  viewerProfiles,
  projects,
  type ProfileId,
  type Project,
  type SectionId,
} from './data/portfolio';

import {
  SmoothScrollProvider,
  useSmoothScroll,
} from './hooks/smoothScroll';

import CustomCursor from './components/CustomCursor';
import InteractiveCanvas from './components/InteractiveCanvas';
import OpeningSequence from './components/OpeningSequence';
import ProfileSelector from './components/ProfileSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContinueWatching from './components/ContinueWatching';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import TopPicks from './components/TopPicks';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeViewer';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

// Load overlays only when required.
const PlayIntro = lazy(() => import('./components/PlayIntro'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

type Stage = 'opening' | 'profiles' | 'home';

const STORAGE_KEY = 'sumit-series-profile';

function readStoredProfile(): ProfileId | null {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY);

    return viewerProfiles.some((profile) => profile.id === value)
      ? (value as ProfileId)
      : null;
  } catch {
    return null;
  }
}

function readProjectFromUrl(): Project | null {
  const projectId = new URLSearchParams(
    window.location.search,
  ).get('project');

  return projectId
    ? projects.find((item) => item.id === projectId) ?? null
    : null;
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

function Series() {
  const stored = readStoredProfile();

  // Always show the signature opening on a fresh portfolio visit.
  // A direct project URL still opens its requested project immediately.
  const [stage, setStage] = useState<Stage>(
    readProjectFromUrl() ? 'home' : 'opening',
  );

  const [profileId, setProfileId] = useState<ProfileId>(
    stored ?? 'sumit',
  );

  const [playing, setPlaying] = useState(false);

  const [project, setProject] = useState<Project | null>(
    () => readProjectFromUrl(),
  );

  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const { scrollTo, lock, unlock } = useSmoothScroll();

  // Indicates that the home page must return to QA Projects.
  const returnToProjectsRef = useRef(false);

  const order = viewerProfiles.find(
    (profile) => profile.id === profileId,
  )!.order;

  // Manage opening/profile screen scroll lock.
  useEffect(() => {
    if (stage === 'home') return;

    lock();

    return unlock;
  }, [stage, lock, unlock]);

  // Profile selection.
  const pickProfile = useCallback(
    (id: ProfileId) => {
      setProfileId(id);

      try {
        sessionStorage.setItem(STORAGE_KEY, id);
      } catch {
        // Profile persistence is optional.
      }

      if (stage !== 'home') {
        scrollTo(0, { offset: 0, immediate: true });
        setStage('home');
      } else {
        const selectedProfile = viewerProfiles.find(
          (profile) => profile.id === id,
        )!;

        setToast(
          `Now watching as ${selectedProfile.name} - ${selectedProfile.blurb.toLowerCase()}`,
        );

        scrollTo(0, { offset: 0, immediate: true });
      }
    },
    [stage, scrollTo],
  );

  // Toast timeout.
  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(
      () => setToast(null),
      3200,
    );

    return () => window.clearTimeout(timeout);
  }, [toast]);

  const closeIntro = useCallback(() => {
    setPlaying(false);
    setStage('profiles');
  }, []);

  // OPEN PROJECT:
  // Reset Lenis before displaying project details.
  const openProject = useCallback(
    (nextProject: Project) => {
      const url = new URL(window.location.href);

      url.searchParams.set('project', nextProject.id);

      window.history.pushState(
        { projectId: nextProject.id },
        '',
        url,
      );

      returnToProjectsRef.current = false;

      scrollTo(0, {
        offset: 0,
        immediate: true,
      });

      setProject(nextProject);
    },
    [scrollTo],
  );

  // SWITCH PROJECT:
  // Replace the current project history entry.
  // Every new project starts from the top.
  const switchProject = useCallback(
    (nextProject: Project) => {
      const url = new URL(window.location.href);

      url.searchParams.set('project', nextProject.id);

      window.history.pushState(
        {
          projectId: null,
          returnToProjects: true,
        },
        '',
        url,
      );

      returnToProjectsRef.current = false;

      scrollTo(0, {
        offset: 0,
        immediate: true,
      });

      setProject(nextProject);
    },
    [scrollTo],
  );

  // CLOSE PROJECT:
  // Restore the portfolio route first.
  // Scrolling happens after React mounts the home page.
  const closeProject = useCallback(() => {
    const url = new URL(window.location.href);

    url.searchParams.delete('project');

    window.history.replaceState(
      {
        projectId: null,
        returnToProjects: true,
      },
      '',
      url,
    );

    returnToProjectsRef.current = true;

    setProject(null);
  }, []);

  // RETURN TO QA PROJECTS:
  // useLayoutEffect runs after the home page has been restored.
  useLayoutEffect(() => {
    if (
      stage !== 'home' ||
      project !== null ||
      !returnToProjectsRef.current
    ) {
      return;
    }

    returnToProjectsRef.current = false;

    let firstFrame = 0;
    let secondFrame = 0;

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        const projectsSection =
          document.getElementById('originals');

        if (!projectsSection) return;

        scrollTo(projectsSection, {
          offset: 0,
          immediate: true,
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [stage, project, scrollTo]);

  // BROWSER BACK / FORWARD:
  useEffect(() => {
    const syncProjectRoute = () => {
      const nextProject = readProjectFromUrl();

      if (nextProject) {
        returnToProjectsRef.current = false;

        scrollTo(0, {
          offset: 0,
          immediate: true,
        });

        setProject(nextProject);
      } else {
        returnToProjectsRef.current = true;

        setProject(null);
      }
    };

    window.addEventListener('popstate', syncProjectRoute);

    return () => {
      window.removeEventListener(
        'popstate',
        syncProjectRoute,
      );
    };
  }, [scrollTo]);

  const closeResume = useCallback(() => {
    setResumeOpen(false);
  }, []);

  // Portfolio sections.
  const sections: Record<SectionId, ReactNode> = {
    about: <About />,
    journey: <Seasons />,
    originals: <Originals onOpen={openProject} />,
    picks: <TopPicks />,
    skills: <Skills />,
    moments: <Achievements />,
    story: <ResumeSection onView={() => setResumeOpen(true)} />,
  };

  return (
    <LayoutGroup>
      <div className="grain" aria-hidden />

      <InteractiveCanvas />
      <CustomCursor />

      {/* OPENING AND PROFILE SELECTION */}
      <AnimatePresence>
        {stage === 'opening' && (
          <OpeningSequence
            key="opening"
            onDone={() => setStage('profiles')}
            onPlay={() => setPlaying(true)}
          />
        )}

        {stage === 'profiles' && (
          <ProfileSelector
            key="profiles"
            onPick={pickProfile}
          />
        )}
      </AnimatePresence>

      {/* MAIN PORTFOLIO */}
      {stage === 'home' && !project && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(10px)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
        >
          <Navbar
            order={order}
            profileId={profileId}
            onSwitch={pickProfile}
          />

          <main>
            <Hero
              key={`hero-${profileId}`}
              onPlay={() => setPlaying(true)}
              onResume={() => setResumeOpen(true)}
              profileId={profileId}
            />

            <ContinueWatching order={order} />

            {order.map((id) => (
              <Scene
                key={id}
                id={id}
                className={
                  id === 'originals'
                    ? '!py-0 sm:!py-0'
                    : ''
                }
              >
                {sections[id]}
              </Scene>
            ))}

            <FinalCTA
              onReplay={() => setStage('opening')}
            />
          </main>
        </motion.div>
      )}

      {/* PROJECT, INTRO AND RESUME OVERLAYS */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {playing && (
            <PlayIntro
              key="intro"
              onClose={closeIntro}
            />
          )}
        </AnimatePresence>

        {project && (
          <ProjectModal
            key={project.id}
            project={project}
            onClose={closeProject}
            onSwitch={switchProject}
          />
        )}

        <AnimatePresence>
          {resumeOpen && (
            <ResumeModal
              key="resume"
              onClose={closeResume}
            />
          )}
        </AnimatePresence>
      </Suspense>

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            className="glass fixed bottom-6 left-1/2 z-[150] w-[min(92vw,420px)] -translate-x-1/2 rounded-xl px-5 py-3 text-center text-sm text-bone"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
