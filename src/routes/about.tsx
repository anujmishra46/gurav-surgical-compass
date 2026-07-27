import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import portrait from "@/assets/dr-ajinkya-portrait.png.asset.json";
import { doctor, education, experience } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Ajinkya R. Gurao — Consultant Surgeon, Mumbai" },
      {
        name: "description",
        content:
          "Learn about Dr. Ajinkya R. Gurao — MS General Surgery, FMAS. Training at YMT and Kokilaben Hospital, currently consulting across leading hospitals in Mumbai.",
      },
      { property: "og:title", content: "About Dr. Ajinkya R. Gurao" },
      {
        property: "og:description",
        content:
          "Consultant General & Laparoscopic Surgeon. MS, FMAS. Trained at YMT and Kokilaben Hospital.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const focusAreas = [
  "General Surgery",
  "Minimal Access Surgery",
  "Trauma Surgery",
  "Gastrointestinal Surgery",
  "Emergency Surgical Care",
  "Peri-operative Patient Management",
];

function About() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[2rem] overflow-hidden bg-surface border border-border shadow-card aspect-[4/5] max-w-md">
              <img
                src={portrait.url}
                alt={doctor.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="eyebrow">About the Doctor</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl leading-[1.1] font-semibold text-foreground">
              A surgeon dedicated to modern, patient-first care.
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              {doctor.name} is a consultant {doctor.profession.toLowerCase()}{" "}
              practicing across Mumbai. His work brings together contemporary
              laparoscopic technique, careful clinical judgement and a deep
              respect for each patient's story — before, during and after
              surgery.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              He has trained and worked at teaching hospitals with high surgical
              volume, and has completed a clinical observership at Kokilaben
              Dhirubhai Ambani Hospital, one of India's premier tertiary care
              centres.
            </p>

            <div className="mt-8">
              <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
                Areas of clinical experience
              </h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
                {focusAreas.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <CheckCircle2 className="size-4 text-secondary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading eyebrow="Education & Training" title="Rigorous training. Continuously refined." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {education.map((e) => (
            <div key={e.degree} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {e.degree}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{e.institution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="container-page pb-20 md:pb-28">
        <SectionHeading eyebrow="Professional Experience" title="Consulting across leading Mumbai hospitals." />

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" aria-hidden />
          <ul className="space-y-6">
            {experience.map((exp) => (
              <li
                key={exp.hospital}
                className="relative pl-14 md:pl-20 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span
                  className="absolute left-4 md:left-6 top-6 -translate-x-1/2 grid size-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft"
                  aria-hidden
                >
                  <Building2 className="size-4" />
                </span>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="font-display font-semibold text-foreground">
                    {exp.hospital}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {exp.location}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{exp.role}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/expertise"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90"
          >
            View Areas of Expertise <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
