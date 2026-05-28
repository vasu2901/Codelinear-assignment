import { ArrowRight } from "lucide-react";

function LogoTile() {
  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-[oklch(0.18_0.06_260)]">
      <div className="grid grid-cols-2 gap-2 p-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-14 w-14 bg-[oklch(0.65_0.2_245)]" style={{
            clipPath: "polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%, 50% 50%)",
          }} />
        ))}
      </div>
    </div>
  );
}

function Card({ featured = false }: { featured?: boolean }) {
  return (
    <article className={`rounded-2xl border border-white/10 bg-white/[0.02] p-6 ${featured ? "lg:col-span-2 lg:flex lg:gap-6" : ""}`}>
      <div className={featured ? "lg:w-1/2" : ""}>
        <LogoTile />
      </div>
      <div className={`mt-6 ${featured ? "lg:mt-0 lg:flex lg:w-1/2 lg:flex-col" : ""}`}>
        <p className="text-[10px] font-medium tracking-[0.2em] text-[oklch(0.65_0.2_245)]">GETTING&nbsp;&nbsp;STARTED</p>
        <h3 className="mt-3 text-xl font-light leading-snug text-foreground">How to transition from a traditional to a digital bank</h3>
        <p className="mt-3 text-xs text-foreground/60">David Grohl &nbsp;&nbsp; 17/08/24</p>
        <button className="mt-6 w-full rounded-md border border-white/15 px-6 py-3 text-[10px] font-medium tracking-[0.2em] text-foreground/80 transition-colors hover:bg-white/5 lg:mt-auto">
          READ&nbsp;&nbsp;MORE
        </button>
      </div>
    </article>
  );
}

export function Insights() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-light leading-tight text-foreground lg:text-4xl">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button className="mt-10 rounded-md border border-white/30 px-10 py-3 text-[10px] font-medium tracking-[0.2em] text-foreground transition-colors hover:bg-white/5">
            INSIGHTS
          </button>
        </div>
        <div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card featured />
            <Card />
            <Card />
          </div>
          <div className="mt-8 flex justify-end">
            <a href="#" className="inline-flex items-center gap-2 border-b border-[oklch(0.65_0.2_245)] pb-1 text-[10px] font-medium tracking-[0.2em] text-[oklch(0.65_0.2_245)]">
              READ&nbsp;&nbsp;ALL&nbsp;&nbsp;INSIGHTS <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}