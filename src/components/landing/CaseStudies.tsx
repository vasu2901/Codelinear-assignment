import { ArrowLeft, ArrowRight, Zap } from "lucide-react";

export function CaseStudies() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-light text-foreground lg:text-5xl">Our Case Studies</h2>
        <div className="relative mt-16">
          {/* stacked cards */}
          <div aria-hidden className="absolute inset-x-12 -top-4 hidden h-full rounded-2xl border border-white/5 bg-white/[0.015] lg:block" />
          <div aria-hidden className="absolute inset-x-6 -top-2 hidden h-full rounded-2xl border border-white/10 bg-white/[0.02] lg:block" />
          <article className="relative grid gap-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-2 lg:p-12">
            <div className="flex aspect-square w-full max-w-md items-center justify-center self-center rounded-lg bg-[oklch(0.18_0.06_260)]">
              <div className="grid grid-cols-2 gap-3 p-10">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-20 w-20 bg-[oklch(0.65_0.2_245)]" style={{
                    clipPath: "polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%, 50% 50%)",
                  }} />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] font-medium tracking-[0.2em] text-[oklch(0.65_0.2_245)]">GETTING&nbsp;&nbsp;STARTED</p>
              <h3 className="mt-4 text-3xl font-light leading-tight text-foreground lg:text-4xl">
                How we help brand<br />reach out to more<br />people
              </h3>
              <div className="mt-8 flex items-center gap-3 text-foreground/80">
                <Zap className="h-6 w-6 fill-foreground/40 text-foreground/40" />
                <span className="text-lg">Zoomerr</span>
              </div>
              <button className="mt-10 w-full rounded-md border border-white/15 px-6 py-3 text-[10px] font-medium tracking-[0.2em] text-foreground/80 transition-colors hover:bg-white/5">
                READ&nbsp;&nbsp;MORE
              </button>
            </div>
          </article>
        </div>
        <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center justify-center gap-6 w-full">
            <button
              aria-label="Previous"
              className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      border border-[oklch(0.65_0.2_245)]
      text-[oklch(0.65_0.2_245)]
      transition-colors
      hover:bg-[oklch(0.65_0.2_245)]/10
    "
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-6 rounded-full bg-[oklch(0.65_0.2_245)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            </div>

            <button
              aria-label="Next"
              className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      border border-[oklch(0.65_0.2_245)]
      text-[oklch(0.65_0.2_245)]
      transition-colors
      hover:bg-[oklch(0.65_0.2_245)]/10
    "
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <a href="#" className="inline-flex items-center gap-2 border-b border-[oklch(0.65_0.2_245)] pb-1 text-[10px] font-medium tracking-[0.2em] text-[oklch(0.65_0.2_245)]">
            VIEW&nbsp;&nbsp;ALL <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}