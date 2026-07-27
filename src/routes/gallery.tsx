import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import portrait from "@/assets/dr-ajinkya-portrait.png.asset.json";
import galleryOpd from "@/assets/gallery-opd.jpg.asset.json";
import galleryZenOr from "@/assets/gallery-zen-or.jpg.asset.json";
import galleryLaparoscopic from "@/assets/gallery-laparoscopic-real.jpg.asset.json";
import galleryCertificate from "@/assets/gallery-certificate.jpg.asset.json";
import { SectionHeading } from "@/components/section-heading";

const categories = [
  "All",
  "Conference",
  "Operating Room",
  "Hospital Practice",
  "Laparoscopic Surgery",
  "Awards & Certifications",
] as const;
type Category = (typeof categories)[number];

type Item = { src: string; alt: string; category: Exclude<Category, "All">; aspect?: string };

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dr. Ajinkya R. Gurao" },
      {
        name: "description",
        content:
          "A curated look at Dr. Ajinkya R. Gurao's surgical practice, hospital work, conference talks and certifications.",
      },
      { property: "og:title", content: "Gallery — Dr. Ajinkya R. Gurao" },
      {
        property: "og:description",
        content: "Surgical practice, conferences and certifications.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<Category>("All");

  const items: Item[] = useMemo(
    () => [
      { src: portrait.url, alt: "Dr. Ajinkya at a medical conference", category: "Conference", aspect: "aspect-[4/5]" },
      { src: galleryZenOr.url, alt: "Dr. Ajinkya in the operating room", category: "Operating Room", aspect: "aspect-square" },
      { src: galleryOpd.url, alt: "OPD consultation with a patient", category: "Hospital Practice", aspect: "aspect-[4/3]" },
      { src: galleryLaparoscopic.url, alt: "Laparoscopic surgery in progress", category: "Laparoscopic Surgery", aspect: "aspect-[4/5]" },
      { src: galleryCertificate.url, alt: "FMAS Fellowship certificate", category: "Awards & Certifications", aspect: "aspect-[4/3]" },
    ],
    [],
  );

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <section className="container-page pt-14 md:pt-20">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from practice, teaching and training."
          description="A patient-friendly look at Dr. Ajinkya's work — surgical practice, hospital settings, conferences and certifications."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground/75 border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page py-12 md:py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((it) => (
            <figure
              key={it.src}
              className="mb-5 break-inside-avoid rounded-2xl overflow-hidden border border-border bg-surface shadow-soft"
            >
              <div className={it.aspect ?? "aspect-[4/3]"}>
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-muted-foreground flex items-center justify-between">
                <span>{it.alt}</span>
                <span className="text-[10px] uppercase tracking-wider text-secondary font-medium">
                  {it.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
