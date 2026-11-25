import { mkdirSync, writeFileSync } from "node:fs";

const note =
  "The ice maker has made 312 cubes since March. You've used four. We're both disappointed, but only one of us can leave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
