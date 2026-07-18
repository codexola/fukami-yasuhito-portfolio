const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");

function ensureSharp() {
  try {
    return require("sharp");
  } catch {
    execSync("npm install sharp --no-save", { cwd: root, stdio: "inherit" });
    return require("sharp");
  }
}

async function optimizeFile(sharp, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;
  const before = fs.statSync(filePath).size;
  if (before < 200_000) {
    console.log("skip", path.basename(filePath));
    return;
  }

  const tmp = filePath + ".tmp.jpg";
  const isPortrait = /portrait-/i.test(path.basename(filePath));
  const pipeline = sharp(filePath).rotate();
  if (isPortrait) {
    pipeline.resize({ width: 1400, height: 1800, fit: "inside", withoutEnlargement: true });
  } else {
    pipeline.resize({ width: 1200, height: 900, fit: "inside", withoutEnlargement: true });
  }
  await pipeline.jpeg({ quality: 78, mozjpeg: true }).toFile(tmp);
  const after = fs.statSync(tmp).size;
  if (after < before) {
    const dest = filePath.replace(/\.(png|webp|jpeg)$/i, ".jpg");
    fs.renameSync(tmp, dest);
    if (dest !== filePath && fs.existsSync(filePath)) fs.unlinkSync(filePath);
    console.log(`ok ${path.basename(filePath)} ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
  } else {
    fs.unlinkSync(tmp);
    console.log("keep", path.basename(filePath));
  }
}

async function walk(dir, sharp) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      if (name === "node_modules") continue;
      await walk(full, sharp);
    } else {
      await optimizeFile(sharp, full);
    }
  }
}

(async () => {
  const sharp = ensureSharp();
  await walk(path.join(root, "assets"), sharp);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
