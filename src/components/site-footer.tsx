import { Link } from "@tanstack/react-router";
import { Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { doctor, hospitals, navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 md:mt-32 border-t border-border bg-surface">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground font-display font-semibold shadow-soft">
                AG
              </span>
              <div className="leading-tight">
                <div className="font-display font-semibold text-foreground">
                  {doctor.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {doctor.qualifications}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Consultant {doctor.profession.toLowerCase()} providing modern,
              patient-first surgical care across Mumbai.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Practice Locations
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {hospitals.map((h) => (
                <li key={h.name} className="flex gap-2 items-start">
                  <MapPin className="size-4 text-secondary mt-0.5 shrink-0" />
                  <span>{h.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${doctor.phoneRaw}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Phone className="size-4 text-secondary" /> {doctor.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${doctor.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary break-all"
                >
                  <Mail className="size-4 text-secondary" /> {doctor.email}
                </a>
              </li>
              <li>
                <a
                  href={doctor.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="size-4 text-secondary" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {doctor.name}. All rights reserved.
          </p>
          <p>
            For medical emergencies please call{" "}
            <a
              href={`tel:${doctor.phoneRaw}`}
              className="text-primary font-medium"
            >
              {doctor.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
