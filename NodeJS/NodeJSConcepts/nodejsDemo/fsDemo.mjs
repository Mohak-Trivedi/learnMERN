import { readFile } from "fs/promises";
import { resolve } from "path";

async function readingHtml() {
  const path = resolve("./index.html");
  const file = await readFile(path);
  console.log(file.toString());
}

readingHtml();
