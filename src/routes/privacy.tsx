import { createFileRoute } from "@tanstack/react-router";
import { doctor } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Dr. Ajinkya R. Gurao" },
      {
        name: "description",
        content:
          "How Dr. Ajinkya R. Gurao's website handles patient enquiries, contact information and personal data.",
      },
      { property: "og:title", content: "Privacy Policy — Dr. Ajinkya R. Gurao" },
      { property: "og:description", content: "How we handle your information." },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="container-page py-16 md:py-24 max-w-3xl">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <div className="mt-10 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
        <p>
          This page is maintained by {doctor.name} to explain how information
          submitted through this website is handled. This policy is provided
          for transparency and does not constitute legal advice.
        </p>

        <Block title="Information we collect">
          When you use the contact form, you may voluntarily share your name,
          mobile number, email and a short message. Calls and emails placed
          directly through the site remain between you and {doctor.name}.
        </Block>

        <Block title="How your information is used">
          Enquiries are used solely to respond to your appointment request or
          medical question. Your information is not sold, rented or shared
          with third parties for marketing.
        </Block>

        <Block title="Medical confidentiality">
          Any clinical information you share is handled in line with standard
          medical confidentiality practices. Please avoid sharing sensitive
          medical records over the contact form; call the practice for
          detailed consultations.
        </Block>

        <Block title="Cookies & analytics">
          This website may use basic analytics to understand traffic patterns.
          No personally identifying tracking is used.
        </Block>

        <Block title="Contact">
          For questions about this policy, email{" "}
          <a href={`mailto:${doctor.email}`} className="text-primary underline">
            {doctor.email}
          </a>{" "}
          or call{" "}
          <a href={`tel:${doctor.phoneRaw}`} className="text-primary underline">
            {doctor.phone}
          </a>
          .
        </Block>

        <p className="text-xs text-muted-foreground/80">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}
        </p>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2">{children}</p>
    </div>
  );
}
