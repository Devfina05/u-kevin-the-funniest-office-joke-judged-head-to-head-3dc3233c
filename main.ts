// The Funniest Office Joke entry (Node 22, standard library only):
// writes one short line about office life, at most 200 characters,
// to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: "open-plan" is translated from corporate speak into its real
// meaning — the walls were removed so nobody can hide from Gary's 9am
// stand-up about synergy. Setup (open-plan layout) then turn (Gary).
// Verified by running the program: the output is one line, 139 characters,
// inside the 1-to-200-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "Our office has an open-plan layout, which is corporate for 'we removed the walls so you can't hide from Gary's 9am stand-up about synergy.'",
);
