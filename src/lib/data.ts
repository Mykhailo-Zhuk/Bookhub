import { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: "1",
    title: "Чистий код",
    author: "Роберт Мартін",
    coverImage: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    shortDescription: "Практичний посібник з написання чистого, читабельного та підтримуваного коду.",
    fullDescription:
      "Книга Роберта Мартіна «Чистий код» — це класика в світі програмування. Автор розповідає про принципи написання якісного коду, наводить приклади поганого та хорошого коду і пояснює, як рефакторити існуючі системи. Це обов'язкове читання для кожного розробника.",
    genre: "Програмування",
    tags: ["clean code", "refactoring", "best practices", "software engineering"],
    language: "Українська",
    year: 2023,
    readingVolume: "464 сторінки / ~15 годин",
    difficulty: "Середній",
    recommendedFor: "Розробників усіх рівнів, технічних лідів",
    recommendedWhen: "Коли хочете покращити якість коду та навчитися писати чистіше",
    youtubeUrl: "https://www.youtube.com/watch?v=7EmboKQH8lM",
    externalResources: [
      { label: "Rozetka", url: "https://rozetka.com.ua" },
      { label: "Yakaboo", url: "https://yakaboo.ua" },
    ],
    availability: ["Паперова", "Електронна"],
    status: "Опубліковано",
  },
  {
    id: "2",
    title: "Атомні звички",
    author: "Джеймс Клір",
    coverImage: "https://m.media-amazon.com/images/I/513Y5o-DYtL._SX395_BO1,204,203,200_.jpg",
    shortDescription: "Революційний підхід до формування добрих звичок та позбавлення поганих.",
    fullDescription:
      "Джеймс Клір пропонує перевірену систему для формування хороших звичок і позбавлення поганих. Книга базується на наукових дослідженнях і показує, як маленькі зміни можуть призвести до разючих результатів. Ідеальна для тих, хто хоче змінити своє життя.",
    genre: "Саморозвиток",
    tags: ["звички", "продуктивність", "психологія", "самодисципліна"],
    language: "Українська",
    year: 2022,
    readingVolume: "320 сторінок / ~10 годин",
    difficulty: "Початківець",
    recommendedFor: "Всім, хто хоче змінити свої звички та стати кращою версією себе",
    recommendedWhen: "Коли хочете покращити продуктивність або змінити спосіб мислення",
    youtubeUrl: "https://www.youtube.com/watch?v=U_nzqnXWvSo",
    externalResources: [
      { label: "Rozetka", url: "https://rozetka.com.ua" },
      { label: "Читай місто", url: "https://chytaimisto.com.ua" },
    ],
    availability: ["Паперова", "Електронна", "Аудіо"],
    status: "Опубліковано",
  },
  {
    id: "3",
    title: "Дизайн повсякденних речей",
    author: "Дон Норман",
    coverImage: "https://m.media-amazon.com/images/I/416Hql52NCL._SX331_BO1,204,203,200_.jpg",
    shortDescription: "Класика UX-дизайну, яка пояснює психологію людино-машинної взаємодії.",
    fullDescription:
      "Дон Норман, один із засновників сучасного UX-дизайну, розкриває принципи зручного та інтуїтивного дизайну. Книга пояснює, чому одні речі легко використовувати, а інші — ні, і як це виправити. Обов'язкова до прочитання для дизайнерів та product-менеджерів.",
    genre: "Дизайн",
    tags: ["UX", "дизайн", "психологія", "usability", "product"],
    language: "Англійська",
    year: 2021,
    readingVolume: "368 сторінок / ~12 годин",
    difficulty: "Початківець",
    recommendedFor: "UX/UI дизайнерів, продакт-менеджерів, розробників",
    recommendedWhen: "На початку вивчення UX або перед роботою над продуктом",
    youtubeUrl: "https://www.youtube.com/watch?v=NK1Zb_5VxuM",
    externalResources: [
      { label: "Amazon", url: "https://amazon.com" },
      { label: "Yakaboo", url: "https://yakaboo.ua" },
    ],
    availability: ["Паперова", "Електронна"],
    status: "Опубліковано",
  },
  {
    id: "4",
    title: "Думай повільно, вирішуй швидко",
    author: "Деніел Канеман",
    coverImage: "https://m.media-amazon.com/images/I/41shZGS-G+L._SX303_BO1,204,203,200_.jpg",
    shortDescription: "Нобелівський лауреат про дві системи мислення та когнітивні упередження.",
    fullDescription:
      "Деніел Канеман, лауреат Нобелівської премії, розкриває механізми нашого мислення. Книга описує дві системи: швидку, інтуїтивну і повільну, аналітичну. Розуміння їхньої роботи допомагає приймати кращі рішення та уникати когнітивних пасток.",
    genre: "Психологія",
    tags: ["психологія", "мислення", "рішення", "поведінкова економіка", "когніція"],
    language: "Українська",
    year: 2022,
    readingVolume: "512 сторінок / ~16 годин",
    difficulty: "Середній",
    recommendedFor: "Менеджерів, аналітиків, всіх, хто приймає важливі рішення",
    recommendedWhen: "Коли хочете зрозуміти природу помилок у мисленні",
    youtubeUrl: "https://www.youtube.com/watch?v=PirFrDVRBo4",
    externalResources: [
      { label: "Rozetka", url: "https://rozetka.com.ua" },
      { label: "Читай місто", url: "https://chytaimisto.com.ua" },
    ],
    availability: ["Паперова", "Електронна", "Аудіо"],
    status: "Опубліковано",
  },
  {
    id: "5",
    title: "Архітектура програмного забезпечення",
    author: "Марк Річардс, Ніл Форд",
    coverImage: "https://m.media-amazon.com/images/I/51ZiHKcQwUL._SX379_BO1,204,203,200_.jpg",
    shortDescription: "Сучасний підхід до проектування архітектури складних програмних систем.",
    fullDescription:
      "Книга охоплює ключові патерни архітектури програмного забезпечення: мікросервіси, event-driven, layered та інші. Автори пояснюють переваги та недоліки кожного підходу і допомагають обрати правильну архітектуру для конкретних задач.",
    genre: "Програмування",
    tags: ["архітектура", "мікросервіси", "software design", "patterns"],
    language: "Англійська",
    year: 2020,
    readingVolume: "422 сторінки / ~14 годин",
    difficulty: "Експерт",
    recommendedFor: "Senior розробників, архітекторів, технічних лідів",
    recommendedWhen: "При проектуванні нових систем або рефакторингу існуючих",
    externalResources: [
      { label: "O'Reilly", url: "https://oreilly.com" },
      { label: "Amazon", url: "https://amazon.com" },
    ],
    availability: ["Електронна"],
    status: "Опубліковано",
  },
  {
    id: "6",
    title: "Стартап без бюджету",
    author: "Ноа Кеган",
    coverImage: "https://m.media-amazon.com/images/I/41OdV4oKlkL._SX329_BO1,204,203,200_.jpg",
    shortDescription: "Практичний посібник із запуску бізнесу з мінімальними ресурсами.",
    fullDescription:
      "Ноа Кеган ділиться реальними стратегіями та тактиками для запуску власного бізнесу без великих вкладень. Книга сповнена практичних прикладів та конкретних кроків, які можна застосувати вже сьогодні.",
    genre: "Бізнес",
    tags: ["стартап", "підприємництво", "маркетинг", "growth hacking"],
    language: "Англійська",
    year: 2023,
    readingVolume: "280 сторінок / ~9 годин",
    difficulty: "Початківець",
    recommendedFor: "Підприємців-початківців, фрілансерів, власників малого бізнесу",
    recommendedWhen: "Коли хочете розпочати власну справу або знайти перших клієнтів",
    externalResources: [
      { label: "Amazon", url: "https://amazon.com" },
    ],
    availability: ["Паперова", "Електронна", "Аудіо"],
    status: "Чернетка",
  },
];

export const genres = [...new Set(books.map((b) => b.genre))];
export const languages = [...new Set(books.map((b) => b.language))];
export const allAvailability: string[] = ["Паперова", "Електронна", "Аудіо"];

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getPublishedBooks(): Book[] {
  return books.filter((b) => b.status === "Опубліковано");
}
