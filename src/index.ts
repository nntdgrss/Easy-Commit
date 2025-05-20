#!/usr/bin/env node

import {
  bugFixes,
  build,
  chore,
  ci,
  commitMessages,
  documentation,
  features,
  perf,
  refactor,
  style,
  tests,
  ui,
} from "./lib/commits";
import { Commands } from "./utils/commands";
import { program } from "commander";
import { exit } from "process";

/**
 * Цвета для консольных сообщений
 */
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

/**
 * Оборачивает текст в цвет
 */
const colorize = {
  success: (text: string) => `${colors.green}${text}${colors.reset}`,
  warning: (text: string) => `${colors.yellow}${text}${colors.reset}`,
  error: (text: string) => `${colors.red}${text}${colors.reset}`,
  info: (text: string) => `${colors.cyan}${text}${colors.reset}`,
  bold: (text: string) => `${colors.bright}${text}${colors.reset}`,
};

// Настройка CLI параметров
program
  .version(process.env.npm_package_version || "1.0.0")
  .option("-p, --push", "Отправляет коммит на сервер")
  .option("-m, --message <message>", "Задать собственное сообщение для коммита")
  .option("-v, --verbose", "Показывать подробную информацию")
  .option("-t, --type <type>", "Тип коммита")
  .parse(process.argv);

const options = program.opts();

/**
 * Генерирует случайное сообщение для коммита из массива шаблонов.
 */
function generateCommitMessage(type: string): string {
  if (type === "random") {
    return commitMessages[Math.floor(Math.random() * commitMessages.length)];
  }

  if (type === "feat") {
    return features[Math.floor(Math.random() * features.length)];
  }

  if (type === "fix") {
    return bugFixes[Math.floor(Math.random() * bugFixes.length)];
  }

  if (type === "refactor") {
    return refactor[Math.floor(Math.random() * refactor.length)];
  }

  if (type === "docs") {
    return documentation[Math.floor(Math.random() * documentation.length)];
  }

  if (type === "style") {
    return style[Math.floor(Math.random() * style.length)];
  }

  if (type === "test") {
    return tests[Math.floor(Math.random() * tests.length)];
  }

  if (type === "chore") {
    return chore[Math.floor(Math.random() * chore.length)];
  }

  if (type === "build") {
    return build[Math.floor(Math.random() * build.length)];
  }

  if (type === "ci") {
    return ci[Math.floor(Math.random() * ci.length)];
  }

  if (type === "ui") {
    return ui[Math.floor(Math.random() * ui.length)];
  }

  if (type === "perf") {
    return perf[Math.floor(Math.random() * perf.length)];
  }

  if (!commitMessages.length) {
    return "feat: добавлен новый функционал";
  }

  return commitMessages[Math.floor(Math.random() * commitMessages.length)];
}

/**
 * Выводит сообщение в консоль, если включен режим verbose
 */
function logVerbose(message: string): void {
  if (options.verbose) {
    console.log(colorize.info(`[INFO] ${message}`));
  }
}

/**
 * Основная функция
 */
async function main() {
  try {
    console.log(colorize.bold("✨ EASYCOMMIT. Работаем с Git..."));

    // 1. Проверяем наличие изменений в репозитории
    logVerbose("Проверяем статус репозитория...");
    const status: string = await Commands.status();

    if (status.trim() === "") {
      console.log(
        colorize.warning("🚫 Нет изменений в репозитории. Нечего коммитить.")
      );
      return;
    }

    logVerbose(`Найдены изменения:\n${status}`);

    // 2. Определяем сообщение для коммита
    const type: string = options.type || "random";

    const message: string = options.message || generateCommitMessage(type);
    logVerbose(`Сообщение для коммита: ${message}`);

    // 3. Добавляем изменения в индекс
    logVerbose("Добавляем изменения в индекс...");
    await Commands.add();

    // 4. Создаем коммит
    logVerbose("Создаем коммит...");
    await Commands.commit(message);
    console.log(
      colorize.success(`✅ Коммит создан: ${colorize.bold(message)}`)
    );

    // 5. Отправляем изменения на сервер, если указан флаг --push
    if (options.push) {
      logVerbose("Отправляем изменения на сервер...");
      await Commands.push();
      console.log(
        colorize.success("🚀 Изменения успешно отправлены на сервер")
      );
    } else {
      console.log(
        colorize.info(
          "ℹ️ Для отправки изменений на сервер используйте флаг --push"
        )
      );
    }
  } catch (error) {
    console.error(
      colorize.error(
        `❌ Произошла ошибка: ${
          error instanceof Error ? error.message : String(error)
        }`
      )
    );
    exit(1);
  }
}

// Запуск
main();
