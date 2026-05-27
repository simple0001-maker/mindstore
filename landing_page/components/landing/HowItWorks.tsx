"use client";

import { Save, Search, Zap } from "lucide-react";

const steps = [
  {
    icon: <Save size={24} />,
    title: "1. Save Anything",
    description: "Write down a note, paste a procedure, or save a snippet. No title required.",
  },
  {
    icon: <Search size={24} />,
    title: "2. Ask Naturally",
    description: "When you need it back, just ask. 'Where is the API key?' or 'How do I restart the server?'",
  },
  {
    icon: <Zap size={24} />,
    title: "3. Instant Recall",
    description: "MindStore finds the exact match and highlights the answer. No searching through folders.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
              Memory that <br className="hidden lg:block" />
              <span className="text-brand-500">answers back.</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium mb-8 leading-relaxed">
              Stop organizing. Start remembering. MindStore makes retrieving your knowledge as easy as asking a friend.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="shrink-0 relative">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold relative z-10 shadow-xl">
                      {step.icon}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-zinc-100 dark:bg-zinc-800" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-zinc-100 dark:border-zinc-800 shadow-2xl">
              {/* Saved Note Mockup */}
              <div className="mb-6 p-4 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 opacity-60 scale-95 origin-bottom">
                <p className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wide">Saved Yesterday</p>
                <p className="text-zinc-800 dark:text-zinc-200 font-medium text-sm">
                  MacBook Reset: Hold Power + Command + R until Apple logo appears...
                </p>
              </div>

              {/* Query & Result Mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <Search size={16} className="text-brand-500" />
                  <p className="text-zinc-800 dark:text-zinc-200 font-medium text-sm">"How do I reset my mac?"</p>
                </div>

                <div className="p-5 bg-brand-50 dark:bg-brand-900/20 rounded-2xl border border-brand-200 dark:border-brand-800/50">
                  <p className="text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">
                    "To reset your MacBook, <span className="bg-brand-200 dark:bg-brand-800 px-1 rounded">hold Power + Command + R</span> until the Apple logo appears."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
