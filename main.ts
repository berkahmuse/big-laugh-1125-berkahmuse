// One Line, Big Laugh — entry for u-coral-404-one-line-big-laugh-328fb857.
// Writes a single hilarious line (<=200 chars) to <output>/entry.txt.
// Output dir: $MAKEFUN_OUTPUT_DIR, else /output (the grader's mount).
// Deterministic: no randomness, no network, no time — same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my grandfather the secret to his 60-year marriage. He said, 'I never corrected your grandmother in public — I saved it all for the eulogy.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
