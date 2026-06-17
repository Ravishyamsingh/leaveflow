import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <main>
      <Hero />

      <section id="platform" className="scroll-mt-24">
        <SectionTitle preTitle="Platform" title="LeaveFlow overview">
          LeaveFlow simplifies leave requests, approvals, and tracking for
          teams — employees apply, admins approve, and balances update in one
          place.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>

      <section id="demo" className="scroll-mt-24">
        <SectionTitle preTitle="Demo" title="See LeaveFlow in action">
          Quick walkthroughs and screenshots demonstrate the Apply → Approve
          → Balance flow.
        </SectionTitle>

        <Video />
      </section>

      <section id="use-cases" className="scroll-mt-24">
        <SectionTitle preTitle="Use Cases" title="Who benefits from LeaveFlow">
          Employees, managers, and HR teams gain a shared, auditable record of
          leave activity and balances.
        </SectionTitle>

        <Testimonials />
      </section>

      <section id="faq" className="scroll-mt-24">
        <SectionTitle preTitle="FAQ" title="Frequently asked questions">
          Clear answers about LeaveFlow features and security.
        </SectionTitle>

        <Faq />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Cta />
      </section>
    </main>
  );
}
