import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { doctor, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70"
          : "bg-background/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid size-10 md:size-11 place-items-center rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-tight shadow-soft">
            AG
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[15px] md:text-base font-semibold text-foreground">
              Dr. Ajinkya R. Gurao
            </span>
            <span className="text-[11px] md:text-xs text-muted-foreground tracking-wide">
              General &amp; Laparoscopic Surgeon
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{
                className:
                  "text-primary bg-primary-soft",
              }}
              inactiveProps={{
                className: "text-foreground/75 hover:text-primary hover:bg-muted",
              }}
              className="px-3.5 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${doctor.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 md:px-5 py-2 md:py-2.5 text-sm font-medium shadow-soft hover:bg-primary/90 transition-colors"
          >
            <Phone className="size-4" />
            <span className="hidden md:inline">Book Appointment</span>
            <span className="md:hidden">Call</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid size-10 place-items-center rounded-full border border-border text-foreground hover:bg-muted"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary-soft" }}
                inactiveProps={{ className: "text-foreground/80" }}
                className="px-4 py-3 rounded-xl text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${doctor.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              <Phone className="size-4" /> Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
