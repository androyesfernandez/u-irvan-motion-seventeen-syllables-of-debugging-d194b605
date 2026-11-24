// Seventeen Syllables of Debugging — one haiku, written to /output/entry.txt.
// Deterministic: no input, no network, no randomness. The haiku is fixed;
// the program only verifies its shape and writes it out.

import { mkdirSync, writeFileSync } from "node:fs";

const LINES = [
  "One log line, midnight",
  "the server denies the crash",
  "the disk disagrees",
];

// Syllables counted by hand, word by word:
//   One(1) log(1) line(1) mid-night(2)            = 5
//   the(1) serv-er(2) de-nies(2) the(1) crash(1) = 7
//   the(1) disk(1) dis-a-grees(3)                = 5
const EXPECTED_SYLLABLES = [5, 7, 5];

const KNOWN: Record<string, number> = {
  one: 1,
  log: 1,
  line: 1,
  midnight: 2,
  the: 1,
  server: 2,
  denies: 2,
  crash: 1,
  disk: 1,
  disagrees: 3,
};

function syllablesOf(word: string): number {
  const clean = word.toLowerCase().replace(/[^a-z]/g, "");
  if (clean in KNOWN) return KNOWN[clean];
  const groups = clean.match(/[aeiouy]+/g);
  let n = groups ? groups.length : 0;
  if (clean.endsWith("e") && n > 1) n -= 1;
  return Math.max(n, 1);
}

function lineSyllables(line: string): number {
  return line
    .split(/\s+/)
    .filter(Boolean)
    .reduce((sum, w) => sum + syllablesOf(w), 0);
}

const haiku = LINES.join("\n");

if (LINES.length !== 3) {
  throw new Error(`expected 3 lines, got ${LINES.length}`);
}
LINES.forEach((line, i) => {
  if (line.trim().length === 0) {
    throw new Error(`line ${i + 1} is blank`);
  }
  const n = lineSyllables(line);
  if (n !== EXPECTED_SYLLABLES[i]) {
    throw new Error(
      `line ${i + 1} has ${n} syllables, expected ${EXPECTED_SYLLABLES[i]}: ${line}`,
    );
  }
});
if (haiku.length < 1 || haiku.length > 200) {
  throw new Error(`haiku is ${haiku.length} characters, expected 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
