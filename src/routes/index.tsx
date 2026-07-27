import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  ArrowRight,
  ClipboardCheck,
  HeartHandshake,
  Microscope,
  UserRoundCog,
  ScanLine,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";
import portrait from "@/assets/dr-ajinkya-portrait.png";
import { doctor, highlights, trustPillars } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

const iconMap = {
  ClipboardCheck,
  HeartHandshake,
  Microscope,
  UserRoundCog,
  ScanLine,
  ShieldCheck,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Ajinkya R. Gurao — General & Laparoscopic Surgeon, Mumbai" },
      {
        name: "description",
        content:
          "Consultant General & Laparoscopic Surgeon in Mumbai — MS, FMAS. Evidence-based, minimally invasive surgical care with a focus on patient safety and faster recovery.",
      },
      {
        property: "og:title",
        content: "Dr. Ajinkya R. Gurao — General & Laparoscopic Surgeon",
      },
      {
        property: "og:description",
        content:
          "Evidence-based, minimally invasive surgical care in Mumbai — MS, FMAS.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 600px at 85% -10%, rgba(31,167,161,0.10), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(11,61,145,0.08), transparent 60%)",
          }}
        />
        <div className="container-page pt-12 md:pt-20 pb-14 md:pb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
                <span className="size-1.5 rounded-full bg-secondary" />
                Now consulting across 4 hospitals in Mumbai
              </div>
              <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-semibold text-foreground tracking-tight">
                {doctor.name}
              </h1>
              <p className="mt-4 font-accent text-lg md:text-xl text-primary font-medium">
                {doctor.profession}
              </p>
              <p className="mt-1 text-sm md:text-base text-muted-foreground">
                {doctor.qualifications}
              </p>

              <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                {doctor.tagline}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${doctor.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-card hover:bg-primary/90 transition-colors"
                >
                  <Phone className="size-4" /> Book Appointment
                </a>
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-2 rounded-full bg-background border border-border text-foreground px-6 py-3.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="size-4" /> Practice Locations
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full text-foreground px-2 py-3 text-sm font-medium hover:text-primary transition-colors"
                >
                  Contact Doctor <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary-soft via-transparent to-secondary-soft blur-2xl opacity-60"
              />
              <div className="relative rounded-[2rem] overflow-hidden bg-surface border border-border shadow-elevated aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                <img
                  src={portrait.url}
                  alt={`Portrait of ${doctor.name}`}
                  className="h-full w-full object-cover"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-background border border-border rounded-2xl shadow-card p-4 flex items-center gap-3 max-w-[16rem]">
                <span className="grid size-10 place-items-center rounded-full bg-secondary-soft text-secondary">
                  <Award className="size-5" />
                </span>
                <div className="text-xs leading-tight">
                  <div className="font-semibold text-foreground">FMAS Certified</div>
                  <div className="text-muted-foreground">
                    Fellowship in Minimal Access Surgery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border-y border-border py-10 md:py-12">
          {highlights.map((h) => (
            <div key={h.label} className="text-center md:text-left px-2">
              <div className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight">
                {h.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Why patients trust Dr. Ajinkya"
          title={<>A calm, considered approach to modern surgery.</>}
          description="Every consultation begins with listening. Every plan is built around the patient — their history, their concerns, and the safest possible route to recovery."
        />

        <div className="mt-14 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((p) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            return (
              <div
                key={p.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-card hover:border-primary/20 transition-all"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="container-page pb-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-14">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 size-80 rounded-full bg-secondary/25 blur-3xl"
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-primary-foreground/80">
                <Sparkles className="size-3.5" /> Consultations by appointment
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-4xl font-semibold leading-tight">
                Speak to Dr. Ajinkya about your surgical concern — today.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/80 max-w-lg">
                Personal, unhurried consultations to understand your condition
                and guide you to the safest treatment path.
              </p>
            </div>
            <div className="flex md:justify-end gap-3 flex-wrap">
              <a
                href={`tel:${doctor.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-background text-primary px-6 py-3.5 text-sm font-medium hover:bg-background/90"
              >
                <Phone className="size-4" /> {doctor.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium hover:bg-primary-foreground/10"
              >
                Send a Message <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
