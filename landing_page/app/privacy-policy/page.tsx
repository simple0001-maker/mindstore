"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <PageHeader
        title="Privacy Policy"
        description="Last Updated: July 22, 2026"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Document Container */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 dark:border-zinc-800">

              <div className="prose dark:prose-invert prose-zinc prose-lg max-w-none font-sans">
                <p className="lead text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-12">
                  MindStore is built with privacy as the foundation. We believe your personal knowledge is yours alone —
                  and we designed the app so we never see it.
                </p>

                <div className="grid gap-12">
                  {/* Section 1 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">1</span>
                      Data Collection: None
                    </h2>
                    <div className="bg-brand-50 dark:bg-brand-900/10 p-6 rounded-2xl border border-brand-100 dark:border-brand-800/30 mb-6">
                      <p className="mb-0 font-medium text-brand-900 dark:text-brand-100">
                        <strong>We do not collect any personal data. Period.</strong> No user accounts, no email
                        addresses, no names, no usage analytics, no crash reporting, no device identifiers, no
                        location data, no behavioral tracking.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">2</span>
                      Data Storage: Local Only
                    </h2>
                    <p>All your notes and data are stored exclusively on your device using local storage. There is no account to create and nothing to upload.</p>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800">
                        <h4 className="font-bold text-zinc-900 dark:text-white mb-2">On Your Device</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-0">
                          Your notes never leave your device. No cloud syncing, no external servers, no backups to our systems.
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800">
                        <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Search Stays On-Device</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-0">
                          Search runs entirely on your device — no network connection is required and nothing is sent to us.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">3</span>
                      Third-Party Services & Permissions
                    </h2>
                    <p>The app requests internet access only to:</p>
                    <ul className="space-y-4 list-none pl-0">
                      {[
                        "Load Google Fonts, subject to Google's Privacy Policy.",
                        "Open external links you tap (Privacy Policy, Support).",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4">We do not use internet access for tracking, analytics, data collection, or advertising.</p>
                  </div>

                  {/* Section 4 */}
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-12">
                    <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold">4</span>
                      Your Rights & Uninstalling
                    </h2>
                    <p>
                      Since we don&apos;t collect any data, there is nothing for us to request, delete, or modify on your behalf.
                      You can export your own notes at any time from the Settings screen. If you uninstall MindStore, all local
                      data is removed from your device per standard OS behavior and is not recoverable.
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
                    <a href="mailto:support@mindstore.app" className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold no-underline hover:underline">
                      support@mindstore.app
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
