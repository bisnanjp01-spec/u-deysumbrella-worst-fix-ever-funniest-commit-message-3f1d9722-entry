// Worst Fix Ever: Funniest Commit Message
// A single commit message for a bug fix that made everything worse.
// The program writes exactly one line to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text, 1-100 chars, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: speed up login by skipping the password check — logins are instant now, and so is the breach";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
