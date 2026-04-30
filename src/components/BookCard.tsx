import Link from "next/link";
import Image from "next/image";
import { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/catalog/${book.id}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative h-56 bg-gray-100 flex-shrink-0">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full w-fit mb-2">
            {book.genre}
          </span>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1 group-hover:text-indigo-700 transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-gray-500 mb-2">{book.author} · {book.year}</p>
          <p className="text-xs text-gray-600 line-clamp-2 flex-1">{book.shortDescription}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {book.availability.map((a) => (
              <span key={a} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
