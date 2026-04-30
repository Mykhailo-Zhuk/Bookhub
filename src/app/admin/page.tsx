import Link from "next/link";
import { books } from "@/lib/data";

export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Адмін панель</h1>
        <button className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors">
          + Додати книгу
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Всього книг", value: books.length },
          { label: "Опубліковано", value: books.filter((b) => b.status === "Опубліковано").length },
          { label: "Чернетки", value: books.filter((b) => b.status === "Чернетка").length },
          { label: "Жанрів", value: new Set(books.map((b) => b.genre)).size },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-2xl font-bold text-indigo-700">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Books Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-gray-500 text-xs uppercase tracking-wide">
              <th className="px-6 py-4">Назва</th>
              <th className="px-6 py-4">Автор</th>
              <th className="px-6 py-4">Жанр</th>
              <th className="px-6 py-4">Мова</th>
              <th className="px-6 py-4">Рік</th>
              <th className="px-6 py-4">Статус</th>
              <th className="px-6 py-4">Дії</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 max-w-xs truncate">{book.title}</td>
                <td className="px-6 py-4 text-gray-600">{book.author}</td>
                <td className="px-6 py-4 text-gray-600">{book.genre}</td>
                <td className="px-6 py-4 text-gray-600">{book.language}</td>
                <td className="px-6 py-4 text-gray-600">{book.year}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      book.status === "Опубліковано"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/catalog/${book.id}`}
                      className="text-indigo-600 hover:text-indigo-800 text-xs font-medium"
                    >
                      Переглянути
                    </Link>
                    <button className="text-gray-400 hover:text-gray-700 text-xs font-medium">
                      Редагувати
                    </button>
                    <button className="text-red-400 hover:text-red-600 text-xs font-medium">
                      Видалити
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
