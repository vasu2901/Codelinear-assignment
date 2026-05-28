import { ArrowRight } from "lucide-react";

function LogoTile() {
  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-[oklch(0.18_0.06_260)]">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 p-4 sm:p-6 md:p-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 bg-[oklch(0.65_0.2_245)]"
            style={{
              clipPath:
                "polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%, 50% 50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ featured = false }: { featured?: boolean }) {
  return (
    <article
      className={`rounded-2xl border border-white/5 bg-[#061520] p-4 sm:p-5 transition-all hover:border-white/10 flex flex-col ${
        featured
          ? "sm:col-span-2 lg:grid lg:grid-cols-[240px_1fr] lg:items-stretch lg:gap-8"
          : ""
      }`}
    >
      {featured && (
        <div className="mb-5 lg:mb-0">
          <div className="mx-auto w-full max-w-[220px] sm:max-w-[240px] lg:max-w-full">
            <LogoTile />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#1ea7ff]/80">
            Getting Started
          </p>
          <h3
            className={`mt-3 leading-snug text-white ${
              featured
                ? "text-[22px] sm:text-[26px] font-light max-w-[340px]"
                : "text-[18px] sm:text-[20px] font-light"
            }`}
          >
            How to transition from a traditional to a digital bank
          </h3>
          <p className="mt-4 text-[11px] tracking-wide text-white/45">
            David Grohl &nbsp;&nbsp; 17/08/24
          </p>
        </div>

        <button className="mt-8 h-10 w-full rounded-md border border-white/10 px-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/70 transition hover:bg-white/5 hover:text-white">
          Read More
        </button>
      </div>
    </article>
  );
}

export function Insights() {
  return (
    <section className="bg-[#02080d] px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button className="mt-8 rounded-md border border-white/30 px-8 py-3 text-[10px] font-medium tracking-[0.2em] text-white transition-colors hover:bg-white/5">
            INSIGHTS
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:auto-rows-fr lg:grid-cols-2">
          <Card featured />
          <div className="h-full">
            <Card />
          </div>
          <div className="h-full">
            <Card />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl justify-center sm:justify-end">
        <a
          href="#"
          className="inline-flex items-center gap-2 border-b border-[oklch(0.65_0.2_245)] pb-1 text-[10px] font-medium tracking-[0.2em] text-[oklch(0.65_0.2_245)]"
        >
          READ&nbsp;&nbsp;ALL&nbsp;&nbsp;INSIGHTS
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </section>
  );
}
