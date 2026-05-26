'use client';

import { useState } from 'react';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Подготовить презентацию по Turbopack", done: false },
    { id: 2, text: "Прочитать документацию", done: true },
    { id: 3, text: "Сравнить размеры бандлов", done: false },
  ]);

  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-[680px] mx-auto px-5 pt-8 pb-12">
      {/* Поле добавления задачи */}
      <div className="flex gap-3 mb-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Что нужно сделать сегодня?"
          className="flex-1 px-5 py-4 text-base bg-white border border-gray-300 rounded-2xl focus:border-[#56733d] focus:ring-0 outline-none"
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button
          onClick={addTask}
          className="px-8 bg-[#56733d] hover:bg-[#485f35] text-white font-semibold rounded-2xl transition-all active:scale-95"
        >
          Добавить
        </button>
      </div>

      {/* Список задач */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-5 transition-all ${
              task.done ? 'opacity-75' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 accent-[#56733d] cursor-pointer"
              />
              <span className={`text-[17px] ${task.done ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {task.text}
              </span>
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-2xl text-gray-400 hover:text-red-500 transition-colors"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <p className="text-center text-gray-500 mt-16">Список задач пуст. Добавьте первую задачу!</p>
      )}
    </div>
  );
}