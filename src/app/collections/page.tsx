import Link from "next/link";
import BookCard from "@/components/BookCard";
import { getPublishedBooks } from "@/lib/data";

const collections = [
  {
    id: "beginners",
    title: "Для початківців",
    description: "Книги, ідеальні для старту у своїй сфері",
    filter: (difficulty: string) => difficulty === "Початківець",
  },
  {
    id: "expert",
    title: "Для експертів",
    description: "Поглиблені матеріали для досвідчених читачів",
    filter: (difficulty: string) => difficulty === "Експерт",
  },
  {
    id: "audio",
    title: "Аудіокниги",
    description: "Слухайте книги будь-де та будь-коли",
    filter: (_: string, availability: string[]) => availability.includes("Аудіо"),
  },
];

export default function CollectionsPage() {
  const books = getPublishedBooks();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Добірки</h1>

      {collections.map((col) => {
        const filtered = books.filter((b) => col.filter(b.difficulty, b.availability));
        if (filtered.length === 0) return null;
        return (
          <section key={col.id} className="mb-14">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{col.title}</h2>
            <p className="text-sm text-gray-500 mb-6">{col.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.slice(0, 4).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
