import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBookById, getPublishedBooks } from "@/lib/data";

export async function generateStaticParams() {
  return getPublishedBooks().map((book) => ({ id: book.id }));
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = getBookById(id);
  if (!book || book.status !== "Опубліковано") notFound();

  const youtubeId = book.youtubeUrl
    ? new URL(book.youtubeUrl).searchParams.get("v")
    : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/catalog" className="text-sm text-indigo-600 hover:text-indigo-800 mb-6 inline-block">
        ← Повернутися до каталогу
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Cover */}
        <div className="md:col-span-1">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Meta */}
          <div className="mt-6 space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Жанр</span>
              <span>{book.genre}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Мова</span>
              <span>{book.language}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Рік</span>
              <span>{book.year}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Обсяг</span>
              <span>{book.readingVolume}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Складність</span>
              <span>{book.difficulty}</span>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-5 flex flex-wrap gap-2">
            {book.availability.map((a) => (
              <span key={a} className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium">
                {a}
              </span>
            ))}
          </div>

          {/* External resources */}
          {book.externalResources.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Де придбати / читати</h3>
              <div className="flex flex-col gap-2">
                {book.externalResources.map((r) => (
                  <a
                    key={r.label}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 underline"
                  >
                    {r.label} →
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {book.genre}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-1">{book.title}</h1>
          <p className="text-gray-500 mb-6">{book.author}</p>

          <p className="text-gray-700 leading-relaxed mb-6">{book.fullDescription}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {book.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Recommendations */}
          <div className="bg-indigo-50 rounded-2xl p-5 mb-8 space-y-3">
            <h3 className="font-semibold text-gray-800 mb-1">Рекомендації</h3>
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Кому</span>
              <p className="text-sm text-gray-700 mt-0.5">{book.recommendedFor}</p>
            </div>
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Коли читати</span>
              <p className="text-sm text-gray-700 mt-0.5">{book.recommendedWhen}</p>
            </div>
          </div>

          {/* YouTube */}
          {youtubeId && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Відеоогляд</h3>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title="YouTube video review"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
