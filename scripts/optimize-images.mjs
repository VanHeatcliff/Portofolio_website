// Converts the original photos in assets/images/ into optimized WebP files in public/images/.
// Run manually after adding or replacing a photo:  npm run images
// Originals stay in assets/ (not deployed); only the optimized output in public/ ships to Vercel.
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const SRC = "assets/images";
const OUT = "public/images";

/**
 * mode:
 *  - "portrait": crop to a 4:5 frame. `top` = crop start as a fraction of the source height,
 *    chosen so the face sits in the upper third and the bottom-corner watermark is excluded.
 *  - "mobile":  phone screenshot, resized to a fixed height.
 *  - "desktop": desktop/web screenshot, resized to a fixed width.
 */
const jobs = [
  { in: "profile/PHOTO_PROFILE.jpeg", out: "profile/faiz-portrait.webp", mode: "portrait", top: 0.18 },

  { in: "projects/Hotel_Arca/dashboard1.png", out: "projects/hotel-arca/home.webp", mode: "mobile" },
  { in: "projects/Hotel_Arca/dashboard2.png", out: "projects/hotel-arca/ai-recommendation.webp", mode: "mobile" },
  { in: "projects/Hotel_Arca/login.png", out: "projects/hotel-arca/login.webp", mode: "mobile" },

  { in: "projects/Clorish AI/home.jpg", out: "projects/chloris-ai/home.webp", mode: "mobile" },
  { in: "projects/Clorish AI/scanning.jpg", out: "projects/chloris-ai/diagnosis.webp", mode: "mobile" },

  { in: "projects/NutriCare/isian.png", out: "projects/nutricare/health-form.webp", mode: "desktop" },
  { in: "projects/NutriCare/diagnosis.png", out: "projects/nutricare/analysis-result.webp", mode: "desktop" },
  { in: "projects/NutriCare/login.png", out: "projects/nutricare/login.webp", mode: "desktop" },

  { in: "projects/Clothing Store/home.png", out: "projects/clothing-store/home.webp", mode: "desktop" },
  { in: "projects/Clothing Store/daftar.png", out: "projects/clothing-store/catalog.webp", mode: "desktop" },
  { in: "projects/Clothing Store/info_barang.png", out: "projects/clothing-store/product-detail.webp", mode: "desktop" },
];

for (const job of jobs) {
  const src = path.join(SRC, job.in);
  const dest = path.join(OUT, job.out);
  await fs.mkdir(path.dirname(dest), { recursive: true });

  let img = sharp(src).rotate(); // respect EXIF orientation
  if (job.mode === "portrait") {
    const { width, height } = await sharp(src).rotate().metadata();
    const cropH = Math.round((width * 5) / 4);
    const top = Math.min(Math.round(height * job.top), height - cropH);
    img = img.extract({ left: 0, top, width, height: cropH }).resize({ width: 720 });
  } else if (job.mode === "mobile") {
    img = img.resize({ height: 900, withoutEnlargement: true });
  } else {
    img = img.resize({ width: 1280, withoutEnlargement: true });
  }

  const info = await img.webp({ quality: 80 }).toFile(dest);
  console.log(`${dest}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
