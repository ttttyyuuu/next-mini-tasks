import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-[680px] mx-auto px-5 pt-12 pb-20">
        <h2 className="text-4xl font-semibold mb-6">О проекте</h2>
        
        <div className="prose prose-gray max-w-none text-[17px] leading-relaxed">
          <p>
            Это небольшое учебное приложение создано для сравнения двух современных инструментов сборки:
          </p>
          
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Vite + React Router</strong> — классический SPA подход</li>
            <li><strong>Next.js 15 + Turbopack</strong> — современный фулл-стек фреймворк</li>
          </ul>

          <p className="mt-6">
            Задача — запустить оба проекта, сравнить скорость разработки (HMR), 
            время сборки и размер бандла.
          </p>
        </div>
      </div>
    </div>
  );
}