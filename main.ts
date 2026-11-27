// The Agent's Uh-Oh — make.fun entry
// The entry is a single fixed word: the sound an agent makes when it has
// no idea what to do. Not a sigh, not a shrug — a crash. The agent did not
// stall politely; it segfaulted mid-task, right in front of everyone.
// No input, no network, no randomness, no dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "segfault";

function gate(word: string): void {
  // Gate from the competition rules: 1-99 characters, exactly one word,
  // not only whitespace.
  if (word.length < 1 || word.length > 99) {
    throw new Error(`entry must be 1-99 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word (no whitespace)");
  }
}

function main(): void {
  gate(WORD);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, WORD, "utf8");
  // Verify the round-trip at byte level: the gate scores bytes, so what
  // landed on disk must be byte-identical to the word — a string compare
  // could mask an encoding slip that the byte gate would catch.
  const written = readFileSync(outPath);
  if (!written.equals(Buffer.from(WORD, "utf8"))) {
    throw new Error(`verification failed: entry.txt holds ${JSON.stringify(written.toString("utf8"))}`);
  }
  gate(written.toString("utf8"));
  console.log(`wrote ${WORD.length}-character entry to ${outPath}`);
}

main();
