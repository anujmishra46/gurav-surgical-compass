import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { doctor, hospitals } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Practice Locations — Dr. Ajinkya R. Gurao, Mumbai" },
      {
        name: "description",
        content:
          "Consult Dr. Ajinkya R. Gurao at Zen Multi Speciality Hospital Chembur, B.K. Nadkarni Hospital Parel, Mandapeshwar Nursing Home Borivali and K.K. Medicare Sewri.",
      },
      {
        property: "og:title",
        content: "Practice Locations — Dr. Ajinkya R. Gurao",
      },
      {
        property: "og:description",
        content: "Consulting at four leading hospitals across Mumbai.",
      },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: Locations,
});

function Locations() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20">
        <SectionHeading
          eyebrow="Practice Locations"
          title="Consulting across Mumbai."
          description="Dr. Ajinkya is associated with four hospitals across Mumbai. Please call ahead to confirm the schedule and reserve your consultation."
        />
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {hospitals.map((h) => (
            <article
              key={h.name}
              className="rounded-3xl border border-border bg-card shadow-soft hover:shadow-card transition-shadow overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] bg-muted border-b border-border">
                <iframe
                  title={`Map of ${h.name}`}
                  src={h.mapEmbed}
                  loading="lazy"
                  className="h-full w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                  {h.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <MapPin className="size-4 text-secondary shrink-0 mt-0.5" />
                  <span>{h.address}</span>
                </p>
                <p className="mt-3 text-sm text-foreground/85 flex items-center gap-2">
                  <Clock className="size-4 text-secondary" />
                  {h.timing}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${doctor.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90"
                  >
                    <Phone className="size-4" /> Call
                  </a>
                  <a
                    href={h.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border text-foreground px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary"
                  >
                    Get Directions <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
