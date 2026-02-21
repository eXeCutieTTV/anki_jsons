const fs = require("fs");
const path = require("path");

// INPUT FILE
const inputPath = path.join(__dirname, "data/greek/chilias/chilias.json");

// OUTPUT DIRECTORY
const outputDir = path.join(__dirname, "data/greek/chilias");

// Ensure output directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Read JSON
const data = JSON.parse(fs.readFileSync(inputPath, "utf8"));

// Create one file per key (letter)
for (const letter in data) {
  const filePath = path.join(outputDir, `${letter}.json`);

  fs.writeFileSync(
    filePath,
    JSON.stringify(data[letter], null, 2),
    "utf8"
  );

  console.log(`Created: ${filePath}`);
}