"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/landing/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <PageHeader
        title="Terms of Service"
        description="Last Updated: January 26, 2026"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Document Container */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 dark:border-zinc-800">

              <div className="prose dark:prose-invert prose-zinc prose-lg max-w-none font-sans">
                <p className="lead text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-12">
                  These Terms of Service constitute a legally binding agreement between you and RecallBox concerning your access to and use of the Service.
                </p>

                <div className="grid gap-12">

                  {/* Section 1 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
                      1. User Representations
                    </h2>
                    <p>By using the Site, you represent and warrant that:</p>
                    <ul className="space-y-2 list-none pl-0">
                      {[
                        "All registration information you submit will be true, accurate, current, and complete.",
                        "You will maintain the accuracy of such information.",
                        "You meet the age requirements (at least 13 years of age).",
                        "You will not use the Site for any illegal or unauthorized purpose."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
                      2. User Content & Data
                    </h2>
                    <div className="bg-zinc-50 dark:bg-zinc-950/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 mb-6">
                      <p className="mb-0 font-medium">
                        You retain full ownership of all notes, data, procedures, and text you upload to RecallBox.
                        We claim no intellectual property rights over the material you provide.
                      </p>
                    </div>
                    <p>
                      By uploading User Content to RecallBox, you grant us a license to store and display your User Content strictly as necessary to provide the Service to you.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
                      3. Prohibited Activities
                    </h2>
                    <p>As a user of the Site, you agree not to:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Systematically retrieve data to compile a database.",
                        "Make unauthorized use of the Site.",
                        "Circumvent security-related features.",
                        "Upload viruses or malicious code.",
                        "Harass, annoy, intimidate, or threaten employees.",
                        "Use the Service for illegal acts."
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-950/30 rounded-xl">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
                      4. Contact Us
                    </h2>
                    <p>
                      In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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
