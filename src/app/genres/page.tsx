import Link from "next/link";
import BookCard from "@/components/BookCard";
import { getPublishedBooks, genres } from "@/lib/data";

export default function GenresPage({
  searchParams,
}: {
  searchParams: Promise<{ genre?: string }>;
}) {
  const books = getPublishedBooks();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Жанри</h1>

      {genres.map((genre) => {
        const genreBooks = books.filter((b) => b.genre === genre);
        return (
          <section key={genre} className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold text-gray-800">{genre}</h2>
              <Link
                href={`/catalog?genre=${encodeURIComponent(genre)}`}
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                Всі книги жанру →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {genreBooks.slice(0, 4).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
