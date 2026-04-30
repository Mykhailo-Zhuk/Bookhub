"use client";

import { useState } from "react";
import Link from "next/link";
import { books as initialBooks } from "@/lib/data";
import { Book, Availability, Difficulty, PublishStatus } from "@/types/book";

type BookFormData = Omit<
  Book,
  "id" | "tags" | "availability" | "externalResources"
> & {
  tags: string;
  availability: string;
};

const emptyForm: BookFormData = {
  title: "",
  author: "",
  coverImage: "",
  shortDescription: "",
  fullDescription: "",
  genre: "",
  tags: "",
  language: "Українська",
  year: new Date().getFullYear(),
  readingVolume: "",
  difficulty: "Початківець",
  recommendedFor: "",
  recommendedWhen: "",
  youtubeUrl: "",
  availability: "Паперова",
  status: "Чернетка",
};

export default function AdminPage() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<BookFormData>(emptyForm);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  function openCreate() {
    setEditId(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function openEdit(book: Book) {
    setEditId(book.id);
    setForm({
      ...book,
      tags: book.tags.join(", "),
      availability: book.availability.join(", "),
    });
    setShowForm(true);
  }

  function handleDelete(id: string) {
    setBooks((prev) => prev.filter((b) => b.id !== id));
    setDeleteConfirm(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const book: Book = {
      id: editId ?? Date.now().toString(),
      ...form,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      availability: form.availability
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean) as Availability[],
      externalResources: editId
        ? (books.find((b) => b.id === editId)?.externalResources ?? [])
        : [],
    };
    setBooks((prev) =>
      editId ? prev.map((b) => (b.id === editId ? book : b)) : [...prev, book],
    );
    setShowForm(false);
    setEditId(null);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Адмін панель
        </h1>
        <button
          onClick={openCreate}
          className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors"
        >
          + Додати книгу
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Всього книг", value: books.length },
          {
            label: "Опубліковано",
            value: books.filter((b) => b.status === "Опубліковано").length,
          },
          {
            label: "Чернетки",
            value: books.filter((b) => b.status === "Чернетка").length,
          },
          { label: "Жанрів", value: new Set(books.map((b) => b.genre)).size },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-5"
          >
            <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {editId ? "Редагувати книгу" : "Додати книгу"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {(
                [
                  ["title", "Назва", "text", true],
                  ["author", "Автор", "text", true],
                  ["coverImage", "URL обкладинки", "url", false],
                  ["genre", "Жанр", "text", true],
                  ["language", "Мова", "text", true],
                  ["year", "Рік", "number", true],
                  ["readingVolume", "Обсяг читання", "text", false],
                  ["tags", "Теги (через кому)", "text", false],
                  ["availability", "Доступність (через кому)", "text", false],
                  ["youtubeUrl", "YouTube URL", "url", false],
                  ["recommendedFor", "Рекомендовано кому", "text", false],
                  ["recommendedWhen", "Рекомендовано коли", "text", false],
                ] as [keyof BookFormData, string, string, boolean][]
              ).map(([field, label, type, required]) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    required={required}
                    value={form[field] as string}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [field]: e.target.value }))
                    }
                    className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Складність
                  </label>
                  <select
                    value={form.difficulty}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        difficulty: e.target.value as Difficulty,
                      }))
                    }
                    className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    {(
                      ["Початківець", "Середній", "Експерт"] as Difficulty[]
                    ).map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Статус
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        status: e.target.value as PublishStatus,
                      }))
                    }
                    className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    {(["Чернетка", "Опубліковано"] as PublishStatus[]).map(
                      (s) => (
                        <option key={s}>{s}</option>
                      ),
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Короткий опис
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.shortDescription}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, shortDescription: e.target.value }))
                  }
                  className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Повний опис
                </label>
                <textarea
                  rows={4}
                  value={form.fullDescription}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, fullDescription: e.target.value }))
                  }
                  className="w-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Скасувати
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
                >
                  {editId ? "Зберегти" : "Додати"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
            <p className="text-gray-800 dark:text-white font-medium mb-6">
              Видалити цю книгу?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-5 py-2 text-sm border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Скасувати
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-5 py-2 text-sm bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Видалити
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Books Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">
              <th className="px-6 py-4">Назва</th>
              <th className="px-6 py-4">Автор</th>
              <th className="px-6 py-4">Жанр</th>
              <th className="px-6 py-4">Мова</th>
              <th className="px-6 py-4">Рік</th>
              <th className="px-6 py-4">Статус</th>
              <th className="px-6 py-4">Дії</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
            {books.map((book) => (
              <tr
                key={book.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white max-w-xs truncate">
                  {book.title}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {book.author}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {book.genre}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {book.language}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {book.year}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      book.status === "Опубліковано"
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/catalog/${book.id}`}
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-xs font-medium"
                    >
                      Переглянути
                    </Link>
                    <button
                      onClick={() => openEdit(book)}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-xs font-medium"
                    >
                      Редагувати
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(book.id)}
                      className="text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-400 text-xs font-medium"
                    >
                      Видалити
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {books.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-12 text-center text-gray-400 dark:text-gray-500"
                >
                  Книг поки немає. Додайте першу!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
