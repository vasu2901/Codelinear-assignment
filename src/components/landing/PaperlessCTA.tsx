export function PaperlessCTA() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
            Take the full advantage of<br />going paper-less now.
          </h2>
          <p className="mt-6 text-sm text-foreground/65">
            CB7 helps your financial institution improve the client experience,<br />
            automate and optimize procedures, simplify banking operations
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <button className="rounded-md border border-white/30 px-10 py-4 text-xs font-medium tracking-[0.2em] text-foreground transition-colors hover:bg-white/5">
            CONTACT&nbsp;&nbsp;US
          </button>
          <button className="rounded-md px-10 py-4 text-xs font-medium tracking-[0.2em] text-white shadow-[0_10px_30px_-10px_oklch(0.55_0.22_260/0.6)] transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-cta)" }}>
            REQUEST&nbsp;&nbsp;DEMO
          </button>
        </div>
      </div>
    </section>
  );
}