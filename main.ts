import * as fs from "node:fs";

const entry = "You opened me at 1:12, 1:14, and 1:19 AM. My alarm gave up beeping. My log did not.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
