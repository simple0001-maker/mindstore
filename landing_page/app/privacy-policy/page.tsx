"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is our priority. Your memory stays yours."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-zinc prose-lg font-sans">
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-8">1. Privacy First</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 font-medium italic">
              RecallBox is structured around the principle that your knowledge belongs to you.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              We do not sell your data. We do not use your notes to train public AI models.
            </p>

            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-8">2. Data Collection</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              We collect only the data necessary to provide the service: the notes you explicitly save.
            </p>

            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-8">3. Contact Us</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              If you have any questions, please contact us at <a href="mailto:support@recallbox.app" className="underline text-zinc-900 dark:text-zinc-100 decoration-zinc-500 hover:decoration-zinc-900 dark:hover:decoration-white transition-all">support@recallbox.app</a>.
            </p>

            <div className="mt-16 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
              <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-2 font-mono">Last Updated</p>
              <p className="text-zinc-900 dark:text-white font-bold">January 26, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
