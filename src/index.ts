import { commitMessages } from "./lib/commits";
import { Commands } from "./utils/commands";

async function main() {
  console.log("✨ Easy commit. Генерируем сообщение для коммита...");

  // 1. Смотрим, есть ли изменения в репозитории перед коммитом
  const status: string = await Commands.status();

  if (status.trim() === "") {
    console.log("🚫 Нет изменений в репозитории. Ничего не коммитим.");
    return;
  }

  // 2. Генерируем сообщение для коммита
  const message: string =
    commitMessages[Math.floor(Math.random() * commitMessages.length)] ||
    "feat: добавлен новый функционал";

  // 3. Добавляем все изменения в индекс
  await Commands.add();
  await Commands.commit(message);
  await Commands.push();

  // 4. Выводим сообщение о том, что коммит создан
  console.log(`
 
💡 Создали коммит с сообщением: ${message}

`);
}

main();
