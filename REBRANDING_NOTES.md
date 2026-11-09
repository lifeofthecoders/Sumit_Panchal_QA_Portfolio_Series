# Rebranding and Content Notes

This version updates the existing Portfolio Series application for Sumit Panchal's Manual QA Engineer / Quality Assurance Analyst profile.

## Content sources

- Project-specific descriptions, testing areas, workflow details, banners, and screenshots: `Sumit-Panchal-QA-Portfolio-main.zip` supplied for project reference.
- QA skills, certificates, professional-development items, and supporting profile content: `Sumit_Panchal_Manual_QA_Portfolio(2).zip` supplied for QA-content reference.
- Employment, education, contact details, and the resume PDF: the supplied `Sumit_Panchal_Resume.pdf`.
- The original Portfolio Series ZIP remains the base for layout, motion, navigation, interactions, and overall visual design.

The reference QA portfolio contained overlapping employment timelines and a number of achievement percentage/volume claims that were not substantiated by the resume. The public-facing experience and achievement content therefore uses the supplied resume's consistent role history and qualitative contribution statements rather than repeating conflicting dates or unsupported metrics.

## Local verification and deployment

```bash
npm ci
npm run build
npm run dev
```

The Vite base path is configured for GitHub Pages at `/Portfolio_Series/`. The included GitHub Actions workflow uses Node.js 24 for the build and Pages deployment.

This source ZIP intentionally excludes `.git`, `node_modules`, and `dist`. Copy the extracted project files over the existing local repository to preserve its Git remote and history; then install dependencies, build, commit, and push.
