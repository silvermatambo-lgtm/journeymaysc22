// Validate that this repo includes the original binary logo, photos and videos.
// Prevents broken media from accidentally being published to production.
import { stat } from 'node:fs/promises';

const expected = {
  "founder.jpg": 119016,
  "logo.png": 77553,
  "mm1.jpg": 184641,
  "mm13.jpg": 121828,
  "mm14.jpg": 149124,
  "mm5.jpg": 198871,
  "mm8.jpg": 146739,
  "mmmain.jpg": 114844,
  "video1.mp4": 1435463,
  "video2.mp4": 2932950
};
let problems = 0;
for (const [filename, bytes] of Object.entries(expected)) {
  try {
    const info = await stat(new URL(`../public/media/${filename}`, import.meta.url));
    if (!info.isFile() || info.size !== bytes) {
      console.error(`Incorrect file: public/media/${filename} (expected ${bytes} bytes, got ${info.size})`);
      problems++;
    }
  } catch {
    console.error(`Missing original file: public/media/${filename}`);
    problems++;
  }
}
if (problems) {
  console.error(`\n${problems} required originals are missing or have the wrong size. Add them before deployment.`);
  process.exit(1);
}
console.log('All required logo/photo/video files are present and match their documented sizes.');
