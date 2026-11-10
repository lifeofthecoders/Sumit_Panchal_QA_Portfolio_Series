/**
 * Central portfolio data for Sumit Panchal's Manual QA Engineer portfolio.
 * Professional facts are grounded in the supplied resume and QA reference portfolio.
 * Project-specific testing scope and images come from the supplied project reference archive.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  fullName: 'Sumit Panchal',
  displayName: 'Sumit Panchal',
  firstName: 'SUMIT PANCHAL',
  seriesTag: 'THE QA SERIES',
  originalLabel: 'A PANCHAL QUALITY ORIGINAL',
  role: 'Manual QA Engineer | Quality Assurance Analyst',
  tagline: ['Manual QA Engineer', 'Functional & Regression Testing', 'Test Design & Defect Analysis'],
  intro: 'Manual QA Engineer with 5+ years of experience validating web and mobile applications. Focused on understanding requirements, designing structured test scenarios, exercising critical user journeys, identifying reproducible defects, and supporting reliable releases through risk-based testing and careful verification.',
  location: 'Ahmedabad, Gujarat, India',
  email: 'sumitpanchal5225@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sumit-panchal-b790a8236/',
    github: 'https://github.com/lifeofthecoders',
  },
  resumePdf: asset('resume/Sumit_Panchal_Resume.pdf'),
  portrait: {
    src: asset('assets/portrait-720.webp'),
    srcSet: `${asset('assets/portrait-720.webp')} 720w, ${asset('assets/portrait-1100.webp')} 1100w`,
    alt: 'Sumit Panchal wearing a light blue suit and glasses.',
  },
  interests: ['Software Quality', 'User-Centered Testing', 'Test Strategy & Coverage'],
};

export const education = [
  {
    school: 'Silver Oak University',
    place: 'Ahmedabad, Gujarat',
    degree: 'Bachelor of Engineering - Electronics & Communication Engineering',
    period: '2014 - 2018',
    score: 'CGPA 7.48',
  },
  {
    school: 'Atul Polytechnic',
    place: 'Gujarat, India',
    degree: 'Diploma of Engineering - Electronics & Communication Engineering',
    period: '2011 - 2014',
    score: 'CPI 7.74',
  },
];

export const experience = [
  {
    company: 'Echo Innovate IT',
    role: 'Quality Assurance Analyst',
    place: 'Manual QA · Web & Mobile Applications',
    period: 'June 2021 - Present',
    points: [
      'Tested web and mobile application functionality, usability, and cross-platform compatibility.',
      'Created and maintained test plans, test cases, test scenarios, and test data based on requirement analysis.',
      'Clarified requirements and translated business expectations into practical validation coverage.',
      'Tracked and documented defects in Jira, including clear reproduction steps, severity, priority, and verification notes.',
      'Maintained test documentation, test data, and traceability using Microsoft Excel.',
      'Performed risk-based testing, retesting, regression testing, and release-focused validation.',
    ],
  },
];

export type ProjectGalleryImage = { src: string; alt: string; caption: string };
export type Project = {
  id: string;
  title: string;
  genre: string;
  logline: string;
  overview: string;
  role: string;
  platforms: string[];
  image: string;
  bannerImage: string;
  gallery: ProjectGalleryImage[];
  testingAreas: string[];
  build: string[];
  features: string[];
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const projectAsset = (name: string) => asset(`project/${name}`);

export const projects: Project[] = [
  {
    id: 'lymuv',
    title: 'LYMÜV - Taxi Booking Application',
    genre: 'Transportation · Ride-Hailing QA',
    logline: 'Manual QA coverage for a real-time taxi booking platform spanning ride requests, driver assignment, payments, live tracking, and administrative workflows.',
    overview: 'A real-time taxi booking platform with live trip tracking, digital payments, wallet functionality, promotions, ratings, invoicing, and admin workflows.',
    role: 'Project Manager & Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-lymuv-qa.jpg'),
    bannerImage: projectAsset('project-lymuv-banner.jpg'),
    gallery: [
      { src: projectAsset('project-lymuv-detail-1.jpg'), alt: 'LYMÜV pickup and route selection screens', caption: 'Pickup and destination selection with ride options' },
      { src: projectAsset('project-lymuv-detail-2.jpg'), alt: 'LYMÜV live trip and payment screens', caption: 'Live tracking, driver details, and payment summary' },
      { src: projectAsset('project-lymuv-qa-gallery.jpg'), alt: 'LYMÜV ride booking and trip management overview', caption: 'Ride booking and trip-management platform overview' },
    ],
    testingAreas: ['Ride Booking Flow', 'Driver Assignment', 'Payment & Wallet', 'Notifications', 'Reports', 'Admin Panel'],
    build: [
      'Performed end-to-end validation of ride-booking workflows, including pickup and destination selection and ride options.',
      'Validated driver assignment behavior and live trip tracking details.',
      'Tested payment gateway and wallet flows, plus payment summaries and invoicing touchpoints.',
      'Verified notifications, reports, and administrative workflows.',
    ],
    features: ['Ride requests and booking lifecycle', 'Driver assignment and trip tracking', 'Digital payments and wallet', 'Promotions, ratings, and invoices', 'Admin reporting and management'],
    palette: { from: '#07182a', via: '#174a72', to: '#07090e', accent: '#4ea7ff' },
    motif: 'flow',
  },
  {
    id: 'dap-me',
    title: 'Dap Me - Professional Networking Application',
    genre: 'Professional Networking · Social QA',
    logline: 'QA coverage across account access, professional profiles, discovery, connection requests, messaging, subscriptions, and moderation.',
    overview: 'A React Native professional networking app for discovering and connecting with people, sharing professional profiles, chatting in real time, and managing professional interactions, notifications, privacy settings, and admin moderation.',
    role: 'Project Manager & Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-dap-me-qa.jpg'),
    bannerImage: projectAsset('project-dap-me-banner.jpg'),
    gallery: [
      { src: projectAsset('project-dap-me-detail-1.jpg'), alt: 'Dap Me discovery and saved-filter screens', caption: 'Professional discovery, location-based search, and saved filters' },
      { src: projectAsset('project-dap-me-detail-2.jpg'), alt: 'Dap Me profile, messaging, and connection screens', caption: 'Professional profiles, messaging, and connection requests' },
      { src: projectAsset('project-dap-me-qa-gallery.jpg'), alt: 'Dap Me professional networking overview', caption: 'Mobile networking and professional discovery overview' },
    ],
    testingAreas: ['Registration & Login', 'User Profiles', 'Connections & Networking', 'Chat & Messaging', 'Notifications', 'Search & Discovery', 'Privacy & Account Settings', 'Admin Panel'],
    build: [
      'Validated authentication and login flows, profile management, and user data handling.',
      'Verified connection requests, professional discovery, chat, and messaging workflows.',
      'Tested subscription and payment touchpoints and related account behavior.',
      'Reviewed notification, privacy, account settings, and admin moderation workflows.',
    ],
    features: ['Registration and secure login', 'Profile creation and management', 'Professional discovery and connection requests', 'Real-time chat and notifications', 'Privacy settings and admin moderation'],
    palette: { from: '#06231b', via: '#0c7655', to: '#070a0b', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'kinzwin',
    title: 'Kinzwin - Multiplayer Gaming Platform',
    genre: 'Gaming · Multiplayer QA',
    logline: 'Manual testing of gameplay, scoring, multiplayer synchronization, chat, leaderboards, fair-play behavior, and admin controls.',
    overview: 'A competitive multiplayer gaming platform offering casual and skill-based games, social engagement, and real-time competition.',
    role: 'Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-kinzwin-qa.jpg'),
    bannerImage: projectAsset('project-kinzwin-banner.jpg'),
    gallery: [
      { src: projectAsset('project-kinzwin-detail-1.jpg'), alt: 'Kinzwin multiplayer game room', caption: 'Live game board, player status, and turn flow' },
      { src: projectAsset('project-kinzwin-detail-2.jpg'), alt: 'Kinzwin tournament results and fair-play screens', caption: 'Tournament leaderboard, results, and fair-play checks' },
      { src: projectAsset('project-kinzwin-qa-gallery.jpg'), alt: 'Kinzwin multiplayer gaming overview', caption: 'Multiplayer gaming and tournament overview' },
    ],
    testingAreas: ['Gameplay', 'Scoring', 'Multiplayer Synchronization', 'Chat', 'Leaderboards', 'Fair Play', 'Admin Panel'],
    build: [
      'Validated core gameplay flows, scoring behavior, and player turn progression.',
      'Tested multiplayer synchronization and player-state consistency during live sessions.',
      'Verified chat functionality, leaderboard results, and fair-play scenarios.',
      'Covered related administrative workflows and release-focused regression areas.',
    ],
    features: ['Casual and skill-based games', 'Multiplayer sessions and synchronization', 'Scoring and leaderboard results', 'Chat and social engagement', 'Fair-play and admin workflows'],
    palette: { from: '#1e0a23', via: '#56245f', to: '#08070c', accent: '#c78cff' },
    motif: 'shield',
  },
  {
    id: 'bunny-books',
    title: 'Bunny Books - Photo Book E-Commerce Application',
    genre: 'E-Commerce · Photo Printing QA',
    logline: 'Testing photo uploads, album creation, design previews, shopping cart, checkout, payments, notifications, and order tracking.',
    overview: 'A photo-book ordering platform that lets users create and order printed photo books through a guided creation flow, with checkout and delivery tracking.',
    role: 'Project Manager & Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-bunny-books-qa.jpg'),
    bannerImage: projectAsset('project-bunny-books-banner.jpg'),
    gallery: [
      { src: projectAsset('project-bunny-books-detail-1.jpg'), alt: 'Bunny Books photo-book studio screens', caption: 'Photo upload, page layouts, and album preview' },
      { src: projectAsset('project-bunny-books-detail-2.jpg'), alt: 'Bunny Books checkout and tracking screens', caption: 'Checkout flow and order delivery status' },
      { src: projectAsset('project-bunny-books-qa-gallery.jpg'), alt: 'Bunny Books photo-book creation overview', caption: 'Photo-book creation and ordering overview' },
    ],
    testingAreas: ['Photo Upload', 'Album Creation', 'Design Preview', 'Cart & Checkout', 'Payment Processing', 'Delivery Tracking', 'Notifications', 'Admin Management'],
    build: [
      'Tested photo upload and album creation, including the design and preview journey.',
      'Validated cart, checkout, and payment-processing workflows.',
      'Verified order management, notifications, and delivery-tracking behavior.',
      'Covered administrative order-management touchpoints.',
    ],
    features: ['Photo upload and album creation', 'Page layout and design preview', 'Cart and checkout', 'Payment processing', 'Order notifications and delivery tracking'],
    palette: { from: '#201207', via: '#82501c', to: '#090807', accent: '#ffc46c' },
    motif: 'flow',
  },
  {
    id: 'health-e',
    title: 'Health-E - Digital Health & Medical Records App',
    genre: 'Healthcare · Digital Health QA',
    logline: 'QA coverage for registration, OTP, ABHA generation, medical records, appointments, reminders, health modules, and role-based administration.',
    overview: 'A digital health locker for managing medical records and health information, ABHA ID creation, appointments, medication reminders, emergency information, pregnancy and paediatric care features, and administrator tools.',
    role: 'Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-health-e-qa.jpg'),
    bannerImage: projectAsset('project-health-e-banner.jpg'),
    gallery: [
      { src: projectAsset('project-health-e-detail-1.jpg'), alt: 'Health-E health records and emergency screens', caption: 'Medical reports, health records, and emergency information' },
      { src: projectAsset('project-health-e-detail-2.jpg'), alt: 'Health-E appointments and ABHA screens', caption: 'Appointments, ABHA Health ID, and medication reminders' },
      { src: projectAsset('project-health-e-qa-gallery.jpg'), alt: 'Health-E digital health records overview', caption: 'Digital health records and appointment workflows' },
    ],
    testingAreas: ['Registration & OTP Verification', 'Profile & Health Information', 'Medical Records & Reports', 'Appointment Scheduling', 'Medication Reminders', 'Emergency Information', 'ABHA Number Generation', 'Pregnancy & Paediatric Care', 'Admin & Role-Based Access'],
    build: [
      'Validated mobile-number registration, OTP entry, and authenticated access.',
      'Checked profile updates, field validation, and consistency of saved health information.',
      'Tested medical-record workflows for viewing, adding, searching, editing, deleting, and sharing records.',
      'Verified appointment booking, modification and cancellation, reminders, and emergency contact information.',
      'Covered ABHA registration, pregnancy and paediatric workflows, and role-based admin access.',
    ],
    features: ['Registration and OTP verification', 'ABHA ID and health profile', 'Medical records and report lifecycle', 'Appointments and medication reminders', 'Emergency, pregnancy, and paediatric care', 'Admin dashboard and role-based access'],
    palette: { from: '#06152a', via: '#164d79', to: '#07090e', accent: '#57c8f0' },
    motif: 'shield',
  },
  {
    id: 'regive',
    title: 'reGive - Community Sharing & Gift Transaction Application',
    genre: 'Community Sharing · Peer-to-Peer QA',
    logline: 'End-to-end QA across item posting, requests, promise and acceptance, handover, pickup, transaction status, ratings, and notifications.',
    overview: 'A community-sharing app where users post items they want to give away, browse articles, send or withdraw requests, and coordinate pickup times through a defined offeror/requester transaction lifecycle.',
    role: 'Project Manager & Manual QA Engineer',
    platforms: ['Android', 'iOS', 'Web Admin'],
    image: projectAsset('project-regive-qa.jpg'),
    bannerImage: projectAsset('project-regive-banner.jpg'),
    gallery: [
      { src: projectAsset('project-regive-detail-1.jpg'), alt: 'reGive item posting and request screens', caption: 'Post item photos and details, set pickup slots, and submit a request' },
      { src: projectAsset('project-regive-detail-2.jpg'), alt: 'reGive promise, handover, pickup, and rating screens', caption: 'Promise acceptance, handover, pickup, conclusion, and ratings' },
      { src: projectAsset('project-regive-qa-gallery.jpg'), alt: 'reGive community gifting overview', caption: 'Community gifting and handover workflow overview' },
    ],
    testingAreas: ['Post & Edit Article', 'Image Upload & Item Details', 'Request & Withdraw Request', 'Promise, Accept & Decline', 'Pickup Scheduling', 'Expiry & Reminder Timing', 'Handover & Pickup', 'Transaction Status', 'Ratings', 'Push & In-App Notifications'],
    build: [
      'Validated article creation and editing, including photos, item details, categories, pickup slots, and address information.',
      'Verified requester flows to submit or withdraw requests and checked expected transaction status changes.',
      'Tested offeror promise selection and requester accept/decline behavior, including multiple-requester scenarios.',
      'Checked time-bound reminders, acceptance expiry, and pickup-slot timing behavior.',
      'Validated handover, pickup, conclusion, role-specific ratings, and notification navigation.',
    ],
    features: ['Article posting and editing', 'Offeror and requester journeys', 'Request and promise lifecycle', 'Pickup scheduling, handover, and conclusion', 'Ratings and in-app/push notifications'],
    palette: { from: '#071e1b', via: '#126451', to: '#070a09', accent: '#50d9ad' },
    motif: 'tenants',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'risk-coverage', title: 'Risk-Based Test Coverage', org: 'TEST PLANNING', detail: 'Improved testing coverage through risk-based prioritization, structured test scenarios, and regression testing.', laurel: 'TEST COVERAGE' },
  { id: 'impact-regression', title: 'Impact-Based Regression', org: 'REGRESSION TESTING', detail: 'Applied impact-based regression testing and developer collaboration to reduce the risk of post-release defects.', laurel: 'RISK REDUCTION' },
  { id: 'exploratory', title: 'Proactive Exploratory Testing', org: 'RELEASE QUALITY', detail: 'Supported release stability through exploratory testing and early identification of high-impact issues.', laurel: 'EARLY DETECTION' },
  { id: 'coordination', title: 'Structured QA Coordination', org: 'TEAM COLLABORATION', detail: 'Contributed to on-time testing commitments through clear documentation, prioritization, and cross-functional coordination.', laurel: 'COLLABORATION' },
  { id: 'defect-reporting', title: 'Detailed Defect Reporting', org: 'DEFECT MANAGEMENT', detail: 'Recognized for detailed defect reporting and thorough test coverage.', laurel: 'CLEAR REPORTING' },
  { id: 'uat-signoff', title: 'UAT & Release Sign-Off Support', org: 'USER ACCEPTANCE TESTING', detail: 'Supported client UAT and release sign-off by validating critical workflows and verifying fixes.', laurel: 'RELEASE READINESS' },

  // Four additional QA contributions

  { id: 'requirement-design', title: 'Requirement-Led Test Design', org: 'REQUIREMENT ANALYSIS', detail: 'Translated business requirements into structured test plans, test scenarios, test cases, and practical test data.', laurel: 'TEST DESIGN' },
  { id: 'cross-platform', title: 'Cross-Platform Validation', org: 'WEB & MOBILE QA', detail: 'Validated application functionality, usability, and compatibility across web browsers and mobile platforms.', laurel: 'PLATFORM QUALITY' },
  { id: 'user-journey', title: 'Critical User Journey Coverage', org: 'END-TO-END VALIDATION', detail: 'Tested essential product workflows across booking, networking, e-commerce, healthcare, gaming, and community applications.', laurel: 'USER EXPERIENCE' },
  { id: 'qa-documentation', title: 'Structured QA Documentation', org: 'TEST DOCUMENTATION', detail: 'Maintained test documentation, test data, execution records, and requirement traceability using Microsoft Excel.', laurel: 'QUALITY RECORDS' },
];

export type Certification = { issuer: string; name: string; link: string; date: string; category: string };
export const certifications: Certification[] = [
  { issuer: "LearnTube.ai", name: "Quality Analyst Assessment Certificate", date: "October 23, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-quality-analyst-assessment-certificate.webp') },
  { issuer: "LearnTube.ai", name: "Automation Testing Assessment Certificate", date: "October 29, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-automation-testing-sumit-certificate.webp') },
  { issuer: "LearnTube.ai", name: "API Integration", date: "October 23, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-api-integration-certificate-of-completion.webp') },
  { issuer: "LearnTube.ai", name: "Component Testing", date: "October 23, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-component-testing-certificate.webp') },
  { issuer: "LearnTube.ai", name: "Frontend Debugging", date: "October 23, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-frontend-debugging-certificate.webp') },
  { issuer: "ISTQB / iSQI", name: "ISTQB Certified Tester – Testing with Generative AI (v1.1)", date: "October 08, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-istqb-generative-ai-certificate.webp') },
  { issuer: "ISTQB • Indian Testing Board", name: "ISTQB Automation Test Engineer", date: "October 1, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-certificate-of-profession-istqb-automation-test-engineer.webp') },
  { issuer: "ISTQB • Indian Testing Board", name: "ISTQB CTFL Certificate of Profession", date: "September 1, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-istqb-ctfl-certificate-of-profession.webp') },
  { issuer: "ISTQB • Indian Testing Board", name: "Foundation Level Certificate in Software Testing", date: "August 1, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-certificate-of-foundation-level-of-software-testing-profession.webp') },
  { issuer: "ISTQB • Sri Lanka Software Testing Board", name: "ISTQB Certified Tester – Foundation Level (Core)", date: "October 21, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-istqb-foundation-level-certificate.webp') },
  { issuer: "ISTQB • Sri Lanka Software Testing Board", name: "ISTQB Certified Tester – Foundation Level Agile Tester", date: "October 15, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-istqb-foundation-level-agile-tester-certificate.webp') },
  { issuer: "LinkedIn Learning", name: "Software Testing: Exploratory Testing", date: "August 22, 2020", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-linkedin-learning-certificate-of-completion.webp') },
  { issuer: "Deloitte • Forage", name: "Quality Assurance Job Simulation", date: "July 22, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-deloitte-quality-assurance-certificate.webp') },
  { issuer: "Tata • Forage", name: "Quality Assurance Job Simulation", date: "July 17, 2026", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-tata-forage-certificate-of-completion.webp') },
  { issuer: "LearnTube.ai", name: "Business Analyst Assessment Certificate", date: "February 13, 2025", category: "QUALITY ASSURANCE", link: asset('certificates/sumit-panchal-business-analyst-assessment-certificate.webp') },
  { issuer: "Microsoft", name: "GitHub Foundations", date: "October 21, 2026", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-microsoft-github-foundations-certificate.webp') },
  { issuer: "Oracle University", name: "Oracle Certified Foundations Associate – Java", date: "May 8, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-oracle-certified-foundations-associate-certificate.webp') },
  { issuer: "Oracle University", name: "Oracle Data Platform 2025 Certified Foundations Associate", date: "September 29, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-oracle-foundations-associate-oracle-dataplatform-certificate.webp') },
  { issuer: "LinkedIn Learning", name: "React Essential Training", date: "October 11, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-react-essential-training-certificate.webp') },
  { issuer: "LinkedIn Learning", name: "Learning Python", date: "October 11, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-linkedin-learning-python-certificates.webp') },
  { issuer: "LinkedIn Learning", name: "Processing Text with Python Essential Training", date: "October 11, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-linkedin-learning-python-essential-certificate.webp') },
  { issuer: "Cisco Networking Academy • JS Institute", name: "Introduction to Data Science", date: "February 21, 2025", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-cisco-networking-academy-certificate.webp') },
  { issuer: "Cisco Networking Academy • Silver Oak University", name: "JavaScript Essentials 1", date: "August 23, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-javascript-essentials-certificate-1.webp') },
  { issuer: "Cisco Networking Academy • Silver Oak University", name: "JavaScript Essentials 2", date: "August 23, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-javascript-essentials-certificate-2.webp') },
  { issuer: "Cisco Networking Academy • Silver Oak University", name: "CSS Essentials", date: "July 19, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-modern-css-essentials-certificate.webp') },
  { issuer: "Cisco Networking Academy • Silver Oak University", name: "HTML Essentials", date: "July 17, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-modern-html-essentials-certificate.webp') },
  { issuer: "C++ Institute • Cisco Networking Academy", name: "CLA: Programming Essentials in C", date: "March 21, 2017", category: "TECHNICAL SKILLS", link: asset('certificates/sumit-panchal-c-programming-achievement-certificate.webp') },
  { issuer: "CampusCrew • Unstop", name: "QuizOff 2026: India's Biggest AI Quiz", date: "July 19, 2026", category: "ACHIEVEMENTS", link: asset('certificates/sumit-panchal-quizoff-2026-certificate-for-sumit-panchal.webp') }
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
const skills = (names: string[]) => names.map((name) => ({ name, mono: name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || 'QA' }));
export const skillCategories: SkillCategory[] = [
  { id: 'manual-testing', title: 'Manual Testing', subtitle: 'Core test execution', skills: skills(['Functional Testing', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'Exploratory Testing', 'Retesting', 'UAT', 'End-to-End Testing', 'Integration Testing', 'System Testing', 'Black-Box Testing']) },
  { id: 'test-design', title: 'Test Design & Documentation', subtitle: 'Requirements into coverage', skills: skills(['Requirement Analysis', 'Test Planning', 'Test Case Design', 'Test Scenarios', 'Test Data Preparation', 'Test Documentation', 'Test Coverage', 'RTM', 'Test Reporting']) },
  { id: 'defect-management', title: 'Defect Management', subtitle: 'Clear, actionable defect lifecycle', skills: skills(['Bug Reporting', 'Defect Lifecycle', 'Severity & Priority', 'Defect Reproduction', 'Retesting & Verification', 'Root Cause Analysis']) },
  { id: 'web-mobile-qa', title: 'Web & Mobile QA', subtitle: 'Product behavior across platforms', skills: skills(['UI Validation', 'Cross-Browser Testing', 'Cross-Platform Testing', 'Responsive Testing', 'Usability Testing', 'Accessibility Testing', 'Compatibility Testing', 'API Testing Concepts', 'Mobile App Testing']) },
  { id: 'qa-methodologies', title: 'QA Methodologies', subtitle: 'Quality throughout delivery', skills: skills(['SDLC', 'STLC', 'Agile / Scrum', 'Risk-Based Testing', 'Positive & Negative Testing', 'Boundary Testing', 'Release Validation']) },
  { id: 'qa-tools', title: 'QA Tools & Technical Exposure', subtitle: 'Testing, investigation, and collaboration', skills: skills(['Jira', 'Microsoft Excel', 'Browser DevTools', 'Postman', 'Git & GitHub', 'BrowserStack', 'Selenium WebDriver', 'Java', 'TestNG', 'Maven', 'REST Assured', 'Jenkins']) },
];

export const skillEvidence: Record<string, string[]> = {
  'Functional Testing': ['LYMÜV', 'Dap Me', 'Health-E', 'reGive'],
  'Regression Testing': ['Release validation', 'Defect-fix verification'],
  'Exploratory Testing': ['Kinzwin', 'Health-E', 'reGive'],
  'Test Case Design': ['Requirement analysis', 'Structured test scenarios'],
  'RTM': ['Requirement traceability'],
  'Bug Reporting': ['Jira', 'Reproducible defect documentation'],
  'Cross-Browser Testing': ['Web and admin workflows'],
  'API Testing Concepts': ['Postman', 'API Integration credential'],
  'Jira': ['Defect tracking and lifecycle management'],
  'Microsoft Excel': ['Test data', 'Test documentation and traceability'],
  'Selenium WebDriver': ['Automation testing learning'],
  'TestNG': ['Automation testing learning'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
export const seasons: Season[] = [
  {
    number: 1, title: 'The Engineering Foundation', period: '2011 – 2018', synopsis: 'Academic foundation in Electronics & Communication Engineering.', episodes: [
      { code: 'S01 E01', title: 'The Diploma', description: 'Diploma of Engineering in Electronics & Communication Engineering at Atul Polytechnic.', tags: ['Diploma', 'Electronics & Communication', 'CPI 7.74'], runtime: '2011 – 2014', palette: amber },
      { code: 'S01 E02', title: 'The Degree', description: 'Bachelor of Engineering in Electronics & Communication Engineering at Silver Oak University.', tags: ['B.E.', 'Electronics & Communication', 'CGPA 7.48'], runtime: '2014 – 2018', palette: violet },
    ]
  },
  {
    number: 2, title: 'The QA Journey', period: 'June 2021 - Present', synopsis: 'Quality assurance work focused on web and mobile functionality, requirements, test design, defect analysis, and release validation.', episodes: [
      { code: 'S02 E01', title: 'Understanding the Product', description: 'Analyzing requirements and clarifying expected behavior before defining test coverage.', tags: ['Requirement Analysis', 'Business Workflows'], runtime: 'QA Practice', palette: ocean },
      { code: 'S02 E02', title: 'Testing with Intent', description: 'Preparing test plans, scenarios, cases, test data, and risk-based validation across application workflows.', tags: ['Test Design', 'Functional QA', 'Risk-Based Testing'], runtime: 'QA Practice', palette: crimson },
      { code: 'S02 E03', title: 'From Defect to Confidence', description: 'Documenting defects in Jira, reproducing issues, verifying fixes, and performing regression testing.', tags: ['Jira', 'Defect Lifecycle', 'Regression'], runtime: 'QA Practice', palette: jade },
    ]
  },
  {
    number: 3, title: 'Products & User Journeys', period: 'Six QA project case studies', synopsis: 'Testing focus across transportation, professional networking, gaming, e-commerce, digital health, and community sharing.', episodes: [
      { code: 'S03 E01', title: 'Mobility & Networking', description: 'LYMÜV ride booking, driver assignment, payments and tracking; Dap Me authentication, profiles, connections and messaging.', tags: ['LYMÜV', 'Dap Me', 'Mobile QA'], runtime: 'Project case studies', palette: ocean },
      { code: 'S03 E02', title: 'Gaming & Commerce', description: 'Kinzwin gameplay, scoring, multiplayer synchronization; Bunny Books photo upload, album creation, checkout and order tracking.', tags: ['Kinzwin', 'Bunny Books', 'Regression'], runtime: 'Project case studies', palette: amber },
      { code: 'S03 E03', title: 'Health & Community', description: 'Health-E registration, ABHA, records and appointments; reGive item requests, transaction lifecycle, handover, pickup and ratings.', tags: ['Health-E', 'reGive', 'End-to-End QA'], runtime: 'Project case studies', palette: jade },
    ]
  },
  {
    number: 4, title: 'The QA Toolkit', period: 'Methods & Tools', synopsis: 'The processes, documentation, and tools used to plan, execute, and communicate testing.', episodes: [
      { code: 'S04 E01', title: 'The Test Plan', description: 'Requirement analysis, test planning, test scenarios, test cases, test data, and traceability.', tags: ['Test Design', 'RTM', 'Documentation'], runtime: 'Core practice', palette: violet },
      { code: 'S04 E02', title: 'The Verification Loop', description: 'Functional, regression, smoke, sanity, exploratory, retesting, and UAT validation.', tags: ['Manual Testing', 'UAT', 'Release Validation'], runtime: 'Core practice', palette: crimson },
      { code: 'S04 E03', title: 'The Toolset', description: 'Jira, Excel, browser developer tools, Postman, Git/GitHub, and additional automation-testing exposure.', tags: ['Jira', 'Excel', 'Postman', 'DevTools'], runtime: 'QA Toolkit', palette: ocean },
    ]
  },
  {
    number: 5, title: 'Learning & Credentials', period: 'Professional development', synopsis: 'Software-testing credentials and technical learning that support a quality-focused practice.', episodes: [
      { code: 'S05 E01', title: 'Software Testing', description: 'ISTQB software-testing credentials and LearnTube.ai QA assessments.', tags: ['ISTQB', 'LearnTube.ai', 'Software Testing'], runtime: 'Certifications', palette: jade },
      { code: 'S05 E02', title: 'Supporting Technical Skills', description: 'Additional learning in API integration, component testing, debugging, GitHub, Java, Python, web technologies, and data.', tags: ['API Integration', 'Debugging', 'Technical Learning'], runtime: 'Certifications', palette: amber },
    ]
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Test Execution', title: 'Functional Testing', detail: 'Validate expected product behavior and business workflows.', palette: crimson },
  { label: 'Regression', title: 'Regression Testing', detail: 'Recheck impacted areas after changes and defect fixes.', palette: ocean },
  { label: 'Test Design', title: 'Test Scenarios', detail: 'Turn requirements into clear, traceable coverage.', palette: violet },
  { label: 'Defect Control', title: 'Bug Reporting', detail: 'Clear steps, expected results, evidence, and reproducibility.', palette: amber },
  { label: 'Exploration', title: 'Exploratory Testing', detail: 'Investigate product behavior beyond scripted paths.', palette: jade },
  { label: 'Risk Focus', title: 'Risk-Based Testing', detail: 'Prioritize critical workflows and potential user impact.', palette: crimson },
  { label: 'Verification', title: 'Retesting', detail: 'Verify fixes and confirm the reported behavior is resolved.', palette: ocean },
  { label: 'Compatibility', title: 'Web & Mobile QA', detail: 'Validate UI, responsiveness, and cross-platform behavior.', palette: violet },
  { label: 'Collaboration', title: 'Jira & QA Reports', detail: 'Support transparent defect tracking and test communication.', palette: amber },
  { label: 'Experience', title: '5+ Years in QA', detail: 'Quality assurance across web and mobile application workflows.', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Profile', title: 'Manual QA Engineer', lines: ['Sumit Panchal · Quality Assurance Analyst', '5+ years of experience in software testing'], chips: ['Web QA', 'Mobile QA'] },
  { kicker: 'Test Design', title: 'Requirements to Coverage', lines: ['Requirement analysis · Test planning · Test scenarios', 'Test cases · Test data · RTM'], chips: ['Test Design', 'Documentation'] },
  { kicker: 'Execution', title: 'Validate the Journey', lines: ['Functional · Regression · Smoke · Sanity', 'Exploratory · Retesting · UAT · End-to-End'], chips: ['Manual Testing', 'Risk-Based QA'] },
  { kicker: 'Defects', title: 'Make Issues Actionable', lines: ['Reproduction steps · Severity & priority', 'Defect lifecycle · Retesting · Root cause analysis'], chips: ['Jira', 'Defect Analysis'] },
  { kicker: 'Projects', title: 'Six QA Case Studies', lines: ['LYMÜV · Dap Me · Kinzwin · Bunny Books', 'Health-E · reGive'], chips: ['Web', 'Mobile', 'Admin'] },
  { kicker: 'Certified', title: `${certifications.length} Credentials`, lines: ['Software testing · QA assessments · API integration', 'ISTQB · LearnTube.ai · Technical learning'], chips: ['Software Quality', 'Continuous Learning'] },
];

export type ProfileId = 'sumit' | 'recruiter' | 'qa' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'sumit', name: 'Sumit', blurb: 'The complete QA portfolio', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Experience, QA skills & resume first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'qa', name: 'QA Team', blurb: 'Testing projects, methods & defect workflows', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Product Team', blurb: 'Product journeys & quality highlights', color: '#ffb547', order: ['journey', 'originals', 'picks', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Profile • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'QA Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'QA Projects', meta: `${projects.length} Project Case Studies`, palette: crimson },
  picks: { nav: 'QA Focus', card: 'QA Focus Areas', meta: '10 Testing Priorities', palette: jade },
  skills: { nav: 'Skills', card: 'QA Skills', meta: `${skillCategories.length} Skill Categories`, palette: ocean },
  moments: { nav: 'Credentials', card: 'QA Highlights', meta: `${achievements.length} Contributions • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'Resume', meta: 'Resume • View & download', palette: violet },
};
