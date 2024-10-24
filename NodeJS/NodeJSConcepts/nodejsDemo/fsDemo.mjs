import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

async function readingHtml() {
  const path = resolve("./index.html");
  let file = await readFile(path);

  const data = {
    name: "Mohak",
    company: "Quizizz",
  };

  for (const [key, value] of Object.entries(data)) {
    file = file.toString().replace(`{{${key}}}`, value);
  }

  await writeFile(resolve("./output.html"), file);
}

readingHtml();
