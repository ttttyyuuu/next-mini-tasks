import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-6 shadow-sm">
      <div className="max-w-[680px] mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#56733d] text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
            ✓
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">Мои задачи</h1>
        </div>

        <nav className="flex gap-8 text-[17px] font-medium">
          <Link href="/" className="hover:text-[#56733d] transition-colors">Задачи</Link>
          <Link href="/about" className="hover:text-[#56733d] transition-colors">О проекте</Link>
        </nav>
      </div>
    </header>
  );
}