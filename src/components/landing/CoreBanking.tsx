

const dashboard = "/cb7-dashboard.jpg";
export function CoreBanking() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
      <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none text-[28rem] font-bold leading-none text-transparent opacity-[0.08]"
        style={{ WebkitTextStroke: "1px oklch(0.65 0.2 245)" }}>
        B7
      </span>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-light leading-tight text-foreground lg:text-5xl">
            A complete cloud-based<br />core banking.
          </h2>
          <p className="mt-8 max-w-md text-base text-foreground/70">
            Faster time to market with our cloud-based<br />core banking services
          </p>
          <div className="mt-10 flex flex-col items-start gap-6">
            <button className="rounded-md px-10 py-4 text-xs font-medium tracking-[0.2em] text-white shadow-[0_10px_30px_-10px_oklch(0.55_0.22_260/0.6)] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-cta)" }}>
              REQUEST&nbsp;&nbsp;DEMO
            </button>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-[oklch(0.65_0.2_245)] underline-offset-4 hover:underline">
              LEARN&nbsp;&nbsp;MORE <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
            <img src={dashboard} alt="CB7 AML Dashboard" className="w-full" loading="lazy" width={1280} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
}