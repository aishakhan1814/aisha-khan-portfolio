import fs from 'fs';

console.log('====================================================');
console.log('   AISHA KHAN PORTFOLIO — PHASE 04 AUDIT SUITE      ');
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
  'src/animations/capabilitiesAnimation.ts',
  'src/components/CustomCursor.tsx',
  'src/components/Navbar.tsx',
  'src/components/Hero.tsx',
  'src/components/OrbitalVisual.tsx',
  'src/components/NarrativeSection.tsx',
  'src/components/ProjectsSection.tsx',
  'src/components/CapabilitiesSection.tsx',
];

for (const file of requiredFiles) {
  assert(fs.existsSync(file), `Required file exists: ${file}`);
}

// 2. CHECK SECTION IDENTIFIER, HEADLINE & COPY
console.log('\n--- 2. TECHNICAL CAPABILITIES INTRODUCTION ---');
const capSource = fs.readFileSync('src/components/CapabilitiesSection.tsx', 'utf-8');
assert(capSource.includes('03 / TECHNICAL CAPABILITIES'), 'Section identifier: 03 / TECHNICAL CAPABILITIES present');
assert(capSource.includes('THE TOOLS BEHIND'), 'Headline part 1: THE TOOLS BEHIND present');
assert(capSource.includes('THE THINKING.'), 'Headline part 2: THE THINKING. present');
assert(
  capSource.includes('A practical engineering toolkit spanning software development, intelligent systems, backend architecture and the infrastructure that brings products to life.'),
  'Supporting copy present verbatim'
);

// 3. VERIFY ALL SPECIFIED TECHNOLOGIES FROM THE PROMPT
console.log('\n--- 3. VERIFIED TECHNOLOGIES INVENTORY AUDIT ---');

// A. Programming languages
assert(capSource.includes("'Python'") || capSource.includes('Python'), 'Programming Language: Python present');
assert(capSource.includes('Java'), 'Programming Language: Java present');
assert(capSource.includes('C++'), 'Programming Language: C++ present');
assert(capSource.includes('JavaScript'), 'Programming Language: JavaScript present');
assert(capSource.includes('SQL'), 'Programming Language: SQL present');

// B. Frontend & application development
assert(capSource.includes('React'), 'Frontend: React present');
assert(capSource.includes('Responsive UI Development'), 'Frontend: Responsive UI Development present');

// C. Backend & API engineering
assert(capSource.includes('Node.js'), 'Backend: Node.js present');
assert(capSource.includes('Express'), 'Backend: Express present');
assert(capSource.includes('FastAPI'), 'Backend: FastAPI present');
assert(capSource.includes('REST API Development'), 'Backend: REST API Development present');

// D. Artificial intelligence and machine learning
assert(capSource.includes('TensorFlow & Keras') || (capSource.includes('TensorFlow') && capSource.includes('Keras')), 'AI/ML: TensorFlow & Keras present');
assert(capSource.includes('Scikit-learn'), 'AI/ML: Scikit-learn present');
assert(capSource.includes('NumPy & Pandas') || (capSource.includes('NumPy') && capSource.includes('Pandas')), 'AI/ML: NumPy & Pandas present');
assert(capSource.includes('PCA (Principal Component Analysis)') || capSource.includes('PCA'), 'AI/ML: PCA present');
assert(capSource.includes('Feature Engineering'), 'AI/ML: Feature Engineering present');
assert(capSource.includes('Machine Learning Pipelines'), 'AI/ML: Machine Learning Pipelines present');
assert(capSource.includes('Retrieval-Augmented Generation (RAG)') || capSource.includes('RAG'), 'AI/ML: RAG present');
assert(capSource.includes('Large Language Model Integration'), 'AI/ML: LLM Integration present');
assert(capSource.includes('LangChain'), 'AI/ML: LangChain present');
assert(capSource.includes('Pinecone'), 'AI/ML: Pinecone present');

// E. Cloud and infrastructure
assert(capSource.includes('AWS Bedrock'), 'Cloud: AWS Bedrock present');
assert(capSource.includes('AWS SageMaker'), 'Cloud: AWS SageMaker present');
assert(capSource.includes('AWS SNS'), 'Cloud: AWS SNS present');
assert(capSource.includes('AWS Step Functions'), 'Cloud: AWS Step Functions present');
assert(capSource.includes('Docker'), 'Cloud: Docker present');
assert(capSource.includes('CI/CD Pipelines') || capSource.includes('CI/CD'), 'Cloud: CI/CD present');

// F. Databases and data systems
assert(capSource.includes('MongoDB'), 'Database: MongoDB present');
assert(capSource.includes('MySQL'), 'Database: MySQL present');
assert(capSource.includes('PostgreSQL'), 'Database: PostgreSQL present');

// G. Developer tools & engineering workflow
assert(capSource.includes('Git & GitHub') || (capSource.includes('Git') && capSource.includes('GitHub')), 'DevTools: Git & GitHub present');
assert(capSource.includes('GitHub Actions'), 'DevTools: GitHub Actions present');
assert(capSource.includes('AST-Based Code Analysis') || capSource.includes('AST'), 'Security/Workflow: AST-based analysis present');
assert(capSource.includes('CycloneDX 1.6 CBOM'), 'Security/Workflow: CycloneDX 1.6 CBOM present');
assert(capSource.includes('Formal Ontology (OWL / RDF)') || capSource.includes('OWL / RDF'), 'Knowledge/Workflow: Formal Ontology present');

// 4. PROJECT EVIDENCE CONNECTIONS
console.log('\n--- 4. DEMONSTRATE SKILLS THROUGH PROJECT EVIDENCE ---');
assert(capSource.includes('SENTRIQ'), 'Project Evidence: SENTRIQ linked');
assert(capSource.includes('RakshAI'), 'Project Evidence: RakshAI linked');
assert(capSource.includes('Cybersecurity Breach Ontology'), 'Project Evidence: Cybersecurity Breach Ontology linked');
assert(capSource.includes('SigmaGPT'), 'Project Evidence: SigmaGPT linked');
assert(capSource.includes('BloodWarriors'), 'Evidence context: BloodWarriors dataset referenced');
assert(capSource.includes('35–45s typical') || capSource.includes('35-45s typical'), 'Evidence context: SENTRIQ scanning duration referenced');
assert(capSource.includes('10 repositories'), 'Evidence context: SENTRIQ 10 repositories referenced');
assert(capSource.includes('~24h to under 4h'), 'Evidence context: RakshAI triage milestone referenced');

// 5. ANTI-PATTERN AVOIDANCE (NO PROGRESS BARS, NO PERCENTAGES, NO FLOATING LOGOS)
console.log('\n--- 5. AVOIDANCE OF GENERIC RESUME ANTI-PATTERNS ---');
assert(!capSource.includes('progress-bar') && !capSource.includes('w-[85%]') && !capSource.includes('w-[90%]'), 'No percentage-based progress bars');
assert(!capSource.includes('star-rating') && !capSource.includes('stars'), 'No star ratings');
assert(!capSource.includes('cdn.jsdelivr.net') && !capSource.includes('devicon'), 'No external third-party logo grids');

// 6. GSAP ANIMATION & ACCESSIBILITY AUDIT
console.log('\n--- 6. GSAP ANIMATION ARCHITECTURE AUDIT ---');
const animSource = fs.readFileSync('src/animations/capabilitiesAnimation.ts', 'utf-8');
assert(animSource.includes('gsap.registerPlugin(ScrollTrigger)'), 'ScrollTrigger registered in capabilitiesAnimation');
assert(animSource.includes('gsap.matchMedia()'), 'gsap.matchMedia implemented');
assert(animSource.includes('prefers-reduced-motion'), 'prefers-reduced-motion handled');
assert(animSource.includes('#capabilities-header'), 'Header animated via ScrollTrigger');
assert(animSource.includes('#capabilities-workbench'), 'Workbench animated via ScrollTrigger');
assert(animSource.includes('#phase05-bridge'), 'Phase 05 Bridge animated via ScrollTrigger');
assert(animSource.includes('mm.revert()'), 'Master matchMedia reverted on cleanup');

// 7. SCOPE BOUNDARIES & CONTINUOUS BRIDGE
console.log('\n--- 7. STRICT SCOPE BOUNDARIES & BRIDGE ---');
const appSource = fs.readFileSync('src/App.tsx', 'utf-8');
assert(!appSource.includes('SkillsSection'), 'No SkillsSection duplicate');
assert(!appSource.includes('ExperienceSection'), 'No ExperienceSection (Phase 05 boundary respected)');
assert(!appSource.includes('AchievementsSection'), 'No AchievementsSection (Phase 05 boundary respected)');
assert(!appSource.includes('ContactSection') && !appSource.includes('Footer'), 'No Contact / Footer implemented (Phase 06 boundary respected)');
assert(capSource.includes('id="phase05-bridge"'), 'Phase 05 bridge teaser present with id="phase05-bridge"');
assert(capSource.includes('04 / BEYOND THE CODE'), 'Phase 05 bridge label: 04 / BEYOND THE CODE present');
assert(capSource.includes('IMPACT, LEADERSHIP &amp; COMMUNITY.') || capSource.includes('IMPACT, LEADERSHIP & COMMUNITY.'), 'Phase 05 bridge headline present');

// 8. PRODUCTION BUILD INTEGRITY
console.log('\n--- 8. PRODUCTION BUILD INTEGRITY ---');
assert(fs.existsSync('dist/index.html'), 'dist/index.html exists');
const distHtml = fs.readFileSync('dist/index.html', 'utf-8');
assert(distHtml.includes('Aisha Khan'), 'Built HTML contains Aisha Khan');

console.log('\n====================================================');
console.log(`AUDIT COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

process.exit(failCount === 0 ? 0 : 1);
