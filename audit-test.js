import fs from 'fs';

console.log('====================================================');
console.log('   AISHA KHAN PORTFOLIO — PHASE 03 AUDIT SUITE      ');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. FILE STRUCTURE & EXPORT INTEGRITY
console.log('--- 1. FILE STRUCTURE & EXPORT INTEGRITY ---');
const requiredFiles = [
  'index.html',
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'tailwind.config.js',
  'src/index.css',
  'src/main.tsx',
  'src/App.tsx',
  'src/hooks/useLenis.ts',
  'src/animations/heroAnimation.ts',
  'src/animations/narrativeAnimation.ts',
  'src/animations/projectsAnimation.ts',
  'src/components/CustomCursor.tsx',
  'src/components/Navbar.tsx',
  'src/components/Hero.tsx',
  'src/components/OrbitalVisual.tsx',
  'src/components/NarrativeSection.tsx',
  'src/components/ProjectsSection.tsx',
];

for (const file of requiredFiles) {
  assert(fs.existsSync(file), `Required file exists: ${file}`);
}

// 2. CHECK PROJECTS SECTION INTRODUCTION
console.log('\n--- 2. SELECTED WORKS INTRODUCTION AUDIT ---');
const projSource = fs.readFileSync('src/components/ProjectsSection.tsx', 'utf-8');
assert(projSource.includes('02 / SELECTED WORKS'), 'Section label 02 / SELECTED WORKS present');
assert(projSource.includes('ENGINEERED TO SOLVE.'), 'Headline line 1: ENGINEERED TO SOLVE. present');
assert(projSource.includes('BUILT TO WORK.'), 'Headline line 2: BUILT TO WORK. present');
assert(
  projSource.includes("A selection of systems I've helped design, build and bring to life — from intelligent applications to security-focused engineering."),
  'Supporting copy present verbatim'
);

// 3. PROJECT 01: SENTRIQ AUDIT
console.log('\n--- 3. PROJECT 01 — SENTRIQ AUDIT ---');
assert(projSource.includes('SENTRIQ'), 'Project title SENTRIQ present');
assert(projSource.includes('POST-QUANTUM SECURITY / SOFTWARE ENGINEERING'), 'Category present');
assert(
  projSource.includes('A cryptographic inventory and quantum-risk analysis platform designed to help organisations understand their cryptographic exposure and plan post-quantum migration.'),
  'Description present verbatim'
);
assert(projSource.includes('MOSCA MODEL THEOREM') || projSource.includes('X + Y &gt; Z') || projSource.includes('Mosca-Model Analysis Module'), 'Mosca model present');
assert(projSource.includes('QUANTS RISK SCORE') || projSource.includes('QUANTS Risk Scoring Module'), 'QUANTS risk score present');
assert(projSource.includes('DUAL RISK METRIC DISTINCTION'), 'Distinction between Mosca Model and QUANTS explained');
assert(projSource.includes('CycloneDX 1.6'), 'CycloneDX 1.6 CBOM referenced');
assert(projSource.includes('NIST PQC'), 'NIST post-quantum cryptography standards referenced');
assert(projSource.includes('35–45s') || projSource.includes('35-45s'), '35-45s typical scan time documented');
assert(projSource.includes('~60s'), 'Max ~60s scan time documented');
assert(projSource.includes('10 repositories') || projSource.includes('10 distinct repositories'), 'Tested on 10 repositories documented');
assert(projSource.includes('human review') || projSource.includes('human cryptographic review'), 'Novel patterns flagged for human review documented');

// 4. PROJECT 02: RAKSHAI AUDIT
console.log('\n--- 4. PROJECT 02 — RAKSHAI AUDIT ---');
assert(projSource.includes('RakshAI'), 'Project title RakshAI present');
assert(projSource.includes('AI / MACHINE LEARNING / CLOUD ENGINEERING'), 'Category present');
assert(
  projSource.includes('An AI-powered blood intelligence and care coordination system designed to improve the process of connecting blood requirements with available resources.'),
  'Description present verbatim'
);
assert(projSource.includes('BloodWarriors (~7,000 rows)') || projSource.includes('7,000'), 'BloodWarriors ~7,000 rows documented');
assert(projSource.includes('~24 hrs → under 4 hrs') || projSource.includes('under 4 hours'), 'Turnaround improved from 24h to under 4h documented');
assert(projSource.includes('3–4 formal checks') || projSource.includes('3 to 4'), 'Evaluated using 3-4 checks documented');
assert(projSource.includes('Pinecone'), 'Pinecone vector database in stack');
assert(projSource.includes('AWS Bedrock'), 'AWS Bedrock in stack');
assert(projSource.includes('AWS Step Functions'), 'AWS Step Functions in stack');

// 5. PROJECT 03: CYBERSECURITY BREACH ONTOLOGY AUDIT
console.log('\n--- 5. PROJECT 03 — CYBERSECURITY BREACH ONTOLOGY AUDIT ---');
assert(projSource.includes('Cybersecurity Breach Ontology'), 'Project title Cybersecurity Breach Ontology present');
assert(projSource.includes('ONTOLOGY ENGINEERING / CYBERSECURITY / KNOWLEDGE REPRESENTATION'), 'Category present');
assert(
  projSource.includes('A cybersecurity ontology designed to represent breach relationships, persistence artefacts and attack paths, helping connect AI-driven security decisions with remediation reasoning.'),
  'Description present verbatim'
);
assert(projSource.includes('13') && projSource.includes('ENTITY TYPES'), '13 entity types documented');
assert(projSource.includes('15') && projSource.includes('RELATIONSHIPS'), '15 relationships documented');
assert(projSource.includes('38') && projSource.includes('PROPERTIES'), '38 properties documented');
assert(projSource.includes('Microsoft Ontology Hackathon'), 'Microsoft Ontology Hackathon context documented');
assert(projSource.includes('Top 10'), 'Top 10 placement documented');
assert(projSource.includes('Two attack scenarios') || projSource.includes('two attack scenarios'), 'Two attack scenarios modeled documented');
assert(projSource.includes('not validated against live production telemetry') || projSource.includes('not validated against real-world incidents'), 'Limitations explicitly documented');

// 6. PROJECT 04: SIGMAGPT AUDIT
console.log('\n--- 6. PROJECT 04 — SIGMAGPT AUDIT ---');
assert(projSource.includes('SigmaGPT'), 'Project title SigmaGPT present');
assert(projSource.includes('FULL-STACK DEVELOPMENT / GENERATIVE AI'), 'Category present');
assert(
  projSource.includes('A ChatGPT-style conversational application built to explore full-stack AI product development and persistent conversational experiences.'),
  'Description present verbatim'
);
assert(projSource.includes('DEPLOYED APP') || projSource.includes('Deployed application'), 'Deployed status confirmed');
assert(projSource.includes('Persistent Conversation History'), 'Persistent history documented');
assert(projSource.includes('Multiple Thread Switching') || projSource.includes('Multiple conversation'), 'Multiple conversations documented');

// 7. ANIMATIONS & LIFECYCLE AUDIT
console.log('\n--- 7. GSAP ANIMATION ARCHITECTURE AUDIT ---');
const animSource = fs.readFileSync('src/animations/projectsAnimation.ts', 'utf-8');
assert(animSource.includes('gsap.registerPlugin(ScrollTrigger)'), 'ScrollTrigger registered in projectsAnimation');
assert(animSource.includes('gsap.matchMedia()'), 'gsap.matchMedia implemented');
assert(animSource.includes('prefers-reduced-motion'), 'prefers-reduced-motion handled');
assert(animSource.includes('project-sentriq'), 'SENTRIQ animated via ScrollTrigger');
assert(animSource.includes('project-rakshai'), 'RakshAI animated via ScrollTrigger');
assert(animSource.includes('project-ontology'), 'Ontology animated via ScrollTrigger');
assert(animSource.includes('project-sigmagpt'), 'SigmaGPT animated via ScrollTrigger');
assert(animSource.includes('mm.revert()'), 'Master matchMedia reverted on cleanup');

// 8. SCOPE & BOUNDARIES (NO PHASE 04 / EXTRANEOUS CONTENT)
console.log('\n--- 8. SCOPE BOUNDARIES AUDIT ---');
const appSource = fs.readFileSync('src/App.tsx', 'utf-8');
assert(!appSource.includes('SkillsSection'), 'No SkillsSection implemented (out of scope)');
assert(!appSource.includes('ExperienceSection'), 'No ExperienceSection implemented (out of scope)');
assert(!appSource.includes('AchievementsSection'), 'No AchievementsSection implemented (out of scope)');
assert(!appSource.includes('Footer'), 'No Footer implemented (out of scope)');

// 9. PRODUCTION BUILD AUDIT
console.log('\n--- 9. PRODUCTION BUILD AUDIT ---');
assert(fs.existsSync('dist/index.html'), 'dist/index.html built');
const distHtml = fs.readFileSync('dist/index.html', 'utf-8');
assert(distHtml.includes('Aisha Khan'), 'Built HTML contains Aisha Khan');

console.log('\n====================================================');
console.log(`AUDIT COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

process.exit(failCount === 0 ? 0 : 1);
