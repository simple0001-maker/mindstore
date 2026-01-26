"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/landing/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using RecallBox."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-zinc prose-lg font-sans">
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-8">1. Acceptance of Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              By accessing and using RecallBox, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-8">2. Use License</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              Permission is granted to temporarily use RecallBox for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-8">3. Disclaimer</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              The materials on RecallBox's website are provided "as is". RecallBox makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <div className="mt-16 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
              <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-2 font-mono">Effective Date</p>
              <p className="text-zinc-900 dark:text-white font-bold">January 26, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
