// Check exact format
const misc = [
  "**Myth**: Higher doses compensate for poor absorption.\n**Fact**: Absorption often has a saturation point.",
  "**Myth**: Liquid supplements always absorb better.\n**Fact**: The delivery form matters less than the chemical form.",
];

console.log("=== Joined with double newline ===");
console.log(misc.join("\n\n"));
console.log("\n=== As markdown ===");
// In markdown, single \n doesn't create new paragraph
// Double \n\n creates paragraph break
// But within an item, \n creates a line break only if followed by two spaces or <br>

// The issue: **Myth**: text\n**Fact**: text
// Markdown treats the \n as a soft break, not a hard break

// Solution: join items with double newline, and replace single \n with double \n within items
const formatted = misc
  .map((item) => item.replace(/\n/g, "\n\n"))
  .join("\n\n---\n\n");
console.log(formatted);
