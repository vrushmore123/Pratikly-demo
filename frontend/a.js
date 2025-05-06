import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folders = [
  "public/assets",
  "src/assets",
  "src/components",
  "src/features/courses",
  "src/features/auth",
  "src/layouts",
  "src/pages",
  "src/router",
  "src/styles",
  "src/utils"
];

const files = {
  "src/App.jsx": "",
  "src/main.jsx": "",
  "src/router/index.jsx": "",
  "src/styles/main.css": "",
  "src/pages/Home.jsx": "",
  "src/pages/About.jsx": "",
  "src/pages/Contact.jsx": "",
  "src/layouts/MainLayout.jsx": "",
  "src/features/courses/CoursesList.jsx": "",
  "src/features/courses/CourseDetail.jsx": "",
  "src/features/courses/courses.css": "",
  "src/features/auth/Login.jsx": "",
  "src/features/auth/Register.jsx": "",
  "src/features/auth/auth.css": ""
};

for (const folder of folders) {
  const dirPath = path.join(__dirname, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created folder: ${folder}`);
  }
}

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`Created file: ${filePath}`);
  }
}

console.log("✅ Folder structure created.");
