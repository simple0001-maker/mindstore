import { Copy } from "lucide-react";
import Image from "next/image";

export function AppScreen() {
  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-black font-sans">
      {/* Status Bar Placeholder */}
      <div className="h-12 w-full bg-transparent shrink-0" />

      {/* AppBar */}
      <div className="px-4 py-3 flex items-center justify-between mb-4 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 relative overflow-hidden rounded">
            <Image src="/app_logo.png" alt="ClapReply" fill className="object-cover" />
          </div>
          <h1 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">ClapReply</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 overflow-y-auto pb-20 scrollbar-hide">
        {/* Input Area */}
        <div className="mb-6">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500 mb-2 block">
            Original Tweet
          </label>
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Most startups fail because founders overbuild instead of shipping.
            </p>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-linear-to-br from-brand-500/5 to-teal-500/5 border border-brand-200/50 dark:border-brand-800/50 shadow-sm relative group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                Witty Reply
              </span>
              <Copy size={12} className="text-zinc-400" />
            </div>
            <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed">
              Shipped ideas beat perfect decks every time. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
