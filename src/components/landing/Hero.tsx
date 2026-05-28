'use-client'
import { Bell, ArrowUpRight, Send, PlusCircle, LayoutGrid } from "lucide-react";


const trusted = ["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVESMARATHON"];
const heroWoman = "/hero-woman.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 md:px-12 lg:px-20 lg:pt-32 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="animate-[fadeUp_0.8s_ease-out]">
          <h1 className="text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[64px]">
            The new foundation<br />of modern banking
          </h1>
          <p className="mt-6 max-w-md text-base text-foreground/70 leading-relaxed">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-md px-8 py-4 text-xs font-medium tracking-[0.2em] text-white shadow-[0_10px_30px_-10px_oklch(0.55_0.22_260/0.6)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-cta)" }}>
              REQUEST&nbsp;&nbsp;DEMO
            </button>
            <button className="rounded-md border border-foreground/80 px-8 py-4 text-xs font-medium tracking-[0.2em] text-foreground transition-colors hover:bg-foreground/5">
              CONTACT&nbsp;&nbsp;US
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 -z-10 blur-3xl" style={{ background: "var(--gradient-hero-glow)" }} />
          <div className="relative aspect-square overflow-hidden rounded-[2rem]">
            <img src={heroWoman} alt="Customer using mobile banking" className="h-full w-full object-cover" width={1024} height={1024} />
          </div>
          {/* Floating card: balance */}
          <div className="absolute right-0 top-10 w-[60%] max-w-[280px] rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-xl animate-[float_6s_ease-in-out_infinite]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-200 to-rose-300" />
                <div>
                  <div className="text-[11px] font-semibold text-slate-900">Toni Kross</div>
                  <div className="text-[9px] text-slate-500">Good Morning</div>
                </div>
              </div>
              <Bell className="h-3.5 w-3.5 text-slate-400" />
            </div>
            <div className="mt-3 text-[9px] text-slate-500">Total balance</div>
            <div className="text-base font-bold text-indigo-900">$42,295.00 USD</div>
            <div className="mt-3 grid grid-cols-3 gap-1 text-center">
              {[{ I: Send, l: "Fund Transfer" }, { I: PlusCircle, l: "Add Money" }, { I: LayoutGrid, l: "More" }].map(({ I, l }) => (
                <div key={l} className="flex flex-col items-center gap-1 rounded-lg py-1">
                  <div className="rounded-md bg-slate-100 p-1.5"><I className="h-3 w-3 text-indigo-900" /></div>
                  <span className="text-[8px] text-slate-700">{l}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Floating card: recent activity */}
          <div className="absolute -left-2 bottom-12 w-[65%] max-w-[300px] rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-xl animate-[float_7s_ease-in-out_infinite_reverse]">
            <div className="text-[11px] font-semibold text-slate-900">Recent activity</div>
            <div className="mt-2 flex gap-1 text-[8px]">
              {["This Day", "This Week", "This Month", "6 Month"].map((t, i) => (
                <span key={t} className={`rounded-full px-2 py-1 ${i === 1 ? "bg-indigo-900 text-white" : "text-slate-600"}`}>{t}</span>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-purple-100 p-1.5"><ArrowUpRight className="h-3 w-3 text-purple-600" /></div>
                <div>
                  <div className="text-[10px] font-semibold text-slate-900">To Jin · <span className="font-normal text-slate-500">Work</span></div>
                  <div className="text-[8px] text-slate-400">12 jun 2022</div>
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-900">-$59</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl">
        <div className="text-sm text-foreground/60">Trusted By:</div>
        <div className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-6 opacity-70">
          {trusted.map((n) => (
            <span key={n} className="text-base font-medium tracking-wide text-foreground/70">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}