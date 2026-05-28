const phoneDashboard = "/phone-dashboard.png";
const phoneAnalytics = "/phone-analytics.png";
const phoneProfile = "/phone-profile.png";

function Sparkle() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="text-secondary-foreground/30 shrink-0"
    >
      <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Nav() {
  return (
    <header
      className="border-b border-black/5"
      style={{ backgroundColor: "var(--secondary-background)" }}
    >
      <div className="flex items-center justify-center gap-3 px-4 md:px-8 py-4 text-xs md:text-sm whitespace-nowrap overflow-hidden">
        <span className="font-semibold tracking-tight text-[var(--brand)]">
          N7
        </span>

        <span className="text-black/60">Say</span>

        <span>👋</span>

        <span className="text-black/70">
          to the new way of banking
        </span>

        <Sparkle />

        <span className="font-semibold tracking-tight text-[var(--brand)]">
          CB7
        </span>

        <span className="text-black/60">Say</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="max-w-[320px] mx-auto md:mx-0">
      <h1 className="text-[38px] md:text-[64px] font-semibold tracking-tight leading-[0.92] text-black">
        Digital banking
        <br />
        out-of-the-box
      </h1>

      <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-black/55">
        N7 helps your financial institution improve the client experience,
        automate and optimize procedures.
      </p>

      <button className="mt-7 rounded-md bg-[var(--brand)] px-5 py-2.5 text-[11px] font-medium tracking-wider uppercase text-white shadow-sm hover:opacity-90 transition">
        Request demo
      </button>

      <div className="mt-6">
        <a
          href="#features"
          className="text-[11px] font-medium tracking-wider uppercase text-[var(--brand)] hover:underline"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}

type FeatureProps = {
  image: string;
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
};

function Feature({
  image,
  title,
  body,
  bullets,
  reverse = false,
}: FeatureProps) {
  return (
    <div
      className={`
        flex flex-col items-center text-center
        md:grid md:grid-cols-2 md:items-center md:text-left
        gap-10 md:gap-20
        ${reverse ? "md:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* PHONE */}
      <div className="flex justify-center w-full">
        <img
          src={image}
          alt={title}
          className="
            w-[190px]
            sm:w-[220px]
            md:w-[180px]
            lg:w-[220px]
            xl:w-[250px]
            h-auto
            object-contain
            drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)]
          "
        />
      </div>

      {/* TEXT */}
      <div className="max-w-[290px]">
        <h2 className="text-[22px] md:text-lg font-semibold leading-snug text-black">
          {title}
        </h2>

        <p className="mt-4 text-sm md:text-sm leading-relaxed text-black/55">
          {body}
        </p>

        <ul className="mt-5 space-y-3">
          {bullets.map((b) => (
            <li
              key={b}
              className="
                flex items-start gap-3
                text-sm md:text-sm
                text-black/70
              "
            >
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
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
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* LEFT CIRCLES */}
      <div className="absolute left-[-280px] top-[180px] h-[620px] w-[620px] rounded-full border border-black/[0.04]" />
      <div className="absolute left-[-140px] top-[320px] h-[360px] w-[360px] rounded-full border border-black/[0.04]" />

      {/* RIGHT SHAPES */}
      <div className="absolute right-[-120px] top-[120px] h-[260px] w-[260px] rounded-full border border-black/[0.03]" />
      <div className="absolute right-[60px] bottom-[140px] h-[180px] w-[180px] rounded-full border border-black/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-24">
        <div className="grid md:grid-cols-[420px_1fr] gap-16 md:gap-24 items-start">
          
          {/* HERO */}
          <div className="md:sticky md:top-24">
            <Hero />
          </div>

          {/* FEATURES */}
          <div
            id="features"
            className="flex flex-col gap-24 md:gap-32"
          >
            <Feature
              image={phoneDashboard}
              title="Fully compliant with regulatory requirements"
              body="The global nature of risk management with regulations is achieved by our risk management framework."
              bullets={[
                "Pre-integrated security system",
                "Regulatory-ready architecture",
                "Digitally connected core",
              ]}
            />

            <Feature
              reverse
              image={phoneAnalytics}
              title="No legacy IT systems"
              body="Our Digital Banking Solution helps financial institutions modernize operations."
              bullets={[
                "Adaptive intelligent API",
                "Ambient user experience",
                "Cloud-native architecture",
              ]}
            />

            <Feature
              image={phoneProfile}
              title="No tellers or branches"
              body="Accelerate innovation while reducing operational transformation risks."
              bullets={[
                "Paperless banking",
                "Digital transformation capability",
                "Optimized and scalable",
              ]}
            />
          </div>
        </div>
      </div>

      <CTASection />
    </section>
  );
}

export function CTASection() {
  return (
    <section className="px-4 md:px-6 py-8 md:py-10">
      <div
        className="
          max-w-6xl mx-auto
          rounded-2xl
          px-6 md:px-10
          py-8 md:py-10
          text-white
          border border-white/10
          overflow-hidden
          relative
        "
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0,120,255,0.15), transparent 30%), var(--cta-bg)",
        }}
      >
        {/* subtle lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-10 top-0 h-full w-px bg-white/20" />
          <div className="absolute right-32 top-0 h-full w-px bg-white/10" />
        </div>

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
              Take the full advantage of
              <br />
              going paper-less now.
            </h2>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              N7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button className="h-10 px-5 rounded-md border border-white/20 text-[11px] uppercase tracking-wider font-medium hover:bg-white/5 transition">
              Contact us
            </button>

            <button className="h-10 px-5 rounded-md bg-[var(--brand)] text-[11px] uppercase tracking-wider font-medium text-white hover:opacity-90 transition">
              Request demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DigitalBanking() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Nav />
      <LightSection />
    </div>
  );
}   