import { $ } from "bun";

export class Commands {
  static async status(): Promise<string> {
    try {
      const status = await $`git status --porcelain`.text();

      if (!status) {
        return "";
      }

      return status;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          "❗ Не удалось получить статус репозитория. Логи: " + error.message
        );
      }
      return "";
    }
  }

  static async add(): Promise<void> {
    try {
      await $`git add .`;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          "❗ Не удалось добавить изменения в индекс. Логи: " + error.message
        );
      }
    }
  }

  static async commit(message: string): Promise<void> {
    try {
      await $`git commit -m "${message}"`;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("❗ Не удалось создать коммит. Логи: " + error.message);
      }
    }
  }
  static async push(): Promise<void> {
    try {
      await $`git push`;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          "❗ Не удалось отправить изменения на сервер. Логи: " + error.message
        );
      }
    }
  }
}
