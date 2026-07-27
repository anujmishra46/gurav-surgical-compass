import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { doctor } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr. Ajinkya R. Gurao — Book an Appointment" },
      {
        name: "description",
        content:
          "Contact Dr. Ajinkya R. Gurao. Call +91 8898453696, email drajinkyagurav@gmail.com or send a message via the contact form.",
      },
      {
        property: "og:title",
        content: "Contact Dr. Ajinkya R. Gurao",
      },
      {
        property: "og:description",
        content: "Book an appointment or send a message.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  mobile: z
    .string()
    .trim()
    .min(7, "Please enter a valid mobile number")
    .max(20)
    .regex(/^[+\d\s-]+$/, "Only digits, spaces and + are allowed"),
  email: z.string().trim().email("Please enter a valid email").max(160),
  message: z.string().trim().min(10, "Please share a little more detail").max(1000),
});

function Contact() {
  const [values, setValues] = useState({ name: "", mobile: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nMobile: ${parsed.data.mobile}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:${doctor.email}?subject=${encodeURIComponent(
      "Appointment enquiry",
    )}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="container-page pt-14 md:pt-20">
        <SectionHeading
          eyebrow="Contact"
          title="Speak with Dr. Ajinkya."
          description="Reach out for consultations, second opinions or emergency surgical care. Every enquiry is reviewed personally."
        />
      </section>

      <section className="container-page pb-20 md:pb-28 pt-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14">
          {/* CONTACT INFO */}
          <div className="space-y-4">
            <a
              href={`tel:${doctor.phoneRaw}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:border-primary/20 transition-all"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Phone className="size-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Call
                </div>
                <div className="font-display text-lg font-semibold text-foreground">
                  {doctor.phone}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Available for appointments and emergencies
                </div>
              </div>
            </a>

            <a
              href={`mailto:${doctor.email}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:border-primary/20 transition-all"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Mail className="size-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </div>
                <div className="font-display text-base font-semibold text-foreground break-all">
                  {doctor.email}
                </div>
              </div>
            </a>

            <a
              href={doctor.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:border-primary/20 transition-all"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                <Linkedin className="size-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  LinkedIn
                </div>
                <div className="font-display text-base font-semibold text-foreground">
                  Dr. Ajinkya Gurao
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-secondary-soft text-secondary">
                <MapPin className="size-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Practicing In
                </div>
                <div className="font-display text-base font-semibold text-foreground">
                  {doctor.city}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  4 hospital associations — see Locations
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card shadow-card p-6 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-secondary-soft text-secondary">
                  <CheckCircle2 className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  Thank you.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                  Your email client has opened with the enquiry drafted.
                  Dr. Ajinkya will get back to you personally.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Send a message
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share a brief note about your concern. All information stays
                  private.
                </p>

                <div className="mt-8 grid gap-5">
                  <Field
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={(v) => setValues({ ...values, name: v })}
                    error={errors.name}
                    placeholder="Full name"
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Mobile Number"
                      name="mobile"
                      value={values.mobile}
                      onChange={(v) => setValues({ ...values, mobile: v })}
                      error={errors.mobile}
                      placeholder="+91 ..."
                      inputMode="tel"
                    />
                    <Field
                      label="Email"
                      name="email"
                      value={values.email}
                      onChange={(v) => setValues({ ...values, email: v })}
                      error={errors.email}
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      value={values.message}
                      onChange={(e) => setValues({ ...values, message: e.target.value })}
                      rows={5}
                      maxLength={1000}
                      placeholder="Briefly describe your concern..."
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-soft hover:bg-primary/90"
                    >
                      <Send className="size-4" /> Send Message
                    </button>
                    <a
                      href={`tel:${doctor.phoneRaw}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border text-foreground px-6 py-3.5 text-sm font-medium hover:border-primary hover:text-primary"
                    >
                      <Phone className="size-4" /> Call Now
                    </a>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, value, onChange, error, placeholder, type = "text", inputMode,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
