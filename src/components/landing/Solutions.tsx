import { Aperture, Atom, Workflow, Grid3x3, Layers, Boxes } from "lucide-react";

const items = [
  { Icon: Aperture, title: "Core Banking CB7", body: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance." },
  { Icon: Workflow, title: "Digital Banking N7", body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients", tag: "" },
  { Icon: Atom, title: "Open Banking", body: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring." },
  { Icon: Layers, title: "Loan Origination System", body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients", tag: "NBFC" },
  { Icon: Boxes, title: "Loan Management System", body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients", tag: "NBFC" },
];

export function Solutions() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-light leading-tight text-foreground lg:text-4xl">
            All of our solutions are<br />tailor-made to your needs
          </h2>
          <button className="mt-10 rounded-md border border-foreground/80 px-8 py-4 text-xs font-medium tracking-[0.2em] text-foreground transition-colors hover:bg-foreground/5">
            REQUEST&nbsp;&nbsp;DEMO
          </button>
        </div>
        <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2">
          {items.map(({ Icon, title, body, tag }) => (
            <div key={title} className="group">
              <div className="flex items-start justify-between">
                <Icon className="h-9 w-9 text-foreground/70 transition-transform group-hover:scale-110" strokeWidth={1.2} />
                {tag && <span className="text-[10px] tracking-widest text-foreground/50">{tag}</span>}
              </div>
              <h3 className="mt-10 text-xl font-medium text-foreground">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">{body}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-[oklch(0.65_0.2_245)] underline-offset-4 hover:underline">
                LEARN&nbsp;&nbsp;MORE <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}