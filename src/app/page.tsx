import Link from "next/link";
import BookCard from "@/components/BookCard";
import { getPublishedBooks, genres } from "@/lib/data";

export default function HomePage() {
  const books = getPublishedBooks().slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Відкрийте світ книг
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-8">
            Каталог книг із відеооглядами, детальними описами та посиланнями на легальні ресурси для придбання або читання.
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Перейти до каталогу
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Нові надходження</h2>
          <Link href="/catalog" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            Всі книги →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Genres */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Жанри</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <Link
                key={genre}
                href={`/genres?genre=${encodeURIComponent(genre)}`}
                className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl font-medium hover:bg-indigo-100 transition-colors"
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
