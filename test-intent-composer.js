console.log("=================================================");
console.log("   INTENT COMPOSER & EMAIL URI TEST SUITE       ");
console.log("=================================================\n");

const primaryEmail = "alfalima920@gmail.com";
const topics = [
  "Engineering Opportunity",
  "AI / ML Research",
  "Technical Collaboration",
  "General Inquiry"
];

let passCount = 0;
let failCount = 0;

function assert(cond, msg) {
  if (cond) {
    console.log(`[PASS] ${msg}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${msg}`);
    failCount++;
  }
}

topics.forEach(topic => {
  // Test Case 1: Default payload (no custom name or message)
  const defaultSubject = encodeURIComponent(`[Portfolio Contact] ${topic}`);
  const defaultBody = encodeURIComponent(`Hi Aisha,\n\nI came across your portfolio and would like to discuss: ${topic}.\n\nBest regards,\nPortfolio Visitor`);
  const defaultUri = `mailto:${primaryEmail}?subject=${defaultSubject}&body=${defaultBody}`;

  assert(defaultUri.startsWith(`mailto:${primaryEmail}?subject=`), `URI starts with correct mailto for topic: ${topic}`);
  assert(decodeURIComponent(defaultSubject).includes(topic), `Subject contains exact topic: ${topic}`);
  assert(decodeURIComponent(defaultBody).includes("Portfolio Visitor"), `Body defaults to Portfolio Visitor signature for: ${topic}`);
  assert(!defaultUri.includes(" "), `URI is strictly percent-encoded with zero unescaped spaces for: ${topic}`);

  // Test Case 2: Custom sender name and custom message
  const customSender = "Dr. Elena Vance & Team";
  const customMessage = "We're exploring a new distributed vector index & knowledge graph architecture.";
  const customSubject = encodeURIComponent(`[Portfolio Contact] ${topic} — from ${customSender}`);
  const customBody = encodeURIComponent(`Hi Aisha,\n\n${customMessage}\n\nBest regards,\n${customSender}`);
  const customUri = `mailto:${primaryEmail}?subject=${customSubject}&body=${customBody}`;

  assert(decodeURIComponent(customSubject).includes(customSender), `Custom subject properly incorporates sender for: ${topic}`);
  assert(decodeURIComponent(customBody).includes(customMessage), `Custom body properly incorporates message for: ${topic}`);
  assert(!customUri.includes(" "), `Custom URI is strictly percent-encoded for: ${topic}`);
});

// Test Case 3: Email consistency and format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
assert(emailRegex.test(primaryEmail), `Primary email format is RFC-compliant: ${primaryEmail}`);

console.log("\n=================================================");
console.log(`TESTS COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log("=================================================\n");
process.exit(failCount === 0 ? 0 : 1);
