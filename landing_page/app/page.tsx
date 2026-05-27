import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-brand-100 dark:selection:bg-brand-900 overflow-x-hidden">
      <Hero />

      {/* Trust Indicators */}
      <div className="py-12 border-y border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 mb-8 uppercase tracking-[0.2em]">
            Trust The Memory Of
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-40 grayscale hover:opacity-100 transition-opacity duration-500">
            <span className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">DEVELOPERS</span>
            <span className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">STUDENTS</span>
            <span className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">PROFESSIONALS</span>
            <span className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">WRITERS</span>
          </div>
        </div>
      </div>

      <Features />
      <HowItWorks />
      <FAQ />

      {/* Bottom CTA */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            Stop searching. <br /><span className="text-brand-500">Start recalling.</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
            MindStore is the one trusted place for your memory.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-zinc-950 bg-white rounded-2xl hover:bg-zinc-100 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <Sparkles className="mr-3 fill-current text-brand-500" size={24} />
              Try MindStore
            </Link>
          </div>
          <p className="mt-8 text-xs text-zinc-500 font-bold tracking-[0.2em] uppercase">
            NO SIGNUP REQUIRED • PRIVACY FIRST
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
