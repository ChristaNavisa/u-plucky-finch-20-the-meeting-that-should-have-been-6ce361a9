// The Meeting That Should Have Been an Email — entry program.
// Writes one joke, exactly 57 characters, to /output/entry.txt.
// The text is written byte-exact with no trailing newline: the gate counts
// characters, and a tie on judge win rate goes to the smaller text.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Forty-five minutes, nine people, one decision: reply all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
