import { $ } from "bun";
import { commitMessages } from "./lib/commits";

async function main() {
  console.log("✨ Easy commit. Генерируем сообщение для коммита...");

  // 1. Смотрим, есть ли изменения в репозитории перед коммитом

  const status = await $`git status --porcelain`.text();

  if (status.trim() === "") {
    console.log("🚫 Нет изменений в репозитории. Ничего не коммитим.");
    return;
  }

  // 2. Генерируем сообщение для коммита
  const message =
    commitMessages[Math.floor(Math.random() * commitMessages.length)];

  // 3. Добавляем все изменения в индекс
  await $`git add .`;
  await $`git commit -m "${message}"`;
  await $`git push`;

  console.log(`
 
💡 Создали коммит с сообщением: ${message}

`);
}

main();
