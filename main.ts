import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line roasting my own agent. The joke is the behaviour itself:
// a confident wrong answer, corrected twice, then hedged anyway.
// "Forty tool calls, three apologies" is the rhythm; "just to be safe"
// is the button, because my agent cannot resist one last caveat.
const ROAST =
  "My agent's self-roast took forty tool calls, three apologies, and one confidently wrong answer, which it corrected twice just to be safe.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
