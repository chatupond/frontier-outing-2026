import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGES_DIR = new URL("../public/images", import.meta.url).pathname;

// Max width per image role
const rules = [
  { match: /^(hero|resort|lunch|dinner|breakfast)/, maxWidth: 1920, quality: 82 },
  { match: /^gallery\//, maxWidth: 1400, quality: 80 },
  { match: /./, maxWidth: 1400, quality: 80 }, // fallback
];

async function getFiles(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) files.push(...await getFiles(join(dir, e.name), rel));
    else if (/\.(jpe?g|png|webp)$/i.test(e.name)) files.push({ full: join(dir, e.name), rel });
  }
  return files;
}

function ruleFor(rel) {
  return rules.find(r => r.match.test(rel));
}

async function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

const files = await getFiles(IMAGES_DIR);
let totalBefore = 0, totalAfter = 0;

for (const { full, rel } of files) {
  const { size: before } = await stat(full);
  totalBefore += before;

  const { maxWidth, quality } = ruleFor(rel);
  const ext = extname(full).toLowerCase();
  const isJpeg = ext === ".jpg" || ext === ".jpeg";
  const isPng = ext === ".png";

  const img = sharp(full).rotate(); // auto-rotate from EXIF

  const meta = await img.metadata();
  if (meta.width > maxWidth) img.resize(maxWidth);

  if (isJpeg) {
    await img.jpeg({ quality, mozjpeg: true }).toFile(full + ".tmp");
  } else if (isPng) {
    // Convert PNG to JPEG (except if it needs transparency)
    await img.jpeg({ quality, mozjpeg: true }).toFile(full.replace(/\.png$/i, ".jpg") + ".tmp");
  } else {
    await img.webp({ quality }).toFile(full + ".tmp");
  }

  // Swap tmp → original
  const outPath = isPng ? full.replace(/\.png$/i, ".jpg") : full;
  const { rename, unlink } = await import("fs/promises");
  await rename(full + ".tmp", outPath);
  if (isPng && outPath !== full) await unlink(full).catch(() => {});

  const { size: after } = await stat(outPath);
  totalAfter += after;

  const saved = Math.round((1 - after / before) * 100);
  console.log(`${rel.padEnd(50)} ${await formatBytes(before)} → ${await formatBytes(after)}  (${saved}% saved)`);
}

console.log(`\nTotal: ${await formatBytes(totalBefore)} → ${await formatBytes(totalAfter)}  (${Math.round((1 - totalAfter / totalBefore) * 100)}% saved)`);
