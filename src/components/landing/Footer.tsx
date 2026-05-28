import { ArrowRight } from "lucide-react";

const solutions = ["Core Banking CB7", "Digital Banking N7", "Open Banking", "Loan Origination System", "Loan Management System", "Digital Transformation"];
const banking = ["About Us", "Solutions", "Contact", "Company", "Careers", "Insights", "Core Team", "Brand Center"];
const socials = ["LinkedIn", "X"];

function LinkCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-base font-medium text-foreground">{title}</h4>
      <ul className="mt-6 space-y-4">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="group flex items-center justify-between gap-4 text-sm text-foreground/80 hover:text-foreground">
              <span>{i}</span>
              <ArrowRight className="h-4 w-4 text-[oklch(0.65_0.2_245)] transition-transform group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="bg-clip-text text-[10rem] font-bold leading-none tracking-tight text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, oklch(0.7 0.18 230), oklch(0.45 0.22 265))" }}>
            N7
          </h2>
        </div>
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <h4 className="text-base font-medium text-foreground">London</h4>
            <p className="mt-6 text-sm leading-relaxed text-foreground/75">
              Linktia Infosystems Ltd – CB7,<br />26 Main Road Sundridge,TN14 6EP,<br />England, United Kingdom.
            </p>
          </div>
          <div>
            <h4 className="text-base font-medium text-foreground">Dubai</h4>
            <p className="mt-6 text-sm leading-relaxed text-foreground/75">
              Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
            </p>
          </div>
          <div>
            <h4 className="text-base font-medium text-foreground">London</h4>
            <p className="mt-6 text-sm leading-relaxed text-foreground/75">
              Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 grid max-w-7xl gap-12 lg:grid-cols-[1fr_2fr]">
        <div />
        <div className="grid gap-12 sm:grid-cols-3">
          <LinkCol title="Solutions" items={solutions} />
          <LinkCol title="N7 Banking" items={banking} />
          <LinkCol title="Our Socials" items={socials} />
        </div>
      </div>
      <div className="mx-auto mt-24 max-w-7xl border-t border-white/10 pt-8">
        <p className="text-xs text-foreground/55">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}