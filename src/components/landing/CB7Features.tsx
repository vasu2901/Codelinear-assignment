import { Check } from "lucide-react";
import { CTASection } from "./DigitalBanking";
const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];
const features2 = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];
const dashboard = "/cb7-dashboard.jpg";

export function CB7Features() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative -ml-6 overflow-hidden rounded-xl ring-1 ring-[oklch(0.65_0.2_245)]/40 lg:-ml-20">
          <img src={dashboard} alt="CB7 KYC Dashboard" loading="lazy" className="w-full translate-x-[-6%]" />
        </div>
        <div>
          <h2 className="text-3xl font-light leading-tight text-foreground lg:text-4xl">
            Run a more efficient, flexible,<br />and digitally connected<br />corebanking system
          </h2>
          <h3 className="mt-10 text-sm font-semibold text-foreground">What you will get:</h3>
          <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {[...features, ...features2].map((f) => (
              <div key={f} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.2_245)]">
                  <Check className="h-3 w-3 text-background" strokeWidth={3} />
                </span>
                <p className="text-sm text-foreground/80">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </section>
  );
}