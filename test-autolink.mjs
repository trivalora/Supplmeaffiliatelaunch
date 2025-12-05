const testText =
  "This is empirical evidence and anecdotal evidence with clinical significance from peer-reviewed studies. Also mentions third-party testing and vitamin deficiency.";

// Sample terms from GLOSSARY_TERMS
const terms = [
  {
    key: "empiricalevidence",
    terms: ["Empirical Evidence", "empirical evidence", "empirical-evidence"],
  },
  {
    key: "anecdotalevidence",
    terms: ["Anecdotal Evidence", "anecdotal evidence", "anecdotal-evidence"],
  },
  {
    key: "clinicalsignificance",
    terms: [
      "Clinical Significance",
      "clinical significance",
      "clinical-significance",
    ],
  },
  { key: "peerreviewed", terms: ["Peer-reviewed", "peer-reviewed"] },
  {
    key: "thirdpartytesting",
    terms: [
      "Third-Party Testing",
      "third-party testing",
      "third-party-testing",
    ],
  },
  {
    key: "vitamindeficiency",
    terms: ["Vitamin Deficiency", "vitamin deficiency", "vitamin-deficiency"],
  },
];

const allTerms = terms
  .flatMap(({ key, terms }) =>
    terms.map((term) => ({
      key,
      term,
      length: term.length,
      isAbbreviation: /^[A-Z]{2,6}$/.test(term),
    }))
  )
  .sort((a, b) => b.length - a.length);

const regularTerms = allTerms.filter((t) => !t.isAbbreviation);
const regularPattern = regularTerms
  .map(({ term }) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  .join("|");

const regex = new RegExp(`\\b(${regularPattern})\\b`, "gi");
const matches = testText.match(regex);

console.log("Test text:", testText);
console.log("\nMatches found:", matches);
console.log("\nExpected: 6 matches");
console.log("- empirical evidence");
console.log("- anecdotal evidence");
console.log("- clinical significance");
console.log("- peer-reviewed");
console.log("- third-party testing");
console.log("- vitamin deficiency");
