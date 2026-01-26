"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <PageHeader
        title="Privacy Policy"
        description="Last Updated: January 26, 2026"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Document Container */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 dark:border-zinc-800">

              <div className="prose dark:prose-invert prose-zinc prose-lg max-w-none font-sans">
                <p className="lead text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-12">
                  At RecallBox ("we," "our," or "us"), we recognize that your personal memory and knowledge are among your most private assets.
                  We are committed to protecting your privacy and ensuring you have complete control over your data.
                </p>

                <div className="grid gap-12">
                  {/* Section 1 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">1</span>
                      Integration with Your Data
                    </h2>
                    <div className="bg-brand-50 dark:bg-brand-900/10 p-6 rounded-2xl border border-brand-100 dark:border-brand-800/30 mb-6">
                      <p className="mb-0 font-medium text-brand-900 dark:text-brand-100">
                        RecallBox is designed as a secure vault for your personal knowledge. Unlike many AI services, <strong>we do not use your private notes,
                          documents, or procedures to train our public advertising or generative AI models.</strong> Your data remains yours.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">2</span>
                      Information We Collect
                    </h2>
                    <p>We collect information to provide better services to all our users.</p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800">
                        <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Personal Data</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-0">
                          Name, email address, and other information you provide when registering.
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800">
                        <h4 className="font-bold text-zinc-900 dark:text-white mb-2">User Content</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-0">
                          Notes, documents, and data you upload. Always encrypted and private.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">3</span>
                      How We Use Information
                    </h2>
                    <ul className="space-y-4 list-none pl-0">
                      {[
                        "Provide specific retrieval functionality you request.",
                        "Create and manage your secure account.",
                        "Notify you of important service updates.",
                        "Prevent fraudulent transactions and enhance security."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">4</span>
                      Data Security
                    </h2>
                    <p>
                      We use administrative, technical, and physical security measures to help protect your personal information.
                      User content is encrypted at rest and in transit.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">5</span>
                      Contact Us
                    </h2>
                    <p>
                      If you have questions about this Privacy Policy, please contact us at:
                    </p>
                    <a href="mailto:support@recallbox.app" className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold no-underline hover:underline">
                      support@recallbox.app
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
