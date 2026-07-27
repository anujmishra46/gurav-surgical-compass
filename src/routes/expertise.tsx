import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  Microscope,
  ShieldPlus,
  Activity,
  Droplets,
  Siren,
  LifeBuoy,
  Waypoints,
  Scissors,
  Phone,
  ArrowRight,
} from "lucide-react";
import { doctor, expertise } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

const iconMap = {
  Stethoscope,
  Microscope,
  ShieldPlus,
  Activity,
  Droplets,
  Siren,
  LifeBuoy,
  Waypoints,
  Scissors,
};

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Areas of Expertise — Dr. Ajinkya R. Gurao" },
      {
        name: "description",
        content:
          "General, laparoscopic, hernia, gallbladder, appendix, gastrointestinal, trauma and emergency surgery in Mumbai by Dr. Ajinkya R. Gurao.",
      },
      { property: "og:title", content: "Areas of Expertise — Dr. Ajinkya R. Gurao" },
      {
        property: "og:description",
        content:
          "Comprehensive general and laparoscopic surgical care in Mumbai.",
      },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: Expertise,
});

function Expertise() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20">
        <SectionHeading
          eyebrow="Areas of Expertise"
          title="Comprehensive surgical care — from routine to complex."
          description="Dr. Ajinkya offers the full spectrum of general and laparoscopic surgery. Every procedure is evaluated against the least invasive, most durable option for the patient."
        />
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e) => {
            const Icon = iconMap[e.icon as keyof typeof iconMap];
            return (
              <article
                key={e.slug}
                className="group rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-card hover:border-primary/25 transition-all flex flex-col"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {e.description}
                </p>
                <a
                  href={`tel:${doctor.phoneRaw}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-surface p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Not sure which specialty applies?
            </h3>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Speak to Dr. Ajinkya directly for a clear, unhurried
              consultation and honest guidance on the next steps.
            </p>
          </div>
          <a
            href={`tel:${doctor.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90"
          >
            <Phone className="size-4" /> Book Appointment
          </a>
        </div>
      </section>
    </>
  );
}
