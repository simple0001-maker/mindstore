"use client";

import { Brain, Search, Database, Shield, Zap, Layout } from "lucide-react";

const features = [
  {
    icon: <Database size={24} />,
    title: "Store Simply",
    description: "Save facts, procedures, and notes without worrying about organization. Just dump it in.",
  },
  {
    icon: <Search size={24} />,
    title: "Retrieve Naturally",
    description: "Ask questions like 'How do I reset the router?' instead of searching for exact keywords.",
  },
  {
    icon: <Brain size={24} />,
    title: "Smart Context",
    description: "MindStore understands the meaning behind your notes, not just the text matches.",
  },
  {
    icon: <Shield size={24} />,
    title: "Privacy First",
    description: "Your knowledge stays yours. No external data mixing. No training on your data.",
  },
  {
    icon: <Layout size={24} />,
    title: "No Structure Needed",
    description: "Forget folders and tags. The AI organizes your memory for you implicitly.",
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Answers",
    description: "Get the exact snippet you need highlighted instantly, saving you from reading long docs.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
            Your second brain. <span className="text-brand-500">Simplified.</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
            MindStore is built on the core principle: Store simply, retrieve naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-900/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-zinc-900 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
