"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/landing/Footer";
import { Mail, Twitter, Github } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Here's how you can reach us."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="space-y-6">
            <a
              href="mailto:support@mindstore.app"
              className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-800 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Email Support</h3>
                <p className="text-zinc-500 font-medium font-sans">support@mindstore.app</p>
              </div>
            </a>

            <a
              href="https://twitter.com/mindstore"
              target="_blank"
              className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-800 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors shadow-sm">
                <Twitter size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Follow on X</h3>
                <p className="text-zinc-500 font-medium font-sans">@mindstore</p>
              </div>
            </a>

            <a
              href="https://github.com/mindstore"
              target="_blank"
              className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-800 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors shadow-sm">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">GitHub</h3>
                <p className="text-zinc-500 font-medium font-sans">@mindstore</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
