

const phoneDashboard = "/phone-dashboard.png";
const phoneAnalytics = "/phone-analytics.png";
const phoneProfile = "/phone-profile.png";

export function CTASection2() {
    return (
        <section
            className="relative overflow-hidden px-8 md:px-16 py-14 md:py-20 text-white"
            style={{ backgroundColor: "var(--cta-bg)" }}
        >
            {/* Faint CB7 watermark */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-start justify-center"
            >
                <span className="text-[18rem] md:text-[22rem] font-semibold tracking-tighter text-white/[0.03] leading-none -mt-12 select-none">
                    CB7
                </span>
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-6xl mx-auto">
                <div className="max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                        Take the full advantage of<br />going paper-less now.
                    </h2>
                    <p className="mt-4 text-sm text-white/55 max-w-md leading-relaxed">
                        N7 helps your financial institution improve the client experience,
                        automate and optimize procedures, simplify banking operations.
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button className="rounded-md border border-white/15 px-6 py-3 text-xs font-medium tracking-wide uppercase hover:bg-white/5 transition">
                        Contact us
                    </button>
                    <button className="rounded-md bg-[var(--brand)] px-6 py-3 text-xs font-medium tracking-wide uppercase text-[var(--brand-foreground)] hover:opacity-90 transition">
                        Request demo
                    </button>
                </div>
            </div>
        </section>
    );
}

function Sparkle() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-secondary-foreground/40 shrink-0">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="currentColor" />
        </svg>
    );
}

function Nav() {
    return (
        <header className="bg-background border-b border-border/60">
            <div className="flex items-center justify-center gap-5 px-8 py-5 text-sm">
                <span className="font-semibold tracking-tight text-[var(--brand)]">N7</span>
                <span className="text-secondary-foreground/70">Say</span>
                <span className="text-lg">👋</span>
                <span className="text-secondary-foreground/70">to the new way of banking</span>
                <Sparkle />
                <span className="font-semibold tracking-tight text-[var(--brand)]">CB7</span>
                <span className="text-secondary-foreground/70">Say</span>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section className="px-8 md:px-16 pt-16 pb-12 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-secondary-foreground leading-[1.05]">
                Digital banking<br />out-of-the-box
            </h1>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
                N7 helps your financial institution improve the client experience,
                automate and optimize procedures.
            </p>
            <button className="mt-8 rounded-md bg-[var(--brand)] px-6 py-3 text-xs font-medium tracking-wide uppercase text-[var(--brand-foreground)] shadow-sm hover:opacity-90 transition">
                Request demo
            </button>
        </section>
    );
}

type FeatureProps = {
    image: string;
    title: string;
    body: string;
    bullets: string[];
    reverse?: boolean;
};

function Feature({ image, title, body, bullets }: FeatureProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
      <div className="flex justify-center">
        <img src={image} alt={title} width={640} height={896} loading="lazy" className="w-48 md:w-56 drop-shadow-2xl" />
      </div>
      <div className="max-w-xs">
        <h2 className="text-base font-semibold tracking-tight text-foreground">{title}</h2>
        <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">{body}</p>
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-xs text-foreground/80">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)] shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LightSection() {
    return (
        <div className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
            {/* Faint N7 watermark */}
            <div aria-hidden className="pointer-events-none absolute inset-0 flex items-start justify-end">
                <span className="text-[20rem] md:text-[26rem] font-semibold tracking-tighter text-secondary-foreground/[0.04] leading-none -mt-10 -mr-10 select-none">
                    N7
                </span>
            </div>
            <div className="relative">
                <Hero />
                <Feature
                    image={phoneDashboard}
                    title="Fully compliant with regulatory requirements"
                    body="The global nature of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank in special instances and conditions."
                    bullets={["Pre-Integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"]}
                />
                <Feature
                    reverse
                    image={phoneAnalytics}
                    title="No legacy IT systems"
                    body="Our digital banking solution and multi-channel approach helps financial institutions take advantage of digital opportunities by providing solutions free from regulatory restrictions."
                    bullets={["Adaptive & Intelligent API", "Ambient User Experience", "Cloud-native API Meets TCO"]}
                />
                <Feature
                    image={phoneProfile}
                    title="No tellers or branches"
                    body="Our digital banking out-of-the-box helps you to accelerate innovation while reducing risks of transforming operational structure and lower brand new experience to your users."
                    bullets={["Direct Best in Paperless Banking", "Digital Transformation Capability", "Optimized, Adaptable and Scalable"]}
                />
            </div>
        </div>
    );
}

export function DigitalBanking() {
    return (
        <div className="min-h-screen bg-background">
            <Nav />
            <LightSection />
            <CTASection2 />
        </div>
    );
}