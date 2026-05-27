"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 relative overflow-hidden rounded-lg transition-transform group-hover:scale-110 duration-300">
                <Image src="/app_logo.png" alt="MindStore" fill className="object-cover" />
              </div>
              <span className="text-xl font-black text-zinc-900 dark:text-white tracking-tighter">
                MindStore
              </span>
            </Link>
            <p className="text-zinc-500 font-medium leading-relaxed font-sans pr-4">
              MindStore stores your notes, facts, and procedures and helps you find them later using natural language.
            </p>
          </div>

          <div>
            <h4 className="font-black text-sm text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#demo" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Live Demo</Link>
              </li>
              <li>
                <Link href="#features" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Features</Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">How it correct</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-500 hover:text-brand-600 font-medium transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-brand-600 hover:text-white transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all">
                <Github size={18} />
              </Link>
              <Link href="mailto:support@mindstore.app" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-brand-600 hover:text-white transition-all">
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400 font-medium">
            © 2026 MindStore. All rights reserved.
          </p>
          <p className="text-sm text-zinc-400 font-medium flex items-center gap-1">
            Memory that <span className="text-brand-500">works.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
