# EASYCOMMIT 🚀

![npm](https://img.shields.io/npm/v/@nntdgrss/easycommit)
![License](https://img.shields.io/npm/l/@nntdgrss/easycommit)

> Упрощаем Git-коммиты до одной команды! Автоматически создавайте осмысленные коммиты с минимальными усилиями.

## ✨ Возможности

- 🎲 **Автоматическая генерация** осмысленных сообщений для коммитов
- 🔄 **Полный цикл** от добавления файлов до отправки на сервер
- 🌈 **Красивый вывод** с цветным форматированием в терминале
- 🔧 **Гибкая настройка** через параметры командной строки

## 📦 Установка

```bash
# Глобальная установка
npm install -g easycommit

# ИЛИ через Bun
bun install -g easycommit
```

## 🚀 Использование (`Важно: Программа работает только в окружении Bun!`)

```bash
# Базовое использование (добавляет все изменения и создает коммит)
bunx --bun easycommit

# Создать коммит и отправить на сервер
bunx --bun easycommit --push

# Создать коммит с собственным сообщением
bunx --bun easycommit --message "feat: добавлена новая фича"

# Показать подробную информацию о процессе
bunx --bun easycommit --verbose
```

## 🔧 Опции

| Флаг                  | Сокращение | Описание                                 |
| --------------------- | ---------- | ---------------------------------------- |
| `--push`              | `-p`       | Отправляет коммит на сервер              |
| `--message <message>` | `-m`       | Задать собственное сообщение для коммита |
| `--verbose`           | `-v`       | Показывать подробную информацию          |
| `--version`           |            | Показать версию утилиты                  |
| `--help`              |            | Показать справку                         |
| `--type`              | `-t`       | Вместо рандомного текста, выберите свой  |

## 🧑‍💻 Типы сообщений (Если выбран `--type или -t`)

- `--type feat` - Фичи (Пример: feat: добавлен новый функционал)
- `--type fix` - Фикс багов (Пример: fix: исправлена ошибка в работе приложения)
- `--type refactor` - Рефакторинг (Пример: refactor: улучшена структура кода)
- `--type docs` - Документации (Пример: docs: обновлена документация)
- `--type style` - Стили (Пример: style: удалены неиспользуемые импорты)
- `--type test` - Тесты (Пример: test: добавлены новые тесты)
- `--type chore` - Чистка (Пример: chore: настроена сборка проекта)
- `--type build` - Сборка (Пример: build: обновлена конфигурация webpack)
- `--type ci` - CI (Пример: ci: добавлен новый workflow)
- `--type ui` - UI/UX (Пример: ui: улучшена отзывчивость интерфейса)
- `--type perf` - Производительность (Пример: perf: оптимизирована работа с данными)

## 🏗️ Примеры использования

### Быстрый коммит

```bash
# Добавит все изменения и создаст коммит с автоматическим сообщением
bunx --bun easycommit
```

### Коммит и отправка на сервер

```bash
# Создаст коммит и отправит изменения на сервер
bunx --bun easycommit -p
```

### Использование в Git Flow

```bash
# Для коммита в фичу
bunx --bun easycommit -m "feat: добавлена авторизация через Google"

# Для исправления бага
bunx --bun easycommit -m "fix: исправлена ошибка при валидации формы"
```

## 🛠️ Локальная разработка

```bash
# Клонирование репозитория
git clone https://github.com/username/easycommit.git
cd easycommit

# Установка зависимостей
bun install

# Запуск в режиме разработки
bun start

# Сборка
bun run build
```

## 📝 Лицензия

MIT © [Ваше имя]

---

Сделано с ❤️ для разработчиков, которые ценят своё время.
