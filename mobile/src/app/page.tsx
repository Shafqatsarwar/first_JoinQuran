import Link from "next/link";
import { BookOpen, Compass, Clock, MessageCircle, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between items-center pt-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">Join Quran</h1>
          <p className="text-sm text-muted-foreground">Learn & Practice Daily</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
          JQ
        </div>
      </header>

      {/* Hero / Daily Verse or Motivation */}
      <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Daily Inspiration</h2>
        <p className="text-emerald-50 italic">"Indeed, with hardship [will be] ease."</p>
        <p className="text-xs text-emerald-100 mt-2 text-right">- Surah Ash-Sharh [94:6]</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Link href="/quran" className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center space-y-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-primary">
            <BookOpen size={24} />
          </div>
          <span className="font-medium">Read Quran</span>
        </Link>

        <Link href="/qibla" className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center space-y-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-secondary">
            <Compass size={24} />
          </div>
          <span className="font-medium">Qibla Finder</span>
        </Link>

        <Link href="/prayer-times" className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center space-y-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
            <Clock size={24} />
          </div>
          <span className="font-medium">Prayer Times</span>
        </Link>

        <Link href="/contact" className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center space-y-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
            <MessageCircle size={24} />
          </div>
          <span className="font-medium">Contact Us</span>
        </Link>
      </div>

      {/* Recent Activity or Promo */}
      <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border border-amber-100 dark:border-amber-900/20">
        <div className="flex items-start space-x-3">
          <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg text-secondary">
            <span className="text-xl">⭐</span>
          </div>
          <div>
            <h3 className="font-semibold text-amber-900 dark:text-amber-100">Start Your Journey</h3>
            <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">Join our online classes today and learn from qualified tutors.</p>
            <Link href="/contact" className="inline-flex items-center text-sm font-medium text-secondary mt-2">
              Get Started <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
