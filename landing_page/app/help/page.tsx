"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/landing/Footer";
import { HelpCircle, Book, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Help() {
  const categories = [
    {
      icon: <Book size={24} />,
      title: "Getting Started",
      description: "Learn how to save your first note and recall it.",
      href: "#"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Search Tips",
      description: "How to use natural language to find exactly what you need.",
      href: "#"
    },
    {
      icon: <HelpCircle size={24} />,
      title: "Troubleshooting",
      description: "Common issues and how to resolve them.",
      href: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <PageHeader
        title="Help Center"
        description="Find answers, guides, and support for RecallBox."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                href={category.href}
                key={index}
                className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-xl hover:shadow-brand-500/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium font-sans">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
