import { $ } from "bun";

/**
 * Класс для выполнения Git команд через Bun
 */
export class Commands {
  /**
   * Получает статус репозитория
   * @returns Строка с результатом выполнения команды git status
   */
  static async status(): Promise<string> {
    try {
      const status = await $`git status --porcelain`.text();
      return status || "";
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `❗ Не удалось получить статус репозитория. Логи: ${error.message}`
        );
      }
      return "";
    }
  }

  /**
   * Добавляет все изменения в индекс
   */
  static async add(): Promise<void> {
    try {
      await $`git add .`;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `❗ Не удалось добавить изменения в индекс. Логи: ${error.message}`
        );
      }
      throw error;
    }
  }

  /**
   * Создает коммит с указанным сообщением
   * @param message Сообщение коммита
   */
  static async commit(message: string): Promise<void> {
    try {
      await $`git commit -m "${message}"`;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`❗ Не удалось создать коммит. Логи: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Отправляет изменения на удаленный сервер
   */
  static async push(): Promise<void> {
    try {
      await $`git push`;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `❗ Не удалось отправить изменения на сервер. Логи: ${error.message}`
        );
      }
      throw error;
    }
  }
}
