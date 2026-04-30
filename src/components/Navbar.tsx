import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-indigo-700 tracking-tight">
            Bookhub
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/catalog" className="hover:text-indigo-700 transition-colors">
              Каталог
            </Link>
            <Link href="/genres" className="hover:text-indigo-700 transition-colors">
              Жанри
            </Link>
            <Link href="/collections" className="hover:text-indigo-700 transition-colors">
              Добірки
            </Link>
            <Link
              href="/admin"
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Адмін
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
