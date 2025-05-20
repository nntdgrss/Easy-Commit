import { $ } from "bun";
import { commitMessages } from "./lib/commits";

async function main() {
  console.log("✨ Easy commit. Генерируем сообщение для коммита...");

  const message =
    commitMessages[Math.floor(Math.random() * commitMessages.length)];

  await $`git add .`;
  await $`git commit -m "${message}"`;
  await $`git push`;

  console.log(`
 
💡 Создали коммит с сообщением: ${message}

`);
}

main();
