import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Bookhub</h3>
            <p className="text-sm">Платформа каталогу книг із відеооглядами та легальними ресурсами.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Навігація</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/catalog" className="hover:text-white transition-colors">Каталог</Link></li>
              <li><Link href="/genres" className="hover:text-white transition-colors">Жанри</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Добірки</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Для адміністраторів</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/admin" className="hover:text-white transition-colors">Адмін панель</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Bookhub. MIT License.
        </div>
      </div>
    </footer>
  );
}
